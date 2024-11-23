import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import FetchLanguages from '@/Store/Language/FetchLanguages'
import FetchWalks from '@/Store/Walks/FetchWalks'
import DefaultTheme from '@/Store/Theme/DefaultTheme'
import axios from 'axios'

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async (args, { dispatch }) => {
    //await dispatch(DefaultTheme.action({ theme: 'default', darkMode: true }))

    await dispatch(FetchLanguages.action())
    // return await new Promise(resolve => setTimeout(resolve, 10000));
  }),
  reducers: buildAsyncReducers({ itemKey: null }),
}
