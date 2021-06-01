import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from '@/Store/User/FetchOne'
import FetchLanguages from '@/Store/Language/FetchLanguages'
import FetchWalks from '@/Store/Walks/FetchWalks'
import DefaultTheme from '@/Store/Theme/DefaultTheme'
import axios from 'axios'

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async (args, { dispatch }) => {
    // Timeout to fake waiting some process
    // Remove it, or keep it if you want display a beautiful splash screen ;)
    //await dispatch(FetchOne.action(1))
    
    //await dispatch(DefaultTheme.action({ theme: 'default', darkMode: true }))
    
    await dispatch(FetchLanguages.action())

    await dispatch(FetchWalks.action())

  }),
  reducers: buildAsyncReducers({ itemKey: null })
}
