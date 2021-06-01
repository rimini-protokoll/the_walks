import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('walks/startWalk'),
  reducers(state, { payload }) {
    if (typeof payload !== 'undefined') {
      state.activeWalk = payload
    }
  },
}
