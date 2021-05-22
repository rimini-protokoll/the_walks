import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import LanguagesList from '@/Components/LanguagesList'

const LanguagesContainer = ({ navigation }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const languages = [
    {
      title: 'German',
      languageCode: 'de',
      language: 'germany',
    },
    {
      title: 'English',
      languageCode: 'en',
      language: 'united-kingdom'
    },
    {
      title: 'Spanish',
      languageCode: 'es',
      language: 'spain'
    },
  ]
  return (
    <ScrollView contentContainerStyle={{ flexGrow:1 }} style={ Gutters.smallHPadding }>
      <LanguagesList navigation={navigation} languages={languages}/>
    </ScrollView>
  )
}

export default LanguagesContainer
