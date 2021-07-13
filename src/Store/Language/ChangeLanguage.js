import { createAction } from '@reduxjs/toolkit'
import i18n from 'i18next'

export default {
  initialState: {},
  action: createAction('language/changeLanguage'),
  reducers(state, { payload }) {
    console.log('payload', payload)
    if (typeof payload !== 'undefined') {
      state.selectedLanguage = payload
      i18n.changeLanguage(payload)
    }
  },
}
