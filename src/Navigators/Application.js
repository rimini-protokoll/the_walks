import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import LanguagesContainer  from '@/Containers/Language'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  Text,
  Platform 
} from 'react-native'
import { useTheme } from '@/Theme'
import VideoControls from '@/Components/VideoControls'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const { Fonts, Layout, darkMode, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(state => state.startup.loading)
  const dispatch = useDispatch()
  const SafeViewAndroid = { 
    //paddingBottom: Platform.OS === "android" ? 30 : 0
  }

  dispatch(ChangeTheme.action({ theme:"default", darkMode: false }))

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      MainNavigator = null
    },
    [],
  )

  return (
    <SafeAreaView style={[Layout.fill, SafeViewAndroid, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          screenOptions= {({ route, navigation }) => {
            if(route.name == 'Startup'){
              return { headerShown: false }
            }else if(route.name == 'The Walks'){
              return { headerShown: false }
            }else if( route.name == 'Language'){
              return { headerShown: true }
            }
          }}>
          <Stack.Screen name="Startup" component={IndexStartupContainer} />
          {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name="The Walks"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          )}
          {isApplicationLoaded && (
            <Stack.Screen
              name='Language'
              component={ LanguagesContainer }
              options={{
                headerTitle : () => <Icon name="language-outline" style={{ paddingRight:10 }} size={35} color={Colors.text} />,
            }}/>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <View style={{ height: 40 }}>
        <VideoControls />
      </View>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
