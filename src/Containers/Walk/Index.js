import React, { useState } from 'react'
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
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'


const IndexWalkContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const fetch = id => {
    setUserId(id)
    dispatch(FetchOne.action(id))
  }

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  return (
    <ScrollView contentContainerStyle={[ Layout.colCenter, { alignContent: 'flex-start' } ]}>
      <View style={{ width: "100%" }}>
        <FitImage
          originalWidth={100}
          originalHeight={100}
          source={{ uri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg' }} 
        />
      </View>
      <View style={ Layout.fill, Gutters.smallHPadding }>
        <Text style={[ Fonts.textRegular, Gutters.smallVPadding ]}>The stories and soundscapes of the walks are designed in a way that they can be experienced and performed in similar places around the globe. Thus “The Walks” connect people around the globe in a local experience through a basic human gesture: Walking. </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <Button title='Start this Walk' />
          <View style={{ width:30 }}></View>
          <Icon name='cloud-download' size={40} color={Colors.text} />
        </View>
      </View>
    </ScrollView>
  )
}

export default IndexWalkContainer