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
import MenuButton from '@/Components/MenuButton'
import Icon from 'react-native-vector-icons/Ionicons'
import api, { handleError } from '@/Services'
import ActivityIndicator from '@/Components/ActivityIndicator'

const Stack = createStackNavigator()

const ImprintContainer = ({navigation}) => {
  const { Colors, Fonts, Gutters, Layout } = useTheme()
  const { t } = useTranslation()

  const imprint = useSelector(state => state.walks.imprint)
  const legal = useSelector(state => state.walks.legal)

  return (
    <ScrollView style={Gutters.smallPadding}>
      <View style={{height: 50}}/>
      <Markdown markdown={imprint.content}/>
      <TouchableOpacity
        style={{flex: 1, paddingVertical: 50}}
        onPress={() => navigation.navigate('legal', {stay: true})}
      >
        <Text style={[Fonts.labelSmall, Fonts.textCenter, Fonts.hyperlink]}>{t('legal')}</Text>
      </TouchableOpacity>
      <Markdown markdown={legal ? legal.content : ''}/>
    </ScrollView>
  )
}

const ImprintStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const accepted = useSelector(state => {
    return state.legal.accepted
  })
  const headerRight = MenuButton({navigation})
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Imprint'
        component={ImprintContainer}
        options={{
          headerTitle: null,
          headerRight,
          headerTransparent: true
        }}
        />
    </Stack.Navigator>
  )
}

export default ImprintStack
