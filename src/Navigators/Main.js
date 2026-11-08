import React, { useMemo, useEffect, useState, useRef } from 'react'
import { Platform, View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import DeviceInfo from 'react-native-device-info'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import FetchWalks from '@/Store/Walks/FetchWalks'
import WalksNavigator from '@/Navigators/Walks'
import ImprintContainer from '@/Containers/Imprint'
import LegalContainer from '@/Containers/Legal'
import LanguagesContainer from '@/Containers/Language'
import AboutContainer from '@/Containers/About'
import CreditsContainer from '@/Containers/Credits'
import NewsContainer from '@/Containers/News'
import ActivationContainer from '@/Containers/Activation'
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
  textDecorationColor: 'black',
}

const CustomDrawerContent = props => {
  const {
    navigation,
    t,
    walksPurchased,
    galleryIsShown,
    setGalleryIsShown,
    walks,
    allWalks,
    showGallery,
    state,
    dispatch,
    Colors,
    Fonts,
    Gutters,
    ...rest
  } = props
  let routes = ['The Walks', 'about', 'news', 'language', 'credits']
  if (!walksPurchased) {
    routes.push(t('activation'))
  }
  routes = routes.map((name, i) => {
    let onPress = () => navigation.navigate(t(name))
    if (name === 'The Walks') {
      onPress = () =>
        navigation.reset({
          index: 0,
          routes: [
            { name: 'Main', state: { routes: [{ name: 'The Walks' }] } },
          ],
        })
    }
    return {
      label: t(name),
      focused: state.index == i,
      onPress,
      key: i,
      labelStyle,
    }
  })
  if (!galleryIsShown) {
    return (
      <DrawerContentScrollView
        {...state}
        contentContainerStyle={[
          {
            justifyItems: 'center',
            flex: 1,
          },
          Gutters.largeLPadding,
          Gutters.regularRPadding,
          Gutters.largeTPadding,
        ]}
      >
        {routes.map((route, i) => (
          <DrawerItem
            {...route}
            style={i == 0 ? { marginBottom: '10%', marginTop: '5%' } : ''}
            labelStyle={i == 0 ? walkLabelStyle : labelStyle}
          />
        ))}
        {walksPurchased && false ? (
          <DrawerItem
            label={t('walk.pictures')}
            onPress={() => setGalleryIsShown(true)}
            labelStyle={labelStyle}
          />
        ) : null}
        <TouchableOpacity
          style={[
            Gutters.regularLPadding,
            Gutters.regularVPadding,
            { width: 210, marginTop: '15%' },
          ]}
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
          icon={() => (
            <Icon
              name="close"
              color={Colors.text}
              size={20}
              style={{ marginTop: 7 }}
            />
          )}
          onPress={() => setGalleryIsShown(false)}
          labelStyle={{ ...labelStyle, marginLeft: -25 }}
        />
        {(allWalks || walks).map((walk, i) => (
          <DrawerItem
            label={walk.data.title}
            key={i}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Main',
                    state: {
                      routes: [
                        { name: 'The Walks' },
                        { name: `${walk.data.id}-Pictures`, params: { walk: walk } },
                      ],
                    },
                  },
                ],
              })
            }}
            labelStyle={labelStyle}
          />
        ))}
      </DrawerContentScrollView>
    )
  }
}

// @refresh reset
const MainNavigator = ({ navigation }) => {
  const bundleIdentifier = useRef(DeviceInfo.getBundleId()).current
  const { Fonts, Colors, Gutters } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const language = useSelector(state => state.language.selectedLanguage)
  const walksPurchased = useSelector(state => state.walks.purchased)
  const legalAccepted = useSelector(state => state.legal.accepted)
  const [galleryIsShown, setGalleryIsShown] = useState(false)
  const showActivationScreen = useMemo(() => {
    console.log(bundleIdentifier)
    if (
      ['de.rimini-protokoll.thewalks', 'com.thewalks'].includes(
        bundleIdentifier,
      )
    ) {
      return !walksPurchased
    } else {
      return false
    }
  }, [bundleIdentifier, walksPurchased])

  useEffect(() => {
    if (!language) {
      navigation.reset({ index: 0, routes: [{ name: t('language') }] })
      return
    }
    if (!legalAccepted) {
      navigation.reset({ index: 0, routes: [{ name: 'legal' }] })
      return
    }
    if (!walksPurchased) {
      if (showActivationScreen) {
        navigation.reset({ index: 0, routes: [{ name: t('activation') }] })
      }
      return
    }
  }, [])

  useEffect(() => {
    if (language) {
      dispatch(FetchWalks.action({ language }))
    } else {
      navigation.reset({ index: 0, routes: [{ name: t('language') }] })
    }
  }, [language])
  const walks = useSelector(state => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(
        ({ data }) => data.listed && (!data.paid || state.walks.purchased),
      )
    } else {
      return []
    }
  })
  const allWalks = useSelector(state => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(({ data }) => data.listed)
    } else {
      return []
    }
  })
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent
          {...props}
          t={t}
          walksPurchased={walksPurchased}
          galleryIsShown={galleryIsShown}
          setGalleryIsShown={setGalleryIsShown}
          walks={walks}
          allWalks={allWalks}
          dispatch={dispatch}
          Colors={Colors}
          Fonts={Fonts}
          Gutters={Gutters}
        />
      )}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: { width: 265, paddingTop: 50 },
        swipeEnabled: true,
        swipeEdgeWidth: Platform.select({ ios: 60, android: 50 }),
        gestureHandlerProps: {
          activeOffsetX: [-20, 0],
          failOffsetY: [-15, 15],
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={WalksNavigator}
        options={({ route }) => {
          const focusedRoute =
            getFocusedRouteNameFromRoute(route) ?? 'The Walks'
          const disableSwipe =
            focusedRoute.endsWith('-Pictures') ||
            focusedRoute === t('walk.action')
          return {
            swipeEnabled: !disableSwipe,
          }
        }}
      />
      <Drawer.Screen name={t('about')} component={AboutContainer} />
      <Drawer.Screen name={t('news')} component={NewsContainer} />
      <Drawer.Screen
        name={t('language')}
        component={LanguagesContainer}
        options={{ swipeEnabled: !!language }}
      />
      <Drawer.Screen name={t('credits')} component={CreditsContainer} />
      {showActivationScreen ? (
        <Drawer.Screen name={t('activation')} component={ActivationContainer} />
      ) : null}
      <Drawer.Screen
        name="legal"
        options={{ swipeEnabled: legalAccepted }}
        component={LegalContainer}
      />
      <Drawer.Screen name="imprint" component={ImprintContainer} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
