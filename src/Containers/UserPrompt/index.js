import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ScrollView,
  View,
  Image,
  ActivityIndicator,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import { launchCamera } from 'react-native-image-picker'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Player/StartWalk'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import UserPrompt from '@/Store/Player/UserPrompt'
import { navigateAndReset, navigate } from '@/Navigators/Root'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'
import { uploadPicture } from './util'
import BackgroundService from 'react-native-background-actions'
import {useNetInfo} from "@react-native-community/netinfo";


const IndexUserPromptContainer = ({ navigation }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const netinfo = useNetInfo()

  const walk = useSelector(state => {
    if (state.player.activeWalk) {
      return state.walks.fetchWalks.walks.filter(
        walk => walk.data.id == state.player.activeWalk,
      )[0]
    }
  })
  const userPrompt = useSelector(state => state.player.userPrompt)
  const picture = action => {
    const postAction = actions[action.postAction] || actions['continue']
    launchCamera({
      mediaType: 'photo',
      maxWidth: 2560,
      maxHeight: 2560,
      quality: .7
    }, response => uploadPicture({response, postAction, walk}))
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({description: ' '}).catch(() => {})
    }
  }
  const resumeWalk = async () => {
    await TrackPlayer.setVolume(0)
    await TrackPlayer.setRepeatMode(RepeatMode.Off)
    await TrackPlayer.pause()
    await TrackPlayer.skipToNext()
    await TrackPlayer.play()
    await TrackPlayer.seekTo(0)
    dispatch(ChangePlayer.action({ position: userPrompt.triggerTime }))
  }
  const continueWalk = useCallback(() => {
    resumeWalk().then(() => {
      dispatch(UserPrompt.action(false))
      if (userPrompt.isLast) {
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
                { name: walk.data.id, params: { walk } }
              ]
            }
          }
        ]
      })
      if (BackgroundService.isRunning()) {
        BackgroundService.updateNotification({description: ' '})
      }
    })
  }, [walk])

  const map = () => {
    dispatch(UserPrompt.action(false))
    TrackPlayer.setRepeatMode(RepeatMode.Off)
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
              { name: 'Pictures', params: { walk } }
            ]
          }
        }
      ]
    })
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({taskDesc: ' '})
    }
  }
  const actions = {
    continue: continueWalk,
    picture,
    map,
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
          {userPrompt.actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => actions[action.action](action)}
              style={[Common.button.outline, {opacity: !netinfo.isConnected && action.action == 'map' ? .5 : 1 }]}
              disabled={!netinfo.isConnected && action.action == 'map'}
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
