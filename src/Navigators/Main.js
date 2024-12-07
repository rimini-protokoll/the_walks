import React, {useMemo, useEffect, useCallback, useState, useRef} from 'react';
import {Platform, View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@/Theme';
import FetchWalks from '@/Store/Walks/FetchWalks';
import WalksNavigator from '@/Navigators/Walks';
import ImprintContainer from '@/Containers/Imprint';
import LegalContainer from '@/Containers/Legal';
import LanguagesContainer from '@/Containers/Language';
import AboutContainer from '@/Containers/About';
import CreditsContainer from '@/Containers/Credits';
import NewsContainer from '@/Containers/News';
import ActivationContainer from '@/Containers/Activation';
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();
const labelStyle = {
  fontFamily: 'BambinoRegular',
  fontWeight: 'normal',
  fontSize: 18,
  color: 'black',
};
const walkLabelStyle = {
  ...labelStyle,
  fontSize: 22,
  textDecorationLine: 'underline',
  textDecorationColor: 'black',
};

const CustomDrawerContent = props => {
  const {t} = useTranslation();
  const {Fonts, Colors, Gutters} = useTheme();
  const {
    navigation,
    isPro,
    galleryIsShown,
    setGalleryIsShown,
    walks,
    showGallery,
    state,
    dispatch,
    ...rest
  } = props;
  let routes = ['The Walks', 'about', 'news', 'language', 'credits'];
  if (!isPro) {
    routes.push(t('activation'));
  }
  routes = routes.map((name, i) => {
    let onPress = () => navigation.navigate(t(name));
    if (name === 'The Walks') {
      onPress = () =>
        navigation.reset({
          index: 0,
          routes: [{name: 'Main', state: {routes: [{name: 'The Walks'}]}}],
        });
    }
    return {
      label: t(name),
      focused: state.index == i,
      onPress,
      key: i,
      labelStyle,
    };
  });
  if (!galleryIsShown) {
    return (
      <DrawerContentScrollView
        contentContainerStyle={[
          {
            justifyItems: 'center',
            flex: 1,
          },
          Gutters.largeLPadding,
          Gutters.regularRPadding,
          Gutters.largeTPadding,
        ]}>
        {routes.map((route, i) => {
          const {key, ...routeProps} = route;
          return (
            <DrawerItem
              key={key}
              {...routeProps}
              style={i == 0 ? {marginBottom: '10%', marginTop: '5%'} : ''}
              labelStyle={i == 0 ? walkLabelStyle : labelStyle}
            />
          );
        })}
        {isPro && false ? (
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
            {width: 210, marginTop: '15%'},
          ]}
          onPress={() => navigation.navigate('imprint')}>
          <Text style={Fonts.legalSmall}>{t('imprint')}</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  } else {
    return (
      <DrawerContentScrollView>
        <DrawerItem
          label={t('back')}
          icon={() => (
            <Icon
              name="close"
              color={Colors.text}
              size={20}
              style={{marginTop: 7}}
            />
          )}
          onPress={() => setGalleryIsShown(false)}
          labelStyle={{...labelStyle, marginLeft: -25}}
        />
        {walks.map((walk, i) => (
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
                        {name: 'The Walks'},
                        {name: 'Pictures', params: {walk: walk}},
                      ],
                    },
                  },
                ],
              });
            }}
            labelStyle={labelStyle}
          />
        ))}
      </DrawerContentScrollView>
    );
  }
};

// @refresh reset
const MainNavigator = ({navigation}) => {
  const bundleIdentifier = useRef(DeviceInfo.getBundleId()).current;
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const language = useSelector(state => state.language.selectedLanguage);
  const isPro = useSelector(state => state.walks.purchased);
  const legalAccepted = useSelector(state => state.legal.accepted);
  const [galleryIsShown, setGalleryIsShown] = useState(false);
  const showActivationScreen = useMemo(() => {
    if (
      ['de.rimini-protokoll.thewalks', 'com.thewalks'].includes(
        bundleIdentifier,
      )
    ) {
      return !isPro;
    } else {
      return false;
    }
  }, [bundleIdentifier, isPro]);
  useEffect(() => {
    if (!language) {
      navigation.reset({index: 0, routes: [{name: t('language')}]});
      return;
    }
    if (!legalAccepted) {
      navigation.reset({index: 0, routes: [{name: 'legal'}]});
      return;
    }
    if (!isPro) {
      if (showActivationScreen) {
        navigation.reset({index: 0, routes: [{name: t('activation')}]});
      }
      return;
    }
  }, []);

  useEffect(() => {
    if (language) {
      dispatch(FetchWalks.action({language}));
    } else {
      navigation.reset({index: 0, routes: [{name: t('language')}]});
    }
  }, [language]);
  const walks = useSelector(state => {
    const walks = state.walks.fetchWalks.walks;
    if (walks) {
      return walks.filter(
        ({data}) => data.listed && (!data.paid || state.walks.purchased),
      );
    } else {
      return [];
    }
  });
  const DrawerContent = useCallback(
    props => (
      <CustomDrawerContent
        {...props}
        isPro={isPro}
        galleryIsShown={galleryIsShown}
        setGalleryIsShown={setGalleryIsShown}
        walks={walks}
      />
    ),
    [isPro, galleryIsShown, walks],
  );
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      drawerStyle={{width: 265, paddingTop: 50}}
      options={{}}
      screenOptions={{headerShown: false, drawerPosition: 'right'}}
      edgeWidth={0}
      drawerPosition="left">
      <Drawer.Screen name="Walks" component={WalksNavigator} />
      <Drawer.Screen name={t('about')} component={AboutContainer} />
      <Drawer.Screen name={t('news')} component={NewsContainer} />
      <Drawer.Screen
        name={t('language')}
        component={LanguagesContainer}
        options={{gestureEnabled: !!language}}
      />
      <Drawer.Screen name={t('credits')} component={CreditsContainer} />
      {showActivationScreen ? (
        <Drawer.Screen name={t('activation')} component={ActivationContainer} />
      ) : null}
      <Drawer.Screen
        name="legal"
        options={{gestureEnabled: legalAccepted}}
        component={LegalContainer}
      />
      <Drawer.Screen name="imprint" component={ImprintContainer} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
