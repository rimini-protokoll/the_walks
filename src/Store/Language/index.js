import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchLanguages from './FetchLanguages'
import ChangeLanguage from './ChangeLanguage'

const sliceInitialState = {
  selectedLanguage: null,
}

export default buildSlice('language', [FetchLanguages, ChangeLanguage], sliceInitialState).reducer
