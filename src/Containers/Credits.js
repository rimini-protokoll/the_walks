import React, {useEffect, useState, useCallback} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useSelector } from 'react-redux'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import { createStackNavigator } from '@react-navigation/stack'
import Markdown from '@/Components/Markdown'
import Icon from 'react-native-vector-icons/Ionicons'
import api, { handleError } from '@/Services'
import MenuButton from '@/Components/MenuButton'
import ActivityIndicator from '@/Components/ActivityIndicator'


const Stack = createStackNavigator()

const CreditsContainer = ({navigation}) => {
  const { Colors, Fonts, Gutters, Layout } = useTheme()
  const { t } = useTranslation()

  const selectedLanguage = useSelector(state => state.language.selectedLanguage)

  const body = useSelector(state => state.walks.credits)

  return (
    <ScrollView style={[Gutters.smallPadding]}>
      <View style={{height: 50}}/>
      <Text
        style={[
        Gutters.smallBMargin,
        Fonts.titleLarge,
        Fonts.textCenter
        ]}>
        {t('credits')}
      </Text>
      <Markdown markdown={body}/>
      <View style={{height: 50}}/>
    </ScrollView>
  )
}

const CreditsStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const accepted = useSelector(state => {
    return state.legal.accepted
  })
  const headerRight = MenuButton({navigation})
  return (
    <Stack.Navigator headerMode="float">
      <Stack.Screen
        name='Credits'
        component={CreditsContainer}
        options={{
          headerTitle: null,
          headerRight,
          headerTransparent: true
        }}
        />
    </Stack.Navigator>
  )
}

export default CreditsStack
