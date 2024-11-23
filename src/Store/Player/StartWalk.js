import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('player/startWalk'),
  reducers(state, { payload }) {
    if (typeof payload !== 'undefined') {
      state.activeWalk = payload
    }
  },
}
