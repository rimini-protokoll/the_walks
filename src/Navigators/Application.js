import React, { useEffect, useState, useRef } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import LanguagesContainer from '@/Containers/Language'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar, View, Text, Linking } from 'react-native'
import { useTheme } from '@/Theme'
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player'
import VideoControls from '@/Components/VideoControls'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import StartWalk from '@/Store/Player/StartWalk'
import UserPrompt from '@/Store/Player/UserPrompt'
import CompleteWalk from '@/Store/Walks/CompleteWalk'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'
import ToggleAdvancedControls from '@/Store/Walks/ToggleAdvancedControls'
import { navigateAndSimpleReset } from '@/Navigators/Root'
import '@/Translations'
import i18n from 'i18next'

const ALL_WALK_IDS = [
  'uma9ooK4', // Supermarkt
  'bee5Zah7', // Aufbruch
  'ahvo7Cee', // Park
  'Udie9hoh', // Steff
  'siQu3iex', // Verkehrsinsel
  'ChaiJ0yo', // Friedhof
  'Eer0quuj', // Theater
  'ohPeu2zi', // Wasser
  'Apheek3e', // Straße
  'Tr57Hul3', // Spielplatz
]

const Stack = createStackNavigator()

let MainNavigator

const setupPlayer = async () => {
  try {
    // Throws if the player has not been set up yet — that's the signal to set it up.
    await TrackPlayer.getActiveTrackIndex()
    await TrackPlayer.removeUpcomingTracks()
  } catch {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 50000,
    })
    await TrackPlayer.updateOptions({
      progressUpdateEventInterval: 1,
      forwardJumpInterval: 0,
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
    })
  }
}

// @refresh reset
const ApplicationNavigator = ({ store }) => {
  const { Fonts, Layout, darkMode, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const [isTrackPlayerSetup, setIsTrackPlayerSetup] = useState(false)
  const applicationIsLoading = useSelector(state => state.startup.loading)
  const dispatch = useDispatch()
  const selectedLanguage = useSelector(state => state.language.selectedLanguage)

  useEffect(() => {
    dispatch(ChangeTheme.action({ theme: 'default', darkMode: false }))
    if (MainNavigator == null && !applicationIsLoading) {
      i18n.changeLanguage(selectedLanguage)
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [dispatch, selectedLanguage, applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      MainNavigator = null
      TrackPlayer.reset()

      dispatch(UserPrompt.action(false))
      dispatch(StartWalk.action(false))
      console.log('destroy')
    },
    [dispatch],
  )

  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      if (url && url.startsWith('thewalks://unlock-maps')) {
        dispatch(PurchaseWalks.action())
        const currentCompleted = store.getState().walks.completed || []
        const fetchedIds = (store.getState().walks.fetchWalks?.walks || [])
          .map(w => w.data?.id)
          .filter(Boolean)
        const allIds = Array.from(new Set([...ALL_WALK_IDS, ...fetchedIds]))
        allIds.forEach(id => {
          if (!currentCompleted.includes(id)) {
            dispatch(CompleteWalk.action(id))
          }
        })
      } else if (
        url &&
        (url.startsWith('thewalks://toggle-controls') ||
          url.startsWith('thewalks://advanced-controls') ||
          url.startsWith('thewalks://debug-controls'))
      ) {
        if (url.includes('enable=true') || url.includes('mode=on') || url.endsWith('/on')) {
          dispatch(ToggleAdvancedControls.action(true))
        } else if (url.includes('enable=false') || url.includes('mode=off') || url.endsWith('/off')) {
          dispatch(ToggleAdvancedControls.action(false))
        } else {
          dispatch(ToggleAdvancedControls.action())
        }
      }
    }
    Linking.getInitialURL().then(url => {
      if (url) handleDeepLink({ url })
    })
    const sub = Linking.addEventListener('url', handleDeepLink)
    return () => sub.remove()
  }, [dispatch, store])

  useEffect(() => {
    if (isApplicationLoaded && MainNavigator != null) {
      setupPlayer().then(() => {
        setIsTrackPlayerSetup(true)
        navigateAndSimpleReset('Main')
      })
    }
  }, [isApplicationLoaded])

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={IndexStartupContainer} />
          {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {isTrackPlayerSetup ? <VideoControls /> : null}
    </SafeAreaView>
  )
}

export default ApplicationNavigator
