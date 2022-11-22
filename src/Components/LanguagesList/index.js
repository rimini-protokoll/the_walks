import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { useTheme } from '@/Theme'
import Tile from './TileLanguage'

const LanguagesList = ({ navigation, languages }) => {
  const { Layout, Fonts } = useTheme()
  const legalAccepted = useSelector(state => state.legal.accepted)
  return (
    <View
      style={[
        Layout.fullSize,
        Layout.center,
        {
          flex: 1,
        },
      ]}
    >
      {languages.map(({ title, language, languageCode }, i) => (
        <Tile
          key={i}
          title={title}
          language={language}
          languageCode={languageCode}
          legalAccepted={legalAccepted}
          navigation={navigation}
        />
      ))}
    </View>
  )
}
export default LanguagesList
