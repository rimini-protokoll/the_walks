import React, { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import firestore from '@react-native-firebase/firestore'
import { getAvailablePurchases, getPurchaseHistory } from 'react-native-iap'
import { useTheme } from '@/Theme'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'
import MenuButton from '@/Components/MenuButton'

const Stack = createStackNavigator()

const isPro = DeviceInfo.getBundleId() === 'de.rimini-protokoll.thewalkspro'

const useIsRestorable = () => {
  const [isRestorable, setIsRestorable] = useState(false)
  if (Platform.OS === 'ios') {
    return false
  }
  getPurchaseHistory().then(history => {
    setIsRestorable(!!history.length)
  })
  return isRestorable
}

const PurchaseOrRestore = ({ isRestorable, handleRestore, purchase }) => {
  const { Fonts, Gutters } = useTheme()
  const { t } = useTranslation()
  if (isRestorable) {
    return (
      <TouchableOpacity
        style={[Gutters.smallVPadding, { marginTop: 90 }]}
        onPress={handleRestore}
      >
        <Text style={Fonts.textLarge}>{t('restore')}</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={[Gutters.smallVPadding, { marginTop: 90 }]}
        onPress={purchase}
      >
        <Text style={Fonts.textLarge}>{t('purchase')}</Text>
      </TouchableOpacity>
    )
  }
}

const Activation = ({ navigation }) => {
  const { Common, Fonts, Colors, Layout, Gutters } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const codeRef = useRef()
  const isRestorable = useIsRestorable()

  const purchase = useCallback(() => {
    navigation.navigate(t('payment'))
  }, [navigation, t])

  const handleRestore = async () => {
    try {
      const purchases = await getAvailablePurchases()
      // console.log(purchases)
      if (purchases.length) {
        dispatch(PurchaseWalks.action('restored'))
      }
    } catch (error) {
      console.warn(error)
    }
  }

  const navigateToWalks = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main', state: { routes: ['The Walks'] } }],
    })
  }, [navigation])

  const voucherCodeChange = useCallback(
    async ({ nativeEvent }) => {
      const voucherCode = nativeEvent.text
      if (voucherCode.length === 4) {
        const voucherCollection = firestore().collection('vouchers')
        const voucher = (await voucherCollection.doc(voucherCode).get()).data()
        if (voucher && !voucher.used) {
          await voucherCollection.doc(voucherCode).update({ used: true })
          dispatch(PurchaseWalks.action(voucherCode))
          navigateToWalks()
        }
      }
    },
    [navigateToWalks, dispatch],
  )
  return (
    <View
      accessible={true}
      accessibilityLabel="Activate or preview The Walks"
      style={[Layout.fullSize, Layout.center, Gutters.regularHPadding]}
    >
      <View style={Layout.center}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Enter the four character activation code"
          onPress={() => codeRef.current.focus()}
          style={{ maxWidth: 300 }}
        >
          <Text style={[Fonts.textLarge, Fonts.textCenter]}>
            {t('voucherA')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Text style={[Fonts.textLarge, Fonts.textCenter]}>
              {t('voucherB')}
            </Text>
            <TextInput
              ref={codeRef}
              accessibilityLabel="Enter code"
              onChange={voucherCodeChange}
              style={Common.textInput}
              placeholderTextColor={Colors.text}
              autoCapitalize="none"
            />
          </View>
        </TouchableOpacity>
        {Platform.OS === 'android' ? (
          <PurchaseOrRestore
            isRestorable={isRestorable}
            handleRestore={handleRestore}
            purchase={purchase}
          />
        ) : null}
        {Platform.OS === 'ios' && !isPro ? (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://apps.apple.com/de/app/the-walks-pro/id6446093925',
              )
            }
            style={{ marginTop: 100, ...Layout.row, ...Layout.center }}
          >
            <Text style={[Fonts.textSmall, { maxWidth: 150 }]}>
              {t('purchase')}
            </Text>
            <Icon
              name="chevron-forward-outline"
              size={35}
              color={Colors.text}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={navigateToWalks}
          style={{ marginTop: 100, ...Layout.row, ...Layout.center }}
        >
          <Text style={[Fonts.textSmall, { maxWidth: 150 }]}>
            {t('preview')}
          </Text>
          <Icon
            name="chevron-forward-outline"
            style={{ paddingTop: 15 }}
            size={35}
            color={Colors.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ActivationStack = ({ navigation }) => {
  const { t } = useTranslation()
  const headerRight = MenuButton({ navigation })
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('activation')}
        component={Activation}
        options={{
          headerTitle: null,
          headerRight,
        }}
      />
    </Stack.Navigator>
  )
}

export default ActivationStack
