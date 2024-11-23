import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { createAction } from '@reduxjs/toolkit'
import init from '@/Services/Init'

export default {
  initialState: buildAsyncState('menu'),
  action: buildAsyncActions('menu/init', init),
  reducers(state, { payload }) {
    console.log(state, payload)
    if (typeof payload.id !== 'undefined') {
      state.id = payload.id
    }
    if (typeof payload.languages !== 'undefined') {
      state.languages = payload.languages
    }
  },
}
