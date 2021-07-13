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
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import PartnersList from '@/Components/PartnersList'
import Markdown from '@/Components/Markdown'
import { useTranslation } from 'react-i18next'

const Stack = createStackNavigator()

const About = ({ navigation }) => {
  const { t } = useTranslation()
  const { Gutters, Fonts } = useTheme()
  const languages = useSelector(state => {
    const languages = state.language.fetchLanguages.languages
    if (languages) {
      return languages.languages
    } else {
      return []
    } 
  })
  const aboutText = useSelector(state => state.walks.about)

  return (
    <ScrollView contentContainerStyle={{ flexGrow:1 }} style={ Gutters.smallHPadding }>
      <View style={{height: 50}}/>
      <Text
        style={[
        Gutters.smallBMargin,
        Fonts.titleLarge,
        Fonts.textCenter
        ]}>
      {t('about')}
      </Text>
      <Markdown markdown={aboutText}/>
      <PartnersList/>
    </ScrollView>
  )
}



const AboutStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const headerTitle = () => {
    <></>
    //<Icon name='information-outline' size={35} color={Colors.text}/>
  }
  const headerRight = () => {
    return (
      <TouchableOpacity onPress={ navigation.openDrawer }>
        <Icon name="menu-outline" style={{ paddingRight:10 }} size={35} color={Colors.text} />
      </TouchableOpacity>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='About'
        component={About}
        options={{
          headerTitle,
          headerRight,
          headerTransparent: true
        }}
        />
    </Stack.Navigator>
  )
}

export default AboutStack
