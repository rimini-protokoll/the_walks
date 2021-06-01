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
import { navigateAndSimpleReset } from '@/Navigators/Root'
import ChangeLanguage from '@/Store/Language/ChangeLanguage'
import StartWalk from '@/Store/Walks/StartWalk'

const TileLanguage = ({ navigation, title, language, languageCode }) => {
  const { Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const chooseLanguage = (l) => {
    dispatch(ChangeLanguage.action(l))
    dispatch(StartWalk.action(false))
    navigateAndSimpleReset('The Walks')
  }
  return (
    <TouchableOpacity
      onPress={() => chooseLanguage(languageCode) }
      style={[ Gutters.mediumVPadding, { 
        width: '100%',
        alignItems: 'center',
      }]}>
      <IconLanguage
        name={ language }
        height="50" 
        width="50"
      />
      <Text style= { Fonts.textRegular }>{ title }</Text>
    </TouchableOpacity>
  )
}

export default TileLanguage
