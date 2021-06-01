import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('player/onLoad'),
  reducers(state, { payload }) {
  	console.log('action', payload)
  	state.currentTime = payload.currentTime
  	state.duration = payload.duration
  },
}
