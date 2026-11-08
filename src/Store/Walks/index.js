import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import DeviceInfo from 'react-native-device-info'
import FetchWalks from './FetchWalks'
import ChangeWalk from './ChangeWalk'
import PurchaseWalks from './PurchaseWalks'
import DownloadWalk from './DownloadWalk'
import CompleteWalk from './CompleteWalk'
import ToggleAdvancedControls from './ToggleAdvancedControls'

const isPro = [
  'de.rimini-protokoll.thewalkspro',
  'com.thewalkspro',
].includes(DeviceInfo.getBundleId())

const sliceInitialState = {
  selectedWalk: null,
  localWalks: {},
  completed: [],
  purchased: isPro,
  advancedControls: false,
  fetchWalks: {
    walks: [],
  },
}

export default buildSlice(
  'walks',
  [FetchWalks, ChangeWalk, PurchaseWalks, DownloadWalk, CompleteWalk, ToggleAdvancedControls],
  sliceInitialState,
).reducer
