import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import Menu from './Menu'

export default buildSlice('menu', [Menu], {
  id: null,
  languages: null,
}).reducer
