import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ScrollView,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import Video from 'react-native-video';


const IndexWalkContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const audioRef = useRef()

  const fetch = id => {
    setUserId(id)
    dispatch(FetchOne.action(id))
  }

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  audioRef.paused = false

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <Text style={Fonts.textRegular}>Eh</Text>
      <Video
        ref={audioRef}
        source={{uri: "https://angry-fermi-c85f46.netlify.app/medias/de01.mp3"}}   // Can be a URL or a local file.
       />
    </View>
  )
}

export default IndexWalkContainer
