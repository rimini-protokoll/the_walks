import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('startup/hasConnection'),
  reducers(state, { payload }) {
    console.log('hasConnection', payload)
    state.hasConnection = payload
  },
}
