import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import GeoLocation from 'react-native-geolocation-service';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@/Theme';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {navigateAndSimpleReset} from '@/Navigators/Root';
import Markdown from '@/Components/Markdown';
import MenuButton from '@/Components/MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '@/Services';
import Accept from '@/Store/Legal/Accept';
import ActivityIndicator from '@/Components/ActivityIndicator';

const Stack = createStackNavigator();

const LegalContainer = ({route, navigation}) => {
  const {Colors, Fonts, Gutters, Layout} = useTheme();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [stay, setStay] = useState(route.params?.stay);

  const isPro = useSelector(state => state.walks.purchased);
  const accepted = useSelector(state => state.legal.accepted);
  const legal = useSelector(state => state.walks.legal);

  const [agreements, setAgreements] = useState({});

  useEffect(() => {
    if (legal?.data) {
      const _agreements = {};
      Object.keys(legal.data.agreements).forEach(key => {
        _agreements[key] = {
          accepted: accepted || agreements[key]?.accepted,
          label: legal.data.agreements[key],
        };
      });
      setAgreements(_agreements);
    }
  }, [legal]);

  useEffect(() => {
    console.log('LegalContainer.js: useEffect()');
    if (
      Object.keys(agreements).length &&
      Object.keys(agreements)
        .map(key => agreements[key])
        .every(el => el.accepted)
    ) {
      console.log('LegalContainer.js: useEffect() - all agreements accepted');
      if (!accepted) {
        console.log(
          'LegalContainer.js: useEffect() - dispatch(Accept.action(true))',
        );
        if (Platform.OS == 'android') {
          console.log(
            'LegalContainer.js: useEffect() - Platform.OS == android',
          );
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'The Walks App Location Permission',
              message:
                'In order for us to be able to geographically' +
                'assign your photo on the world map of The Walks,' +
                'we need your GPS coordinate.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
        } else {
          console.log(
            'LegalContainer.js: useEffect() - Platform.OS != android',
          );
          GeoLocation.requestAuthorization('whenInUse');
        }
        console.log(
          'LegalContainer.js: useEffect() - dispatch(Accept.action(true))',
        );
        dispatch(Accept.action(true));
      }
      if (!stay && accepted) {
        console.log('LegalContainer.js: useEffect() - accepted');
        if (!isPro) {
          console.log('LegalContainer.js: useEffect() - !isPro');
          navigateAndSimpleReset(t('activation'));
        } else {
          console.log('LegalContainer.js: useEffect() - isPro');
          navigateAndSimpleReset('Main');
        }
      }
    } else if (
      !Object.keys(agreements)
        .map(key => agreements[key])
        .every(el => el.accepted)
    ) {
      console.log(
        'LegalContainer.js: useEffect() - !Object.keys(agreements).map(key => agreements[key]).every(el => el.accepted)',
      );
      accepted && navigation.reset({index: 0, routes: [{name: 'legal'}]});
      dispatch(Accept.action(false));
    }
  }, [accepted, agreements]);

  const agree = useCallback(
    agreement => {
      setStay(false);
      const _agreements = {
        ...agreements,
      };
      _agreements[agreement].accepted = !_agreements[agreement].accepted;
      setAgreements(_agreements);
    },
    [agreements],
  );

  if (!legal?.data) {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <ScrollView
      accessible={true}
      accessibilityLabel="Agree to terms of use"
      style={[Gutters.smallPadding, Layout.fill]}>
      <View style={{height: 50}} />
      <Markdown markdown={legal ? legal.content : ''} />
      <View style={[Gutters.regularPadding]}>
        {Object.keys(agreements).map(key => (
          <TouchableOpacity
            key={`legal_${key}`}
            onPress={() => agree(key)}
            style={[Layout.row, Gutters.smallBMargin, Gutters.smallVPadding]}>
            <View
              style={[
                {
                  ...Fonts.iconRegular,
                  borderColor: agreements[key].accepted
                    ? Colors.primary
                    : Colors.legal,
                  borderWidth: 1,
                  marginRight: 10,
                },
              ]}>
              {agreements[key].accepted ? (
                <Icon
                  name="checkmark-outline"
                  size={Fonts.iconRegular.width * 0.8}
                  style={{
                    lineHeight: Fonts.iconRegular.height,
                    paddingLeft: 1,
                  }}
                />
              ) : null}
            </View>
            <Text style={[Fonts.textRegular, Layout.fill]}>
              {agreements[key].label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const LegalStack = ({route, navigation}) => {
  const {Colors, Fonts} = useTheme();
  const accepted = useSelector(state => {
    return state.legal.accepted;
  });
  const Button = MenuButton({navigation});
  const headerRight = () => {
    if (!accepted) {
      return null;
    }
    return <Button />;
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Legal"
        component={LegalContainer}
        initialParams={route.params}
        options={{
          title: null,
          headerRight,
          headerTransparent: true,
          headerMode: 'float',
        }}
      />
    </Stack.Navigator>
  );
};

export default LegalStack;
