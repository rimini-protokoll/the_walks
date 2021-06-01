import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('player/changePlayer'),
  reducers(state, { payload }) {
  	
  	if(typeof(payload.paused) !== 'undefined')
  		state.paused = payload.paused
    
    if(typeof(payload.title) !== 'undefined')
	    state.title = payload.title
  },
}
