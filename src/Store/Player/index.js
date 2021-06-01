import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import ChangePlayer from './ChangePlayer'
import OnLoad from './OnLoad'
import OnProgress from './OnProgress'
import Seek from './Seek'

const sliceInitialState = {
  paused: true,
  duration: null,
  currentTime: 0,
  progress: 0,
  seek: null
}

export default buildSlice('player', [ChangePlayer, OnLoad, OnProgress, Seek], sliceInitialState).reducer