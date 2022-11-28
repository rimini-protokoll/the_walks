import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Image, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'

const Payment = ({ navigation }) => {
  const { Fonts, Gutters } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const language = useSelector(state => state.language.selectedLanguage)
  const onPaymentComplete = async voucherCode => {
    console.log('voucherCode', voucherCode)
    if (voucherCode == 'undefined') {
      navigation.reset({ index: 0, routes: [{ name: t('activation') }] })
      return
    }
    const voucherCollection = firestore().collection('vouchers')
    const voucher = (await voucherCollection.doc(voucherCode).get()).data()
    if (voucher && !voucher.used) {
      await voucherCollection.doc(voucherCode).update({ used: true })
      dispatch(PurchaseWalks.action(voucherCode))
      navigation.reset({ index: 0, routes: [{ name: 'Main' }] })
    } else {
      alert(`There has been an error. Your voucher code is ${voucherCode}`)
    }
  }

  return (
    <>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{ backgroundColor: 'white' }}
      >
        <Image
          style={[
            { marginTop: 15, marginHorizontal: 15, marginBottom: 15 },
            Fonts.iconRegular,
          ]}
          source={require('@/Assets/Icons/Back.png')}
        />
      </TouchableOpacity>
      <WebView
        source={{
          uri: `http://the-walks-payment.netlify.app/?lng=${language}`,
        }}
        onMessage={event => onPaymentComplete(event.nativeEvent.data)}
      />
    </>
  )
}

export default Payment
