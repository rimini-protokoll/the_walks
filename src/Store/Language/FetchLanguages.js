import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import fetchLanguages from '@/Services/FetchLanguages'
import * as RNLocalize from 'react-native-localize'

export default {
  initialState: buildAsyncState('fetchLanguages'),
  action: buildAsyncActions('language/fetchLanguages', fetchLanguages),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'fetchLanguages.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'fetchLanguages.loading',
      itemKey: 'fetchLanguages.languages',
    }),
    fulfilled: (state, { payload, type }) => {
      state.fetchLanguages.languages = payload
      state.fetchLanguages.error = null
      state.fetchLanguages.loading = false

      // const languages = state.fetchLanguages.languages.languages
      // const userLanguages = RNLocalize.getLocales()
      // state.userLocale = userLanguages[0].languageTag
      // const detectedLanguages = userLanguages.filter(({ languageTag }) => {
      //   return languages.filter(({ languageCode }) => {
      //     return languageTag.split('-')[0] == languageCode
      //   }).length > 0
      // })

      // const userSelectedLanguage = state.selectedLanguage
      // if (!userSelectedLanguage) {
      //   const setDefaultLanguage = () => { 
      //     state.selectedLanguage = detectedLanguages[0].languageCode 
      //   }

      //   if (detectedLanguages.length > 0) {
      //     setDefaultLanguage()
      //   }
      // }
    }
  }
}
