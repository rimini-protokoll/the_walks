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

const IndexWalkContainer = ({ navigation }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const activeWalkId = useSelector(state => state.walks.activeWalk)
  const walk = useSelector(state => {
    let _walk = state.walks.fetchWalks.walks.filter(
      walk => walk.id == state.walks.selectedWalk,
    )[0]

    return _walk
  })

  useEffect(() => {
    if (!walk) {
      dispatch(ChangeWalk.action(activeWalkId))
    }
  }, [walk])

  const startWalk = () => {
    dispatch(StartWalk.action(walk.id))
    dispatch(
      ChangePlayer.action({
        paused: true,
        title: walk.title,
      }),
    )
  }

  const unsubscribeWalk = navigation.addListener('beforeRemove', event => {
    dispatch(ChangeWalk.action(null))
  })

  console.log(walk)
  
  if (!walk) {
    return null
  }

  return (
    <ScrollView
      contentContainerStyle={[Layout.colCenter, { alignContent: 'flex-start' }]}
    >
      <View style={{ width: '100%' }}>
        <FitImage
          originalWidth={100}
          originalHeight={100}
          source={{ uri: walk.iconUri }}
        />
      </View>
      <View style={(Layout.fill, Gutters.smallHPadding)}>
        <Text style={[Fonts.textRegular, Gutters.smallVPadding]}>
          {walk.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Button
            onPress={startWalk}
            title={t('walk.start')}
            color={Colors.primary}
          />
          <View style={{ width: 30 }}></View>
          <Icon name="cloud-download" size={40} color={Colors.text} />
        </View>
      </View>
      <View style={Layout.fill}>
        <Button
          onPress={() => navigation.navigate('Pictures')}
          title={t('walk.pictures')}
          color={Colors.primary}
        />
      </View>
    </ScrollView>
  )
}

export default IndexWalkContainer