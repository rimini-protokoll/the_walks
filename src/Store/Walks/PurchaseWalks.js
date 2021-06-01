import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('walks/purchaseWalks'),
  reducers(state, { payload }) {
    state.purchased = true
  },
}
