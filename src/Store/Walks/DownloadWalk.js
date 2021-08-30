import {
  buildAsyncState,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import RNFS from 'react-native-fs'
import { mergeWalks } from './util'

const download = async (srcUri, walkId) => {
  let fileName = srcUri.split('/')
  fileName = walkId + fileName[fileName.length - 1].split('?')[0]
  fileName = fileName.replace(/%/g,"")

  const toFile = RNFS.DocumentDirectoryPath + '/' + fileName
  const response = await RNFS.downloadFile({
    fromUrl: srcUri,
    toFile
  }).promise
  return 'file://' + toFile
}

const walkDelete = async localWalk => {
  console.log("DELETING")

  try {
    console.log(localWalk.data.srcUri, localWalk.data.remoteSrcUri)

    if (typeof localWalk.data.srcUri === 'string') {
      await RNFS.unlink(localWalk.data.srcUri)
      await RNFS.unlink(localWalk.data.iconUri)
    } else {
      await Promise.all(localWalk.data.srcUri.map(_walk => walkDelete(_walk)))
    }
  } catch (error) {
    console.error(error)
  } finally {
    localWalk.data.srcUri = localWalk.data.remoteSrcUri
    localWalk.data.iconUri = localWalk.data.remoteIconUri
  }
  await Promise.all(localWalk.data.userPrompt.map(async (prompt, i) => {
    try {
      await RNFS.unlink(prompt.srcUri)
    } catch {
    } finally {
      localWalk.data.userPrompt[i].srcUri = prompt.remoteSrcUri
    }
  }))
  return localWalk
}

const walkDownload = async localWalk => {
  localWalk.data.remoteSrcUri = localWalk.data.srcUri
  if (typeof localWalk.data.srcUri == 'string') {
    console.log('walkDownload store: ',localWalk.data.srcUri, localWalk.data.id)

    const srcUri = await download(localWalk.data.srcUri, localWalk.data.id)

    console.log('walkDownload stored: ',srcUri)
    localWalk.data.srcUri = srcUri
  } else {
    localWalk.srcUri = await Promise.all(localWalk.data.srcUri.map(_walk => walkDownload(_walk)))
  }

  const iconUri = await download(localWalk.data.iconUri, localWalk.data.id)
  localWalk.data.remoteIconUri = localWalk.data.iconUri
  localWalk.data.iconUri = iconUri

  await Promise.all(localWalk.data.userPrompt.map(async (prompt, i) => {
    localWalk.data.userPrompt[i].remoteSrcUri = prompt.srcUri
    localWalk.data.userPrompt[i].srcUri = await download(prompt.srcUri, localWalk.data.id)
  }))

  return localWalk
}

export default {
  initialState: buildAsyncState('downloadWalk'),
  action: createAsyncThunk('walks/downloadWalk', async (args, thunkAPI) => {
    try {
      const {language, walk, deleteWalk} = args
      let localWalk = JSON.parse(JSON.stringify(walk))

      if (deleteWalk) {
        localWalk = await walkDelete(localWalk)
      } else {
        localWalk = await walkDownload(localWalk)
      }
      // console.log("action", localWalk.data.srcUri[0])
      return {
        language, walk: localWalk, deleteWalk
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(String(error))
    }
  }),
  reducers: {
    ...buildAsyncReducers({
      itemKey: null,
      errorKey: 'downloadWalk.error',
      loadingKey: 'downloadWalk.loading'
    }),
    fulfilled: (state, { payload, type }) => {
      try {
        const {language, walk, deleteWalk} = payload
        if (!state.localWalks[language]) {
          state.localWalks[language] = {}
        }
        state.localWalks[language][walk.data.id] = walk

        //state.srcUri = payload
        const walks = mergeWalks(state, payload)
        state.fetchWalks.walks = walks
        if (deleteWalk) {
          const localWalks = JSON.parse(JSON.stringify(state.localWalks))
          delete localWalks[language][walk.data.id]
          state.localWalks = localWalks
        }
      } catch (error) {
        state.downloadWalk.error = error
      } finally {
        state.downloadWalk.loading = false
      }
    }
  }
}
