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
  fileName = walkId + fileName[fileName.length - 1]
  const toFile = RNFS.DocumentDirectoryPath + '/' + fileName
  const response = await RNFS.downloadFile({
    fromUrl: srcUri,
    toFile
  }).promise
  return 'file://' + toFile
}

export default {
  initialState: buildAsyncState('downloadWalk'),
  action: createAsyncThunk('walks/downloadWalk', async (args, thunkAPI) => {
    try {
      const {language, walk, deleteWalk} = args
      const localWalk = {
        content: walk.content,
        data: {
          ...walk.data,
          userPrompt: walk.data.userPrompt.map(prompt => ({...prompt}))
        }
      }

      if (deleteWalk) {
        console.log("DELETING")
        console.log(localWalk.data.srcUri)
        try {
          await RNFS.unlink(localWalk.data.srcUri)
          await RNFS.unlink(localWalk.data.iconUri)
        } catch {
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
      } else {
        const srcUri = await download(walk.data.srcUri, walk.data.id)
        localWalk.data.remoteSrcUri = localWalk.data.srcUri
        localWalk.data.srcUri = srcUri
        
        const iconUri = await download(walk.data.iconUri, walk.data.id)
        localWalk.data.remoteIconUri = localWalk.data.iconUri
        localWalk.data.iconUri = iconUri

        await Promise.all(walk.data.userPrompt.map(async (prompt, i) => {
          localWalk.data.userPrompt[i].remoteSrcUri = prompt.srcUri
          localWalk.data.userPrompt[i].srcUri = await download(prompt.srcUri, walk.data.id)
        }))
        // await new Promise(resolve => setTimeout(resolve, 5000))
      }
      return {
        language, walk: localWalk
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }),
  reducers: {
    ...buildAsyncReducers({
      itemKey: null,
      errorKey: 'downloadWalk.error',
      loadingKey: 'downloadWalk.loading'
    }),
    fulfilled: (state, { payload, type }) => {
      const {language, walk} = payload
      if (!state.localWalks[language]) {
        state.localWalks[language] = {}
      }
      state.localWalks[language][walk.data.id] = walk
      
      console.log('store', walk.data.srcUri)
      //state.srcUri = payload
      const walks = mergeWalks(state, payload)
      state.fetchWalks.walks = walks
      state.downloadWalk.loading = false
    }
  }
}
