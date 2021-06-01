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
import { useTranslation } from 'react-i18next'
import PartnersList from '@/Components/PartnersList'
import Markdown from '@/Components/Markdown'

const Stack = createStackNavigator()

const About = ({ navigation }) => {
  const { Gutters, Fonts } = useTheme()
  const languages = useSelector(state => {
    const languages = state.language.fetchLanguages.languages
    if (languages) {
      return languages.languages
    } else {
      return []
    } 
  })

  return (
    <ScrollView contentContainerStyle={{ flexGrow:1 }} style={ Gutters.smallHPadding }>
      <Markdown markdown={aboutText}/>
      <PartnersList/>
    </ScrollView>
  )
}



const AboutStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const headerTitle = () => <Icon name='information-outline' size={35} color={Colors.text}/>
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
          headerRight
        }}
        />
    </Stack.Navigator>
  )
}
const aboutText = `
# H1
## H2
### H3
1. one
2. two
3. three
- a
  - a.1
  - a.2
- b
- c

**The Walks** is a performance series _developed_ by Rimini Protokoll for specific kinds of places and bodies in motion. An app will function like a stage for the project.
`

export default AboutStack
