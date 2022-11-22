import React from 'react'
import { 
  Platform, 
  View,
  Text,
  Pressable,
  Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { 
  MenuContainer,
  IndexWalkContainer,
  IndexUserPromptContainer,
  IndexMapContainer
} from '@/Containers'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigate } from './Root'
import { useTranslation } from 'react-i18next'
import MenuButton from '@/Components/MenuButton'

const Stack = createStackNavigator()

// @refresh reset
const WalksNavigator = ({ navigation }) => {
  const { Fonts, Colors, NavigationTheme, Gutters } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const { t } = useTranslation()
  
  const headerRight = MenuButton({navigation})
  const headerBackImage = () => (
    <Image
      style={[{marginTop: 5, marginHorizontal: 10, backgroundColor: Colors.background}, Fonts.iconRegular]}
      source={require('@/Assets/Icons/Back.png')}/>
  )

  const walk = useSelector(state => {
    if (state.walks.selectedWalk) {
      return state.walks.fetchWalks.walks.filter(
        _walk => _walk.data.id == state.walks.selectedWalk,
      )[0]?.data
    }
  })
  
  const walks = useSelector((state) => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(walk => walk.data.listed)
    } else {
      return []
    } 
  })

  return (
    <Stack.Navigator headerMode="float">
      { walks ?
        <Stack.Screen 
          name='The Walks' 
          component={ MenuContainer } 
          options={{
            headerTitle: () => null,
            headerRight,
            headerTransparent: true,
          }}
        /> : null
      }
      { walks.map((walk, index) => (
        <Stack.Screen
          key={walk.data.id}
          name={walk.data.id}
          component={ IndexWalkContainer }
          options={{
            headerBackImage,
            headerBackTitleVisible: false,
            headerTitle: () => null,
            headerRight,
            headerTransparent: true
          }}
        />
        )
      )}
      <Stack.Screen
        name='Pictures'
        component={ IndexMapContainer }
        options={{
          headerBackImage,
          headerBackTitleVisible: false,
          headerTitle: null,
          headerTransparent: true,
          headerRight
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

export default WalksNavigator

