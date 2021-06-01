import React, {useEffect} from 'react'
import { Platform, View, Text, Pressable, LinearGradient } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigate } from './Root'
import WalksNavigator from '@/Navigators/Walks'
import LanguagesContainer from '@/Containers/Language'
import AboutContainer from '@/Containers/About'
import NewsContainer from '@/Containers/News'
import { useTranslation } from 'react-i18next'
import { navigateAndSimpleReset } from '@/Navigators/Root'


const Drawer = createDrawerNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Fonts, Colors } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const selectedLanguage = useSelector(state => state.language.selectedLanguage)

  return (
    <Drawer.Navigator drawerPosition="right">
      {selectedLanguage ? <Drawer.Screen name="The Walks" component={WalksNavigator} /> : null}
      <Drawer.Screen name={t('language')} component={LanguagesContainer} />
      <Drawer.Screen name={t('about')} component={AboutContainer} />
      <Drawer.Screen name={t('news')} component={NewsContainer} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
