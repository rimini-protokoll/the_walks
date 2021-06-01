import React, { useState, useEffect } from 'react'
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
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import StartWalk from '@/Store/Walks/StartWalk'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import UserPrompt from '@/Store/Walks/UserPrompt'
import { navigateAndReset } from '@/Navigators/Root'

const IndexUserPromptContainer = ({ navigation }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const walk = useSelector(state => {
    return state.walks.fetchWalks.walks.filter(
      walk => walk.id == state.walks.activeWalk,
    )[0]
  })
  const userPrompt = useSelector(state => state.walks.userPrompt)
  if (!userPrompt) {
    return null
  }
  const resumeWalk = () => {
    dispatch(ChangePlayer.action({ paused: false }))
  }

  const actions = {
    continue: () => {
      resumeWalk()
      dispatch(UserPrompt.action(false))
      navigation.navigate(walk.title)
    },
    picture: () => {},
    map: () => {
      dispatch(ChangeWalk.action(walk.id))      
      dispatch(UserPrompt.action(false))
      navigateAndReset(
        [{ name: 'The Walks' }, { name: walk.title }, { name: 'Pictures' }],
        2,
      )
    },
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
              onPress={actions[action.action]}
              style={Common.button.outline}
            >
              <Text>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default IndexUserPromptContainer
