import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('player/onProgress'),
  reducers(state, { payload }) {
  	// console.log('progress', payload)
  	state.currentTime = payload.currentTime
  	state.progress = payload.currentTime / state.duration * 100
  },
}
