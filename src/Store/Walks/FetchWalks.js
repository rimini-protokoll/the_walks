import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { createAsyncThunk } from '@reduxjs/toolkit'
import api, { handleError } from '@/Services'
import { mergeWalks } from './util'


export default {
  initialState: {fetchWalks: {error: null, loading: false, walks: []}},
  // action: buildAsyncActions('walks/fetchWalks', fetchWalks),
  action: createAsyncThunk( 'walks/fetchWalks', async (args, thunkAPI) => {
    try {
      const response = await api.get(`texts/${args.language}.md`)
      const data = {
        data: {...response.data.data},
        content: response.data.content
      }
      data.data.medias = await Promise.all(
        data.data.medias.map( async mediaId => (await api.get(`texts/medias/${mediaId}.md`)).data)
      )
      data.data.medias = await Promise.all(
        data.data.medias.map( async walk => {
          if (typeof walk.data.srcUri == 'object') {
            return {
              content: walk.content,
              data: {
                ...walk.data,
                srcUri: await Promise.all(
                  walk.data.srcUri.map( async mediaId => {
                    return (await api.get(`texts/medias/${mediaId}.md`)).data
                  })
                )
              }
            }
          } else {
            return walk
          }
        })
      )
      const legal = (await api.get(`/legal/${args.language}.md`)).data
      const imprint = (await api.get(`/imprint/${args.language}.md`)).data
      const mapstyles = (await api.get(`/settings/mapstyles.json`)).data
      return {
        content: data.content,
        data: data.data,
        legal,
        imprint,
        mapstyles,
        language: args.language
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'fetchWalks.error',
      loadingKey: 'fetchWalks.loading',
      itemKey: null,
    }),
    fulfilled: (state, { payload, type }) => {
      state.about = payload.content
      state.credits = payload.data.credits
      state.legal = payload.legal
      state.imprint = payload.imprint
      state.mapstyles = payload.mapstyles
      state.fetchWalks.walks = mergeWalks({
        ...state,
        fetchWalks: {
          walks: payload.data.medias
        }
      }, payload)
      state.fetchWalks.loading = false
    }
  }
}
