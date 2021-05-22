import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from '@/Store/User/FetchOne'
import TheWalksIndex from '@/Store/TheWalksIndex/Menu'
import { navigateAndSimpleReset } from '@/Navigators/Root'
import DefaultTheme from '@/Store/Theme/DefaultTheme'
import axios from 'axios'
import * as RNLocalize from 'react-native-localize'

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async (args, { dispatch }) => {
    // Timeout to fake waiting some process
    // Remove it, or keep it if you want display a beautiful splash screen ;)
    await dispatch(TheWalksIndex.action())
    await dispatch(FetchOne.action(1))
    
    //await dispatch(DefaultTheme.action({ theme: 'default', darkMode: true }))
    
    const userLanguages = RNLocalize.getLocales()
    const languages = [
      {
        title: 'German',
        languageCode: 'de',
        language: 'germany',
      },
      {
        title: 'English',
        languageCode: 'en',
        language: 'united-kingdom'
      },
      {
        title: 'Spanish',
        languageCode: 'es',
        language: 'spain'
      },
    ]
    const selectedLanguage = userLanguages.filter(({ languageTag }) => {
      return languages.filter(({ languageCode }) => {
        return languageTag.split('-')[0] == languageCode
      }).length > 0
    })

    const detectedLanguage = () => {
      navigateAndSimpleReset('The Walks')
    }

    if (selectedLanguage.length > 0) {
      navigateAndSimpleReset('The Walks')
    } else {
      navigateAndSimpleReset('Language')
    }
  }),
  reducers: buildAsyncReducers({ itemKey: null }), // We do not want to modify some item by default
}
