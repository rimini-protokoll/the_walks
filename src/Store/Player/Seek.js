import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('player/seek'),
  reducers(state, { payload }) {
  	console.log('action', payload)
  	state.seek = payload
  },
}
