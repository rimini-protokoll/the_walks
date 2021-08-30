import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Theme'
import IconLanguage from 'react-native-ico-flags'
import ChangeLanguage from '@/Store/Language/ChangeLanguage'
import StartWalk from '@/Store/Player/StartWalk'
import { navigateAndReset } from '@/Navigators/Root'

const TileLanguage = ({ navigation, legalAccepted, title, language, languageCode }) => {
  const { Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const chooseLanguage = (l) => {
    dispatch(ChangeLanguage.action(l))
    dispatch(StartWalk.action(false))
    if (legalAccepted) {
      navigation.reset({index: 0, routes: [{name: 'Main', state: {routes: ['The Walks']}}]})
    } else {
      navigation.reset({index: 0, routes: [{name: 'legal'}]})
    }
  }
  return (
    <TouchableOpacity
      onPress={() => chooseLanguage(languageCode) }
      style={[ Gutters.regularVPadding, { 
        width: '100%',
        alignItems: 'center'
      }]}>
      {/*
      <IconLanguage
        name={ language }
        height="50" 
        width="50"
      />
      */}
      <Text style= { Fonts.textLarge }>{ title }</Text>
    </TouchableOpacity>
  )
}

export default TileLanguage
