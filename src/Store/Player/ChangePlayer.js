import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: { paused: true, title: 0, position: null },
  action: createAction('player/changePlayer'),
  reducers(state, { payload }) {
    if (typeof payload.paused !== 'undefined') {
      state.paused = payload.paused
    }

    if (typeof payload.title !== 'undefined') {
      state.title = payload.title
    }

    if (typeof payload.position !== 'undefined') {
      console.log('store/changePlayer', payload.position)
      state.position = payload.position
    }
  },
}
