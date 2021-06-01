import { createAction } from '@reduxjs/toolkit'

export default {
	initialState: {},
	action: createAction('walks/userPrompt'),
	reducers(state, { payload }) {
		if (!payload && state.userPrompt) {
			const walkIndex = state.fetchWalks.walks
				.map(walk => walk.id)
				.indexOf(state.activeWalk)
			state.fetchWalks.walks[walkIndex].userPrompt[state.userPrompt.index] = {
				...state.userPrompt,
				completed: true,
			}
		}
		state.userPrompt = payload
	},
}