import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('walks/toggleAdvancedControls'),
  reducers(state, { payload }) {
    if (typeof payload === 'boolean') {
      state.advancedControls = payload
    } else {
      state.advancedControls = !state.advancedControls
    }
  },
}
