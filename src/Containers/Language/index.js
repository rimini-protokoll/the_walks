import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import LanguagesList from '@/Components/LanguagesList'
import MenuButton from '@/Components/MenuButton'

const Stack = createStackNavigator()

const Languages = ({ navigation }) => {
  const { Gutters } = useTheme()
  const languages = useSelector(state => {
    const languages = state.language.fetchLanguages.languages
    if (languages) {
      return languages.languages
    } else {
      return []
    }
  })

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={Gutters.smallHPadding}
    >
      <LanguagesList navigation={navigation} languages={languages} />
    </ScrollView>
  )
}

const LanguagesStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const language = useSelector(state => state.language.selectedLanguage)
  const Button = MenuButton({ navigation })
  const headerRight = () => {
    if (!language) {
      return null
    }
    return <Button />
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Language"
        component={Languages}
        options={{
          headerTitle: null,
          headerRight,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default LanguagesStack
