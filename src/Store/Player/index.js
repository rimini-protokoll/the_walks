import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import ChangePlayer from './ChangePlayer'
import UserPrompt from './UserPrompt'
import StartWalk from './StartWalk'

const sliceInitialState = {
  paused: true,
  duration: null,
  currentTime: 0,
  progress: 0,
  seek: null,
}

export default buildSlice(
  'player',
  [ChangePlayer, UserPrompt, StartWalk],
  sliceInitialState,
).reducer
