import React, { useEffect, useState, useRef } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import LanguagesContainer  from '@/Containers/Language'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  Text,
  Platform 
} from 'react-native'
import { useTheme } from '@/Theme'
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player'
import VideoControls from '@/Components/VideoControls'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Player/StartWalk'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigateAndSimpleReset } from '@/Navigators/Root'
import '@/Translations'
import i18n from 'i18next'
import BackgroundService from 'react-native-background-actions'


const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = ({ store }) => {
  const { Fonts, Layout, darkMode, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(state => state.startup.loading)
  const dispatch = useDispatch()
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage)

  useEffect(() => {
    dispatch(ChangeTheme.action({ theme: 'default', darkMode: false }))
    if (MainNavigator == null && !applicationIsLoading) {
      i18n.changeLanguage(selectedLanguage)
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      MainNavigator = null
      TrackPlayer.reset()
      TrackPlayer.destroy()
      dispatch(StartWalk.action(false))
      BackgroundService.stop()
      console.log('destroy')
    },
    [],
  )

  useEffect(() => {
    if(isApplicationLoaded && MainNavigator != null) {
      TrackPlayer.removeUpcomingTracks()
      TrackPlayer.setupPlayer({
        maxCacheSize: 50000
      })
        .then(() => TrackPlayer.updateOptions({
          stopWithApp: true,
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.Stop
          ],
          notificationCapabilites: [
            Capability.Play,
            Capability.Pause,
            Capability.Stop
          ],
          compactCapabilites: [
            Capability.Play,
            Capability.Pause,
            Capability.Stop
          ],
          waitForBuffer: true
        }))
        .then(() => navigateAndSimpleReset('Main'))
    }
  }, [isApplicationLoaded])

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          screenOptions= {{ headerShown: false }}>
          <Stack.Screen name='Startup' component={IndexStartupContainer} />
          {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name='Main'
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      { isApplicationLoaded && MainNavigator != null ? (
        <VideoControls/>
      ) : null
      }
    </SafeAreaView>
  )
}

export default ApplicationNavigator
