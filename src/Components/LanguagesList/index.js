import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import Tile from './TileLanguage'

const LanguagesList = ({ navigation, languages }) => {
  const { Layout, Fonts } = useTheme()
  return (
    <View style={[ Layout.fullSize, {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }]}>
      { languages.map(({title, language}, i) => (<Tile key={i} title={title} language={language} navigation={navigation} />)) }
    </View>
  )
}
export default LanguagesList 
