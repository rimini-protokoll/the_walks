import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {
    paused: true,
    title: 0,
    position: null,
    prompts: [],
    prologues: [],
    midWalkPrompts: [],
    setup: false,
  },
  action: createAction('player/changePlayer'),
  reducers(state, { payload }) {
    if (typeof payload.paused !== 'undefined') {
      state.paused = payload.paused
    }

    if (typeof payload.title !== 'undefined') {
      state.title = payload.title
    }

    if (typeof payload.position !== 'undefined') {
      state.position = payload.position
    }

    // Prompt metadata for the active walk, stored so the playback service can read it
    // when firing prompts from native progress events (see service.js).
    if (typeof payload.prompts !== 'undefined') {
      state.prompts = payload.prompts
    }

    if (typeof payload.prologues !== 'undefined') {
      state.prologues = payload.prologues
    }

    if (typeof payload.midWalkPrompts !== 'undefined') {
      state.midWalkPrompts = payload.midWalkPrompts
    }

    // True while a walk's queue is being built; guards the service PlaybackQueueEnded
    // handler against the transient that can fire during setup.
    if (typeof payload.setup !== 'undefined') {
      state.setup = payload.setup
    }
  },
}
