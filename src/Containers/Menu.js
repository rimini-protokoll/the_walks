import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import WalksList from '@/Components/WalksList'
import PurchaseWalks from '@/Store/Walks/PurchaseWalks'

const Menu = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const walks = useSelector(state => {
    const walks = state.walks.fetchWalks.walks
    if (walks) {
      return walks.filter(
        walk => walk.listed && (!walk.paid || state.walks.purchased),
      )
    } else {
      return []
    }
  })
  const walksPurchased = useSelector(state => state.walks.purchased)

  const purchase = () => {
    dispatch(PurchaseWalks.action())
  }

  const voucherCodeChange = ({nativeEvent}) => {
    if (nativeEvent.text == '1234') {
      dispatch(PurchaseWalks.action())
    }
  }

  return (
    <ScrollView style={[Gutters.smallHPadding, Gutters.smallVPadding]}>
      <WalksList navigation={navigation} walks={walks} />
      {walksPurchased ? null : (
        <View>
          <TouchableOpacity onPress={purchase} style={Common.button.outline}>
            <Text>{t('purchase')}</Text>
          </TouchableOpacity>
          <TextInput
            onChange={voucherCodeChange}
            style={Common.textInput}
            placeholder={t('voucher')} />
        </View>
      )}
    </ScrollView>
  )
}

export default Menu
