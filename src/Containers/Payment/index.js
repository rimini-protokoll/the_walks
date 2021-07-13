import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
} from 'react-native'
import { WebView } from 'react-native-webview'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'

const Payment = ({ navigation }) => {
  const { Gutters } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const language = useSelector(state => state.language.selectedLanguage)
  const onPaymentComplete = async (voucherCode) => {
    if (voucherCode == 'undefined') {
      navigation.navigate(t('activation'))
      return
    }
    const voucherCollection = firestore().collection('vouchers')
    const voucher = (await voucherCollection.doc(voucherCode).get()).data()
    if (voucher && !voucher.used) {
      await voucherCollection.doc(voucherCode).update({used: true})
      dispatch(PurchaseWalks.action(voucherCode))
      navigation.navigate('The Walks')
    } else {
      alert(`There has been an error. Your voucher code is ${voucherCode}`)
    }
  }

  return (
    <WebView
      source={{ uri: `https://the-walks-payment.netlify.app/?lng=${language}` }}
      onMessage={event => onPaymentComplete(event.nativeEvent.data)}
    />
  )
}

export default Payment
