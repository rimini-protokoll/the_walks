import React from 'react'
import { 
  Platform, 
  View,
  Text,
  Pressable,
  LinearGradient } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { 
  MenuContainer,
  IndexWalkContainer,
  IndexUserPromptContainer,
  IndexMapContainer } from '@/Containers'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigate } from './Root'
import { useTranslation } from 'react-i18next'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = ({ navigation }) => {
	const { Fonts, Colors, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const { t } = useTranslation()
  
  const headerRight = () => {
    return (
      <Pressable onPress={ navigation.openDrawer }>
        <Icon name="menu-outline" style={{ paddingRight:10 }} size={35} color={Colors.text} />
      </Pressable>
    )
  }
  
  const walks = useSelector((state) => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(walk => walk.listed)
    } else {
      return []
    } 
  })

  return (
    <Stack.Navigator>
      { walks ?
        <Stack.Screen 
        	name='The Walks' 
        	component={ MenuContainer } 
        	options={{
        		headerTitle : () => <Text style={Fonts.textRegular}>The Walks</Text>,
        		headerRight
          }}
        /> : null
      }
      { walks.map((walk, index) => (
        <Stack.Screen
          key={index}
          name={walk.title}
          component={ IndexWalkContainer }
          options={{
            headerRight
          }}
        />
        )
      )}
      <Stack.Screen
        name='Pictures'
        component={ IndexMapContainer }
        options={{
          headerBackground: () => (
            <View
              style={{ flex: 1, backgroundColor: colors.card, opacity: .7 }}
            />
            ),
          headerTitle: false,
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={t('walk.action')}
        component={ IndexUserPromptContainer }
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator

