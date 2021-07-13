import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('player/userPrompt'),
  reducers(state, { payload }) {
    state.userPrompt = payload
  },
}
