import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import Accept from './Accept'

const sliceInitialState = {
  accepted: false
}

export default buildSlice('legal', [Accept], sliceInitialState).reducer
