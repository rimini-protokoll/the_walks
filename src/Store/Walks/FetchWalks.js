import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import fetchWalks from '@/Services/FetchWalks'

export default {
  initialState: buildAsyncState('fetchWalks'),
  action: buildAsyncActions('walks/fetchWalks', fetchWalks),
  reducers: {
  	...buildAsyncReducers({
	    errorKey: 'fetchWalks.error',
	    loadingKey: 'fetchWalks.loading',
	    itemKey: null,
	  }),
	  fulfilled: (state, { payload, type }) => {
      state.fetchWalks.loading = false
  		state.fetchWalks.walks = payload.walks
  	}
  }
}