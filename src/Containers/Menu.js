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
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import WalksList from '@/Components/WalksList'
import PartnersList from '@/Components/PartnersList'


const Menu = ({ navigation }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const fetch = id => {
    setUserId(id)
    dispatch(FetchOne.action(id))
  }

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  return (
    <ScrollView style={ Gutters.smallHPadding }>
      <Text style={[ Fonts.textRegular, Gutters.smallVPadding ]}>"The Walks" is a performance series developed by Rimini Protokoll for specific kinds of places and bodies in motion. An app will function like a stage for the project.</Text>
      <WalksList navigation={ navigation }/>
      <PartnersList/>
    </ScrollView>
  )
}

export default Menu
