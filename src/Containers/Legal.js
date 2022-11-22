import React, { useEffect, useState, useCallback } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native'
import GeoLocation from 'react-native-geolocation-service'
import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import { createStackNavigator } from '@react-navigation/stack'
import Markdown from '@/Components/Markdown'
import MenuButton from '@/Components/MenuButton'
import Icon from 'react-native-vector-icons/Ionicons'
import api from '@/Services'
import Accept from '@/Store/Legal/Accept'

const Stack = createStackNavigator()

const LegalContainer = ({ route, navigation }) => {
  const { Colors, Fonts, Gutters, Layout } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [stay, setStay] = useState(route.params?.stay)

  const walksPurchased = useSelector(state => state.walks.purchased)
  const accepted = useSelector(state => state.legal.accepted)
  const legal = useSelector(state => state.walks.legal)

  const [agreements, setAgreements] = useState({})

  useEffect(() => {
    if (legal?.data) {
      const _agreements = {}
      Object.keys(legal.data.agreements).forEach(key => {
        _agreements[key] = {
          accepted: accepted || agreements[key]?.accepted,
          label: legal.data.agreements[key],
        }
      })
      setAgreements(_agreements)
    }
  }, [legal])

  useEffect(() => {
    if (
      Object.keys(agreements).length &&
      Object.keys(agreements)
        .map(key => agreements[key])
        .every(el => el.accepted)
    ) {
      if (!accepted) {
        if (Platform.OS == 'android') {
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
          )
        } else {
          GeoLocation.requestAuthorization('whenInUse')
        }
        dispatch(Accept.action(true))
      }
      !stay && !walksPurchased && navigation.navigate(t('activation'))
      !stay && walksPurchased && accepted && navigation.navigate('Main')
    } else if (
      !Object.keys(agreements)
        .map(key => agreements[key])
        .every(el => el.accepted)
    ) {
      accepted && navigation.reset({ index: 0, routes: [{ name: 'legal' }] })
      dispatch(Accept.action(false))
    }
  }, [accepted, agreements])

  const agree = useCallback(
    agreement => {
      setStay(false)
      const _agreements = {
        ...agreements,
      }
      _agreements[agreement].accepted = !_agreements[agreement].accepted
      setAgreements(_agreements)
    },
    [agreements],
  )

  if (!legal?.data) {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    )
  }
  return (
    <ScrollView style={[Gutters.smallPadding, Layout.fill]}>
      <View style={{ height: 50 }} />
      <Markdown markdown={legal ? legal.content : ''} />
      <View style={[Gutters.regularPadding]}>
        {Object.keys(agreements).map(key => (
          <TouchableOpacity
            key={`legal_${key}`}
            onPress={() => agree(key)}
            style={[Layout.row, Gutters.smallBMargin]}
          >
            <View
              style={[
                Gutters.smallTMargin,
                {
                  ...Fonts.iconSmall,
                  borderColor: agreements[key].accepted
                    ? Colors.primary
                    : Colors.legal,
                  borderWidth: 1,
                  marginRight: 10,
                },
              ]}
            >
              {agreements[key].accepted ? (
                <Icon
                  name="checkmark-outline"
                  size={Fonts.iconSmall.width * 0.8}
                  style={{
                    lineHeight: Fonts.iconSmall.height,
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
  )
}

const LegalStack = ({ route, navigation }) => {
  const { Colors, Fonts } = useTheme()
  const accepted = useSelector(state => {
    return state.legal.accepted
  })
  const Button = MenuButton({ navigation })
  const headerRight = () => {
    if (!accepted) {
      return null
    }
    return <Button />
  }
  return (
    <Stack.Navigator headerMode="float">
      <Stack.Screen
        name="Legal"
        component={LegalContainer}
        initialParams={route.params}
        options={{
          headerTitle: null,
          headerRight,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default LegalStack
