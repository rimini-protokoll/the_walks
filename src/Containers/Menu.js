import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import FetchWalks from '@/Store/Walks/FetchWalks'
import WalksList from '@/Components/WalksList'

const Menu = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const language = useSelector(state => state.language.selectedLanguage)
  useEffect(() => {
    console.log('useEffect language', language)
    dispatch(FetchWalks.action({language}))
  }, [language])

  const walks = useSelector(state => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(
        ({data}) => data.listed,
      )
    } else {
      return []
    }
  })

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    // setTimeout(() => setRefreshing(false), 3000)
    dispatch(FetchWalks.action({language}))
    setRefreshing(false)
  })

  return (
    <ScrollView
      style={[Gutters.smallHPadding, Gutters.smallVPadding]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={{height: 50}}/>
      <Text
        style={[
        Gutters.smallBMargin,
        Fonts.titleLarge,
        Fonts.textCenter
        ]}>
      The Walks
      </Text>
      {!refreshing ? (
        <WalksList navigation={navigation} walks={walks} />) :
          null
      }
    </ScrollView>
  )
}

export default Menu
