import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchWalks from './FetchWalks'
import ChangeWalk from './ChangeWalk'
import StartWalk from './StartWalk'
import PurchaseWalks from './PurchaseWalks'
import UserPrompt from './UserPrompt'

const sliceInitialState = {
	selectedWalk: null,
	userPrompt: false,
}

export default buildSlice(
	'walks',
	[FetchWalks, ChangeWalk, StartWalk, PurchaseWalks, UserPrompt],
	sliceInitialState,
).reducer