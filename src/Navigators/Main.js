import React from 'react'
import { Platform, Text, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { MenuContainer } from '@/Containers'
import { IndexWalkContainer } from '@/Containers'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigate } from './Root'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
	const { Fonts, Colors } = useTheme()
  const walks = useSelector(state => {
    //console.log('Navigator Main.js', Platform.OS, state)
  })
  const dispatch = useDispatch()
  
  const headerRight = () => {
    return (
      <Pressable onPress={ chooseLanguage }>
        <Icon name="language-outline" style={{ paddingRight:10 }} size={35} color={Colors.text} />
      </Pressable>
    )
  }
  const chooseLanguage = () => {
    console.log('chooseLanguage')
    navigate('Language')
  }
  return (
    <Stack.Navigator>
      <Stack.Screen 
      	name='The Walks' 
      	component={ MenuContainer } 
      	options={{
      		headerTitle : () => <Text style={Fonts.textRegular}>The Walks</Text>,
      		headerRight
        }}/>
      <Stack.Screen
      	name='Vor dem Theater'
      	component={ IndexWalkContainer }
      />
    </Stack.Navigator>
  )
}

export default MainNavigator

