import React, {useEffect, useState} from 'react'
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import FetchWalks from '@/Store/Walks/FetchWalks'
import { navigate } from './Root'
import WalksNavigator from '@/Navigators/Walks'
import ImprintContainer from '@/Containers/Imprint'
import LegalContainer from '@/Containers/Legal'
import LanguagesContainer from '@/Containers/Language'
import AboutContainer from '@/Containers/About'
import CreditsContainer from '@/Containers/Credits'
import NewsContainer from '@/Containers/News'
import ActivationContainer from '@/Containers/Activation'
import PaymentContainer  from '@/Containers/Payment'
import { useTranslation } from 'react-i18next'


const Drawer = createDrawerNavigator()
const labelStyle = {
  fontFamily: 'Bambino-Regular',
  fontWeight: 'normal',
  fontSize: 18,
  color: 'black',
}
const walkLabelStyle = {
  ...labelStyle,
  fontSize: 22,
  textDecorationLine: 'underline',
  textDecorationColor: 'black'
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
    Fonts,
    Gutters,
    ...rest
  } = props
  let routes = [
    'The Walks', 'about', 'news', 'language', 'credits'
  ]
  if (!walksPurchased) {
    routes.push(t('activation'))
  }
  routes = routes.map((name, i) => {
    let onPress = () => navigation.navigate(t(name));
    if (name == 'The Walks') {
      onPress = () => navigation.reset({index: 0, routes: [{name: 'Main', state: {routes: [{name: 'The Walks'}]}}]})
    }
    return {
      label: t(name),
      focused: state.index == i,
      onPress,
      key: i,
      labelStyle
    }
  })
  if(!galleryIsShown) {
    return (
      <DrawerContentScrollView {...state} contentContainerStyle={[{
        justifyItems: 'center',
        flex: 1,
      }, Gutters.largeLPadding, Gutters.regularRPadding, Gutters.largeTPadding]}>
        {routes.map((route, i) => (
          <DrawerItem 
            {...route} 
            style={ i==0 ? {marginBottom: '10%', marginTop: '5%'} : ''}
            labelStyle={i==0 ? walkLabelStyle : labelStyle}
          />
        ))}
        {walksPurchased && false ? (
          <DrawerItem
            label={t('walk.pictures')}
            onPress={() => setGalleryIsShown(true)}
            labelStyle={labelStyle}
          />) : null}
        <TouchableOpacity
          style={[Gutters.regularLPadding, {width: 210, marginTop: '15%'}]}
          onPress={() => navigation.navigate('imprint')}
        >
          <Text style={Fonts.legalSmall}>{t('imprint')}</Text>
        </TouchableOpacity>
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
const MainNavigator = ({navigation}) => {
  const { Fonts, Colors, Gutters } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const language = useSelector(state => state.language.selectedLanguage)
  const walksPurchased = useSelector(state => state.walks.purchased)
  const legalAccepted = useSelector(state => state.legal.accepted)
  const [galleryIsShown, setGalleryIsShown] = useState(false)
  useEffect(() => {
    if (!language) {
      navigation.reset({index: 0, routes: [{name: t('language')}]})
      return
    }
    if (!legalAccepted) {
      navigation.reset({index: 0, routes: [{name: 'legal'}]})
      return
    }
    if (!walksPurchased) {
      navigation.reset({index: 0, routes: [{name: t('activation')}]})
      return
    }
  }, [])
  useEffect(() => {
    if (language) {
      dispatch(FetchWalks.action({language}))
    } else {
      navigation.reset({index: 0, routes: [{name: t('language')}]})
    }
  }, [language])
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
        Colors,
        Fonts,
        Gutters
      }}
      edgeWidth={0}
      drawerPosition="right">
      <Drawer.Screen name='Main' component={WalksNavigator} />
      <Drawer.Screen name={t('about')} component={AboutContainer} />
      <Drawer.Screen name={t('news')} component={NewsContainer} />
      <Drawer.Screen name={t('language')} component={LanguagesContainer} options={{gestureEnabled: !!language}} />
      <Drawer.Screen name={t('credits')} component={CreditsContainer} />
      {!walksPurchased ? <Drawer.Screen name={t('activation')} component={ActivationContainer} /> : null}
      <Drawer.Screen
        name={t('payment')}
        component={ PaymentContainer }
      />
      <Drawer.Screen name='legal' options={{gestureEnabled: legalAccepted}} component={LegalContainer} />
      <Drawer.Screen name='imprint' component={ImprintContainer} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
