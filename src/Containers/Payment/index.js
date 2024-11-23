import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Image, Text, TouchableOpacity, Platform} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useTheme} from '@/Theme';
import {useTranslation} from 'react-i18next';
import PurchaseWalks from '@/Store/Walks/PurchaseWalks';
import ActivityIndicator from '@/Components/ActivityIndicator';

// import {
//   purchaseErrorListener,
//   purchaseUpdatedListener,
// } from 'react-native-iap'
// import * as RNIap from 'react-native-iap'

const Payment = ({navigation}) => {
  const {Colors, Common, Fonts, Gutters, Layout} = useTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [purchasePrice, setPurchasePrice] = useState();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setPurchasePrice(products[0]?.localizedPrice);
    } else {
      setPurchasePrice(products[0]?.oneTimePurchaseOfferDetails.formattedPrice);
    }
  }, [products]);

  if (loading) {
    return (
      <View
        style={[Layout.fill, Layout.center, {backgroundColor: Colors.white}]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <>
      <TouchableOpacity
        accessibilityLabel="Back"
        onPress={navigation.goBack}
        style={{backgroundColor: 'white'}}>
        <Image
          style={[
            {marginTop: 15, marginHorizontal: 15, marginBottom: 15},
            Fonts.iconRegular,
          ]}
          source={require('@/Assets/Icons/Back.png')}
        />
      </TouchableOpacity>
      <View
        style={[Layout.fill, Layout.center, {backgroundColor: Colors.white}]}>
        <Text style={Fonts.titleLarge}>{t('purchaseTitle')}</Text>
        <Text style={[Fonts.textRegular, Gutters.largeVMargin]}>
          {t('purchaseDescription')}
        </Text>
        <View style={{height: 25}} />
        <TouchableOpacity style={[Common.button.outline]}>
          <Text style={[Fonts.textButton, Fonts.textCenter]}>
            {t('purchaseButton', {price: purchasePrice})}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Payment;
