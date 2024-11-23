import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('walks/changeWalk'),
  reducers(state, { payload }) {
    state.selectedWalk = payload
  },
}
