import React, {useEffect, useState} from 'react'
import {
  Platform,
  View,
  Text,
  Pressable,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigate } from './Root'
import WalksNavigator from '@/Navigators/Walks'
import LanguagesContainer from '@/Containers/Language'
import AboutContainer from '@/Containers/About'
import NewsContainer from '@/Containers/News'
import ActivationContainer from '@/Containers/Activation'
import PaymentContainer  from '@/Containers/Payment'
import { useTranslation } from 'react-i18next'
import { navigateAndReset, navigateAndSimpleReset } from '@/Navigators/Root'
import ChangeWalk from '@/Store/Walks/ChangeWalk'


const Drawer = createDrawerNavigator()
const labelStyle = {
  fontFamily: 'Bambino-Regular',
  fontWeight: 'normal',
  fontSize: 20,
  color: 'black'
}

const CustomDrawerContent = (props) => {
  const {
    navigation,
    t,
    walksPurchased,
    galleryIsShown,
    setGalleryIsShown,
    walks,
    showGallery,
    state,
    dispatch,
    Colors,
    ...rest
  } = props
  let routes = [
    'The Walks', t('language'), t('about'), t('news')
  ]
  if (!walksPurchased) {
    routes.push(t('activation'))
  }
  routes = routes.map((name, i) => {
    let onPress = () => navigation.navigate(name);
    if (name == 'The Walks') {
      onPress = () => navigation.reset({index: 0, routes: [{name: 'Main', state: {routes: [{name: 'The Walks'}]}}]})
    }
    return {
      label: name,
      focused: state.index == i,
      onPress,
      key: i,
      labelStyle
    }
  })
  if(!galleryIsShown) {
    return (
      <DrawerContentScrollView {...state} contentContainerStyle={{
        justifyItems: 'center'
      }}>
        {routes.map(route => <DrawerItem {...route}/>)}
        {walksPurchased ? (
          <DrawerItem
            label={t('walk.pictures')}
            onPress={() => setGalleryIsShown(true)}
            labelStyle={labelStyle}
          />) : null}
      </DrawerContentScrollView>
    )
  } else {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label={t('back')}
          icon={() => <Icon name='close' color={Colors.text} size={20} style={{marginTop: 7}}/>}
          onPress={() => setGalleryIsShown(false)}
          labelStyle={{...labelStyle, marginLeft: -25}}
        />
        {walks.map((walk, i) => (
          <DrawerItem
            label={walk.data.title}
            key={i}
            onPress={() => {
              navigation.reset({index: 0, routes: [{
                name: 'Main',
                state: {
                  routes: [
                    {name: 'The Walks'},
                    {name: 'Pictures', params: {walk: walk}}
                  ]
                }
              }]})
            }}
            labelStyle={labelStyle}
          />
        ))}
      </DrawerContentScrollView>
    )
  }
}

// @refresh reset
const MainNavigator = () => {
  const { Fonts, Colors } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const selectedLanguage = useSelector(state => state.language.selectedLanguage)
  const walksPurchased = useSelector(state => state.walks.purchased)
  const [galleryIsShown, setGalleryIsShown] = useState(false)
  const walks = useSelector(state => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(
        ({data}) => data.listed && (!data.paid || state.walks.purchased),
      )
    } else {
      return []
    }
  })
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      drawerStyle={{width: 265, paddingTop: 50}}
      drawerContentOptions={{
        t,
        walksPurchased,
        galleryIsShown,
        setGalleryIsShown,
        walks,
        dispatch,
        Colors
      }}
      drawerPosition="right">
      {selectedLanguage ? <Drawer.Screen name='Main' component={WalksNavigator} /> : null}
      <Drawer.Screen name={t('language')} component={LanguagesContainer} />
      <Drawer.Screen name={t('about')} component={AboutContainer} />
      <Drawer.Screen name={t('news')} component={NewsContainer} />
      <Drawer.Screen name={t('activation')} component={ActivationContainer} />
      <Drawer.Screen
        name={t('payment')}
        component={ PaymentContainer }
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
