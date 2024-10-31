import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import DeviceInfo from 'react-native-device-info'
import FetchWalks from './FetchWalks'
import ChangeWalk from './ChangeWalk'
import PurchaseWalks from './PurchaseWalks'
import DownloadWalk from './DownloadWalk'
import CompleteWalk from './CompleteWalk'

const isPro = DeviceInfo.getBundleId() === 'de.rimini-protokoll.thewalkspro'

const sliceInitialState = {
  selectedWalk: null,
  localWalks: {},
  completed: [],
  purchased: isPro,
  fetchWalks: {
    walks: [],
  },
}

export default buildSlice(
  'walks',
  [FetchWalks, ChangeWalk, PurchaseWalks, DownloadWalk, CompleteWalk],
  sliceInitialState,
).reducer
