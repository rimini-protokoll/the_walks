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
import VideoControls from '@/Components/VideoControls'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import PlayerOnLoad from '@/Store/Player/OnLoad'
import PlayerOnProgress from '@/Store/Player/OnProgress'
import SeekPlayer from '@/Store/Player/Seek'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigateAndSimpleReset } from '@/Navigators/Root'
import Video from 'react-native-video'
import { useTranslation } from 'react-i18next'


const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = ({ store }) => {
  const { Fonts, Layout, darkMode, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(state => state.startup.loading)
  const dispatch = useDispatch()
  const audioRef = useRef()
  const { t } = useTranslation()

  const activeWalk = useSelector((state) => state.walks.activeWalk )

  const playerUri = useSelector(state => {
    if (activeWalk) {
      return state.walks.fetchWalks.walks.filter(walk => {
        return walk.id == activeWalk
      })[0].srcUri
    }
  })

  const playerSeek = useSelector((state) => state.player.seek )
  const playerPaused = useSelector(state => state.player.paused)

  useEffect(() => {
    //dispatch(ChangeTheme.action({ theme: 'default', darkMode: false }))
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      MainNavigator = null
    },
    [],
  )

  useEffect(() => {
    if(isApplicationLoaded && MainNavigator != null) {
      navigateAndSimpleReset('Main')
    }
  }, [isApplicationLoaded])

  useEffect(() => {
    if (playerSeek !== null) {
      audioRef.current.seek(playerSeek)
      dispatch(SeekPlayer.action(null))
    }
  }, [playerSeek])

  const playerOnLoad = payload => dispatch(PlayerOnLoad.action(payload))
  const playerOnProgress = payload => dispatch(PlayerOnProgress.action(payload))

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
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
      { activeWalk ? (
        <View>
          <VideoControls/>
          <Video
            ref={audioRef}
            paused={playerPaused}
            source={{uri: playerUri}}
            onLoad={playerOnLoad}
            onProgress={playerOnProgress}
            playInBackground={true}
            playWhenInactive={true}
            ignoreSilentSwitch="ignore"
            audioOnly={true}
          />
        </View>
        ) : null
      }
    </SafeAreaView>
  )
}

export default ApplicationNavigator
