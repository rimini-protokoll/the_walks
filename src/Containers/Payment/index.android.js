import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'
import ActivityIndicator from '@/Components/ActivityIndicator'

import RNIap, {
  Product,
  ProductPurchase,
  PurchaseError,
  acknowledgePurchaseAndroid,
  purchaseErrorListener,
  purchaseUpdatedListener,
} from 'react-native-iap'


const Payment = ({ navigation }) => {
  const { Colors, Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(async () => {
    const result = await RNIap.initConnection()
    console.log('connection is => ', result)
    await RNIap.flushFailedPurchasesCachedAsPendingAndroid()
    const products = await RNIap.getProducts(['the_walks'])
    setProducts(products)
    setLoading(false)
    const purchaseUpdatedSubscription = purchaseUpdatedListener(async purchase => {
      console.log('purchaseUpdatedListener', purchase)
      try {
        const purchaseState = purchase.purchaseStateAndroid
        if (purchaseState == 1) {
          setLoading(true)
          const docRef = await firestore().collection('vouchers').add({
            guest_venue: 'androidIAP',
            ...purchase,
            used: true
          })
          dispatch(PurchaseWalks.action(docRef.id))
          navigation.reset({index: 0, routes: [{name: 'Main'}]})
          await RNIap.finishTransaction(purchase, true)
        } else {
          throw {code: 'E_PURCHASE_STATE', message: JSON.stringify(purchase)}
        } 
      } catch (err) {
        console.warn(err.code, err.message)
        setLoading(false)
      }
    })

    const purchaseErrorSubscription = purchaseErrorListener(async error => console.warn(error.code, error.message))

    return () => {
      purchaseUpdatedSubscription.remove()
      purchaseErrorSubscription.remove()
      RNIap.endConnection()
    }
  }, [])

  const requestPurchase = useCallback(async () => {
    try {
      const result = await RNIap.requestPurchase('the_walks')
      console.log('PURCHASED', result) 
    } catch (err) {
      console.warn(err.code, err.message)
    }
  }, [])

  if (loading) {
    return (
      <View style={[Layout.fill, Layout.center, {backgroundColor: Colors.white}]}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }

  return (
    <>
      <TouchableOpacity onPress={navigation.goBack} style={{backgroundColor: 'white'}}>
        <Image
          style={[{marginTop: 15, marginHorizontal: 15, marginBottom: 15}, Fonts.iconRegular]}
          source={require('@/Assets/Icons/Back.png')}/>
      </TouchableOpacity>
      <View style={[Layout.fill, Layout.center, {backgroundColor: Colors.white}]}>
        <Text style={Fonts.titleLarge}>{t('purchaseTitle')}</Text>
        <Text style={[Fonts.textRegular, Gutters.largeVMargin]}>{t('purchaseDescription')}</Text>
        <View style={{height: 25}}/>
        <TouchableOpacity
          onPress={requestPurchase}
          style={[Common.button.outline]}
        >
          <Text style={[Fonts.textButton, Fonts.textCenter]}>{t('purchaseButton', {price: products[0]?.localizedPrice})}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Payment
