import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Image, Text, TouchableOpacity, Platform } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'
import ActivityIndicator from '@/Components/ActivityIndicator'

import {
  purchaseErrorListener,
  purchaseUpdatedListener,
} from 'react-native-iap'
import * as RNIap from 'react-native-iap'

const Payment = ({ navigation }) => {
  const { Colors, Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [purchasePrice, setPurchasePrice] = useState()

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setPurchasePrice(products[0]?.localizedPrice)
    } else {
      setPurchasePrice(products[0]?.oneTimePurchaseOfferDetails.formattedPrice)
    }
  }, [products])

  useEffect(() => {
    const cb = async () => {
      const result = await RNIap.initConnection()
      console.log('connection is => ', result)
      if (Platform.OS === 'ios') {
        RNIap.clearProductsIOS()
      } else {
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid()
      }
      const _products = await RNIap.getProducts({ skus: ['the_walks'] })
      console.log('products: ', _products)
      setProducts(_products)
      setLoading(false)
      const purchaseUpdatedSubscription = purchaseUpdatedListener(
        async purchase => {
          // console.log('purchaseUpdatedListener', purchase)
          try {
            let purchaseState
            if (Platform.OS === 'android') {
              purchaseState = purchase.purchaseStateAndroid
            } else {
              const receiptBody = {
                'receipt-data': purchase.transactionReceipt,
                password: 'baf2ee7597ab466f84d523338eb1d482', // app shared secret, can be found in App Store Connect
              }
              let _result = await RNIap.validateReceiptIos({
                receiptBody,
                isTest: false,
              })
              if (parseInt(_result?.status, 10) === 21007) {
                _result = await RNIap.validateReceiptIos({
                  receiptBody,
                  isTest: true,
                })
              }
              console.log(_result?.status)
              if (_result?.status === 0) {
                purchaseState = 1
              }
            }
            if (purchaseState === 1) {
              setLoading(true)
              const docRef = await firestore()
                .collection('vouchers')
                .add({
                  guest_venue: `${Platform.OS}IAP`,
                  ...purchase,
                  used: true,
                })
              await RNIap.finishTransaction({ purchase }, true)
              dispatch(PurchaseWalks.action(docRef.id))
              navigation.reset({ index: 0, routes: [{ name: 'Main' }] })
            } else {
              throw {
                code: 'E_PURCHASE_STATE',
                message: JSON.stringify(purchase),
              }
            }
          } catch (err) {
            console.warn(err.code, err.message)
            setLoading(false)
          }
        },
      )

      const purchaseErrorSubscription = purchaseErrorListener(async error => {
        console.warn(error.code, error.message)
      })

      return () => {
        purchaseUpdatedSubscription.remove()
        purchaseErrorSubscription.remove()
        RNIap.endConnection()
      }
    }
    cb()
  }, [dispatch, navigation])

  const requestPurchase = useCallback(async () => {
    try {
      let result
      if (Platform.OS === 'ios') {
        result = await RNIap.requestPurchase({
          sku: 'the_walks',
          andDangerouslyFinishTransactionAutomaticallyIOS: false,
        })
      } else {
        result = await RNIap.requestPurchase({
          skus: ['the_walks'],
        })
      }
      console.log('PURCHASED', result)
    } catch (err) {
      console.warn(err.code, err.message)
    }
  }, [])

  if (loading) {
    return (
      <View
        style={[Layout.fill, Layout.center, { backgroundColor: Colors.white }]}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    )
  }

  return (
    <>
      <TouchableOpacity
        accessibilityLabel="Back"
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
      <View
        style={[Layout.fill, Layout.center, { backgroundColor: Colors.white }]}
      >
        <Text style={Fonts.titleLarge}>{t('purchaseTitle')}</Text>
        <Text style={[Fonts.textRegular, Gutters.largeVMargin]}>
          {t('purchaseDescription')}
        </Text>
        <View style={{ height: 25 }} />
        <TouchableOpacity
          onPress={requestPurchase}
          style={[Common.button.outline]}
        >
          <Text style={[Fonts.textButton, Fonts.textCenter]}>
            {t('purchaseButton', { price: purchasePrice })}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Payment
