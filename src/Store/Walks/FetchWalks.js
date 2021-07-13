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
      return {
        content: data.content,
        data: data.data,
        language: args.language
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }),
  // reducers(state, { payload }) {
  //   console.log(payload)
  // },
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'fetchWalks.error',
      loadingKey: 'fetchWalks.loading',
      itemKey: null,
    }),
    fulfilled: (state, { payload, type }) => {
      state.fetchWalks.loading = false
      state.fetchWalks.walks = mergeWalks({
        ...state,
        fetchWalks: {
          walks: payload.data.medias
        }
      }, payload)
      state.about = payload.content
    }
  }
}
