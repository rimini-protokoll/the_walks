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
  TouchableOpacity,
  PermissionsAndroid
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


const IndexUserPromptContainer = ({ navigation }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

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
  }
  const resumeWalk = async () => {
    await TrackPlayer.setVolume(0)
    await TrackPlayer.setRepeatMode(RepeatMode.Off)
    await TrackPlayer.skipToNext()
    dispatch(ChangePlayer.action({ position: userPrompt.triggerTime }))
  }
  const continueWalk = useCallback(() => {
    resumeWalk().then(() => {
      dispatch(UserPrompt.action(false))
      dispatch(ChangeWalk.action(walk.data.id))
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Main',
            state: {
              routes: [
                { name: 'The Walks' },
                { name: walk.data.title, params: { walk } }
              ]
            }
          }
        ]
      })
    })
  }, [walk])

  const map = () => {
    dispatch(UserPrompt.action(false))
    TrackPlayer.setRepeatMode(RepeatMode.Off)
    if (userPrompt.index == walk.data.userPrompt.length - 1) {
      dispatch(StartWalk.action(false))
    }

    dispatch(ChangeWalk.action(walk.data.id))      
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          state: {
            routes: [
              { name: 'The Walks' },
              { name: walk.data.title, params: { walk } },
              { name: 'Pictures', params: { walk } }
            ]
          }
        }
      ]
    })
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
          style={[Fonts.textRegular, Gutters.smallVPadding, Fonts.textCenter]}
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
              style={Common.button.outline}
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
