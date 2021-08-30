import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('walks/completeWalk'),
  reducers(state, { payload }) {
    console.log('completed', payload)
    state.completed = [...state.completed, payload]
  },
}
