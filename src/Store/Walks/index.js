import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchWalks from './FetchWalks'
import ChangeWalk from './ChangeWalk'
import PurchaseWalks from './PurchaseWalks'
import DownloadWalk from './DownloadWalk'
import CompleteWalk from './CompleteWalk'

const sliceInitialState = {
  selectedWalk: null,
  localWalks: {},
  completed: [],
  purchased: false,
  fetchWalks: {
    walks: []
  },
}

export default buildSlice(
  'walks',
  [FetchWalks, ChangeWalk, PurchaseWalks, DownloadWalk, CompleteWalk],
  sliceInitialState,
).reducer
