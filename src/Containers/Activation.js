import React, {useCallback} from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import firestore from '@react-native-firebase/firestore'
import { useTheme } from '@/Theme'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'
import MenuButton from '@/Components/MenuButton'

const Stack = createStackNavigator()

const Activation = ({navigation}) => {
  const { Common, Fonts, Colors, Layout, Gutters } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const purchase = useCallback(() => {
    navigation.navigate(t('payment'))
  })
  const navigateToWalks = useCallback(() => {
    navigation.reset({index: 0, routes: [{name: 'Main', state: {routes: ['The Walks']}}]})
  })
  const voucherCodeChange = useCallback(async ({nativeEvent}) => {
    const voucherCode = nativeEvent.text
    if (voucherCode.length == 4) {
      const voucherCollection = firestore().collection('vouchers')
      const voucher = (await voucherCollection.doc(voucherCode).get()).data()
      if (voucher && !voucher.used) {
        await voucherCollection.doc(voucherCode).update({used: true})
        dispatch(PurchaseWalks.action(voucherCode))
        navigateToWalks()
      }
    }
  })
  return (
    <View style={[Layout.fullSize, Layout.center, Gutters.regularHPadding]}>
      <View style={Layout.center}>
        <View style={{maxWidth: 300}}>
          <Text style={[Fonts.textLarge, Fonts.textCenter]}>{t('voucherA')}</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Text style={[Fonts.textLarge, Fonts.textCenter]}>{t('voucherB')}</Text>
            <TextInput
              onChange={voucherCodeChange}
              style={Common.textInput}
              placeholderTextColor={Colors.text}
              autoCapitalize="none"/>
          </View>
        </View>
        <View style={{height: 90}}/>
        <TouchableOpacity onPress={purchase}>
          <Text style={Fonts.textLarge}>{t('purchase')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToWalks} style={{marginTop: 100, ...Layout.row, ...Layout.center}}>
          <Text style={[Fonts.textSmall, {maxWidth: 150}]}>{t('preview')}</Text>
          <Icon name="chevron-forward-outline" style={{ paddingTop: 15 }} size={35} color={Colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const ActivationStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const { t } = useTranslation()
  const headerRight = MenuButton({navigation})
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('activation')}
        component={Activation}
        options={{
          headerTitle: null,
          headerRight
        }}
        />
    </Stack.Navigator>
  )
}

export default ActivationStack
