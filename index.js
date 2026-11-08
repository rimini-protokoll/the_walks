/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import App from './src/App'
import { name as appName } from './app.json'

LogBox.ignoreAllLogs()

AppRegistry.registerComponent(appName, () => App)
TrackPlayer.registerPlaybackService(() => require('./service'))
