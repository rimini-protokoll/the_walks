import { createAction } from '@reduxjs/toolkit'
import i18n from 'i18next'

export default {
  initialState: {},
  action: createAction('language/changeLanguage'),
  reducers(state, { payload }) {
    console.log('payload', state)
    if (typeof payload !== 'undefined') {
    	i18n.changeLanguage(payload)
      state.selectedLanguage = payload
    }
  },
}
