import React, { useState } from 'react'
import { Platform, View, Text, StyleSheet, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import {
  MenuContainer,
  IndexWalkContainer,
  IndexUserPromptContainer,
  IndexMapContainer,
} from '@/Containers'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigate } from './Root'
import RNPickerSelect from 'react-native-picker-select'
import { useTranslation } from 'react-i18next'
import MenuButton from '@/Components/MenuButton'

const Stack = createStackNavigator()

const MapPicker = ({ navigation, walk }) => {
  const { t } = useTranslation()
  const { Fonts } = useTheme()
  const [selection, setSelection] = useState(walk)
  const completed = useSelector(state => state.walks.completed)
  const completedWalks = useSelector(state => {
    return state.walks.fetchWalks.walks.filter(
      _walk => completed?.indexOf(_walk.data.id) >= 0,
    )
  })

  if (!walk) {
    return <View />
  }
  return (
    <RNPickerSelect
      onValueChange={value => {
        if (Platform.OS === 'ios') {
          setSelection(value)
          return
        }
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Main',
              state: {
                routes: [
                  { name: 'The Walks' },
                  { name: walk.data.id, params: { walk } },
                  { name: `${value.data.id}-Pictures`, params: { walk: value } },
                ],
              },
            },
          ],
        })
      }}
      onClose={() => {
        if (Platform.OS === 'ios') {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Main',
                state: {
                  routes: [
                    { name: 'The Walks' },
                    { name: walk.data.id, params: { walk } },
                    { name: `${selection.data.id}-Pictures`, params: { walk: selection } },
                  ],
                },
              },
            ],
          })
        }
      }}
      style={pickerSelectStyles}
      placeholder={{ label: `- ${t('walk.pictures')} -`, value: null }}
      items={completedWalks.map(_walk => ({
        ..._walk,
        label: _walk.data.shortTitle,
        value: _walk,
      }))}
    >
      <Text
        numberOfLines={1}
        style={[Fonts.hyperlink, Fonts.titleRegular, Fonts.textCenter]}
      >
        {walk.data.shortTitle}
      </Text>
    </RNPickerSelect>
  )
}

// @refresh reset
const WalksNavigator = ({ navigation }) => {
  const { Fonts, Colors, NavigationTheme, Gutters } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const headerRight = MenuButton({ navigation })
  const headerRightTransparent = MenuButton({ navigation, transparent: true })
  const headerBackImage = () => (
    <Image
      style={[
        { margin: 20, marginLeft: 15, backgroundColor: 'transparent' },
        Fonts.iconRegular,
      ]}
      source={require('@/Assets/Icons/Back.png')}
    />
  )

  const walk = useSelector(state => {
    if (state.walks.selectedWalk) {
      return state.walks.fetchWalks.walks.filter(
        _walk => _walk.data.id == state.walks.selectedWalk,
      )[0]?.data
    }
  })

  const walks = useSelector(state => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(walk => walk.data.listed)
    } else {
      return []
    }
  })

  return (
    <Stack.Navigator headerMode="float">
      {walks ? (
        <Stack.Screen
          name="The Walks"
          component={MenuContainer}
          options={{
            headerTitle: () => null,
            headerRight,
            headerTransparent: true,
          }}
        />
      ) : null}
      {walks.map((walk, index) => (
        <Stack.Screen
          key={walk.data.id}
          name={walk.data.id}
          component={IndexWalkContainer}
          options={{
            headerBackImage,
            headerBackTitleVisible: false,
            headerTitle: null,
            headerRight,
            headerTransparent: true,
          }}
        />
      ))}
      {walks.map((walk, index) => (
        <Stack.Screen
          key={`${walk.data.id}-Pictures`}
          name={`${walk.data.id}-Pictures`}
          component={IndexMapContainer}
          initialParams={{ walk }}
          options={{
            headerBackImage,
            headerBackTitleVisible: false,
            headerTitle: () => <MapPicker navigation={navigation} walk={walk} />,
            headerTransparent: false,
            headerRight: headerRightTransparent,
          }}
        />
      ))}
      <Stack.Screen
        name={t('walk.action')}
        component={IndexUserPromptContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default WalksNavigator

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})
