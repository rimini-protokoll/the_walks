import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import IconLanguage from 'react-native-ico-flags'
import { navigateAndSimpleReset } from '@/Navigators/Root'

const TileLanguage = ({ navigation, title, language }) => {
  const { Fonts, Gutters, Layout } = useTheme()
  const chooseLanguage = () => navigateAndSimpleReset('The Walks')
  return (
    <TouchableOpacity
      onPress={() => chooseLanguage() }
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
