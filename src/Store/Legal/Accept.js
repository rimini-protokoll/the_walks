import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('legal/accept'),
  reducers(state, { payload }) {
    state.accepted = payload
  },
}
