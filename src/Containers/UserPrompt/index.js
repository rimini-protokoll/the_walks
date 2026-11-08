import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native'
import { useTheme } from '@/Theme'
import { launchCamera } from 'react-native-image-picker'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Player/StartWalk'
import UserPrompt from '@/Store/Player/UserPrompt'
import {
  uploadPicture,
  permissionsGeoLocation,
  permissionsCamera,
} from './util'
import { useNetInfo } from '@react-native-community/netinfo'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'
import ActivityIndicator from '@/Components/ActivityIndicator'
import CompleteWalk from '@/Store/Walks/CompleteWalk'

const IndexUserPromptContainer = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const netinfo = useNetInfo()
  const isDownloading = useSelector(state => state.walks.downloadWalk.loading)
  const [isLoading, setIsLoading] = useState(false)

  const walk = useSelector(state => {
    if (state.player.activeWalk) {
      return state.walks.fetchWalks.walks.filter(
        _walk => _walk.data.id === state.player.activeWalk,
      )[0]
    }
  })
  const userPrompt = useSelector(state => state.player.userPrompt)
  const prologues = useSelector(state => state.player.prologues || [])

  useEffect(() => {
    const onBackPress = () => {
      if (userPrompt?.isPrologue) {
        TrackPlayer.reset()
        dispatch(UserPrompt.action(false))
        dispatch(StartWalk.action(false))
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Main',
              state: {
                routes: [
                  { name: 'The Walks' },
                  { name: walk?.data?.id, params: { walk } },
                ],
              },
            },
          ],
        })
        return true
      }
      return false
    }
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    )
    return () => subscription.remove()
  }, [userPrompt, walk, dispatch, navigation])

  useEffect(() => {
    if (userPrompt?.isLast) {
      dispatch(CompleteWalk.action(userPrompt.parentId || userPrompt.activeWalk))
    }
  }, [userPrompt?.isLast, userPrompt?.parentId, userPrompt?.activeWalk, dispatch])

  const picture = action => {
    const postAction = actions[action.postAction] || actions.continue
    setIsLoading(true)
    // Stop the looping prompt audio and release repeat before opening the camera. On
    // iOS the camera claims the audio session, and leaving track-player looping under
    // RepeatMode.Track while it does so can hang the app. resumeWalk() restarts audio
    // once the user continues.
    TrackPlayer.setRepeatMode(RepeatMode.Off)
    TrackPlayer.pause()
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 2560,
        maxHeight: 2560,
        quality: 0.7,
      },
      ({ didCancel, errorCode, errorMessage, assets }) => {
        if (didCancel) {
          setIsLoading(false)
        } else if (errorCode || !assets) {
          setIsLoading(false)
          postAction()
        } else {
          uploadPicture({
            assets,
            postAction: () => {setIsLoading(false); postAction()},
            onError: () => {setIsLoading(false); postAction()},
            walk,
          })
        }
      },
    )
  }

  const resumeWalk = useCallback(async () => {
    try {
      await TrackPlayer.setRepeatMode(RepeatMode.Off)
      await TrackPlayer.skipToNext()
      if (!userPrompt.isLast && typeof userPrompt.triggerTime === 'number') {
        await TrackPlayer.seekTo(userPrompt.triggerTime)
      }
      await TrackPlayer.setVolume(1)
      await TrackPlayer.play()
    } catch (err) {
      console.warn('Error in resumeWalk:', err)
      try {
        await TrackPlayer.setVolume(1)
        await TrackPlayer.play()
      } catch (_) {}
    }
  }, [userPrompt])

  const advancePrologueOrResume = useCallback(async () => {
    if (userPrompt?.isPrologue && !userPrompt.isLastPrologue) {
      // Step sequentially to the next prologue setup prompt without playing audio
      const nextIndex =
        (typeof userPrompt.prologueIndex === 'number'
          ? userPrompt.prologueIndex
          : userPrompt.index) + 1
      const nextPrompt = prologues[nextIndex]
      if (nextPrompt) {
        dispatch(UserPrompt.action(nextPrompt))
        return
      }
    }

    setIsLoading(true)
    if (userPrompt?.isPrologue) {
      // Last prologue prompt ("Start" button).
      // Dismiss the prompt screen and immediately play the pre-buffered walk audio!
      dispatch(UserPrompt.action(false))
      dispatch(ChangePlayer.action({ paused: false, position: null }))
      try {
        await TrackPlayer.setVolume(1)
        await TrackPlayer.play()
      } catch (err) {
        console.warn('Error starting playback after prologue:', err)
      }
      setIsLoading(false)
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Main',
            state: {
              routes: [
                { name: 'The Walks' },
                { name: walk.data.id, params: { walk } },
              ],
            },
          },
        ],
      })
      return
    }

    // Normal mid-walk prompt
    await resumeWalk()
    dispatch(UserPrompt.action(false))
    dispatch(ChangePlayer.action({ paused: false, position: null }))
    setIsLoading(false)
    if (userPrompt?.isLast) {
      console.log('userPrompt.isLast')
      dispatch(StartWalk.action(false))
    }
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          state: {
            routes: [
              { name: 'The Walks' },
              { name: walk.data.id, params: { walk } },
            ],
          },
        },
      ],
    })
  }, [userPrompt, prologues, dispatch, navigation, resumeWalk, walk])

  const map = () => {
    dispatch(UserPrompt.action(false))
    if (userPrompt?.isLast) {
      dispatch(StartWalk.action(false))
    }

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          state: {
            routes: [
              { name: 'The Walks' },
              { name: walk.data.id, params: { walk } },
              { name: `${walk.data.id}-Pictures`, params: { walk } },
            ],
          },
        },
      ],
    })
  }
  const actions = {
    continue: advancePrologueOrResume,
    picture,
    map,
    async geoLocation() {
      setIsLoading(true)
      await permissionsGeoLocation()
      setIsLoading(false)
      advancePrologueOrResume()
    },
    async camera() {
      setIsLoading(true)
      await permissionsCamera()
      setIsLoading(false)
      advancePrologueOrResume()
    },
  }

  if (!walk || !userPrompt) {
    return null
  }
  return (
    <ScrollView contentContainerStyle={[Layout.fill, Layout.rowCenter]}>
      <View style={[Layout.fill, Gutters.smallHPadding]}>
        <Text
          style={[Fonts.textRegular, Gutters.largeVPadding, Fonts.textCenter]}
        >
          {userPrompt.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          {isDownloading ? (
            <ActivityIndicator
              size="large"
              color={Colors.primary}
              style={[Gutters.largePadding]}
            />
          ) : userPrompt.actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => actions[action.action](action)}
              style={[Common.button.outline, { opacity: isLoading || (!netinfo.isConnected && action.action == 'map') ? 0.5 : 1 }]}
              disabled={isLoading || (!netinfo.isConnected && action.action == 'map')}
            >
              <Text style={[Fonts.textButton, Fonts.textCenter]}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default IndexUserPromptContainer
