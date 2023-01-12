import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
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
import BackgroundService from 'react-native-background-actions'
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
  useEffect(() => {
    if (userPrompt.isLast) {
      dispatch(CompleteWalk.action(userPrompt.parentId || userPrompt.activeWalk))
    }
  }, [userPrompt.isLast, userPrompt.parentId, userPrompt.activeWalk, dispatch])
  const picture = action => {
    const postAction = actions[action.postAction] || actions.continue
    setIsLoading(true)
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
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({ description: ' ' }).catch(() => {})
    }
  }

  const resumeWalk = useCallback(() => {
    const cb = async () => {
      await TrackPlayer.setRepeatMode(RepeatMode.Off)
      await TrackPlayer.setVolume(0)
      await TrackPlayer.pause()
      if (userPrompt.isLastPrologue) {
        await TrackPlayer.setVolume(1)
      }
      await TrackPlayer.skipToNext()
      if (!userPrompt.isPrologue || userPrompt.isLastPrologue) {
        await TrackPlayer.play()
      }
      if (!userPrompt.isLast) {
        dispatch(ChangePlayer.action({ position: userPrompt.triggerTime }))
      }
    }
    cb()
  }, [dispatch, userPrompt])

  const continueWalk = useCallback(() => {
    TrackPlayer.setVolume(0)
    resumeWalk()
    dispatch(UserPrompt.action(false))
    setIsLoading(false)
    if (userPrompt.isLast) {
      console.log('userPrompt.isLast')
      dispatch(StartWalk.action(false))
    }
    // dispatch(ChangeWalk.action(walk.data.id))
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
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({ description: ' ' })
    }
  }, [walk, dispatch, navigation, resumeWalk, userPrompt.isLast])

  const map = () => {
    dispatch(UserPrompt.action(false))
    if (userPrompt.isLast) {
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
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({taskDesc: ' '})
    }
  }
  const actions = {
    continue: continueWalk,
    picture,
    map,
    async geoLocation() {
      setIsLoading(true)
      await permissionsGeoLocation()
      continueWalk()
    },
    async camera() {
      setIsLoading(true)
      await permissionsCamera()
      continueWalk()
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
              style={[Common.button.outline, {opacity: isLoading || (!netinfo.isConnected && action.action == 'map') ? .5 : 1 }]}
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
