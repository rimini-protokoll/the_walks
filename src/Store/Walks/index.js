import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchWalks from './FetchWalks'
import ChangeWalk from './ChangeWalk'
import PurchaseWalks from './PurchaseWalks'
import DownloadWalk from './DownloadWalk'

const sliceInitialState = {
  selectedWalk: null,
  localWalks: {},
  fetchWalks: {
    walks: []
  },
}

export default buildSlice(
  'walks',
  [FetchWalks, ChangeWalk, PurchaseWalks, DownloadWalk],
  sliceInitialState,
).reducer
