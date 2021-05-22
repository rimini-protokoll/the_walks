import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import Tile from './TilePartner'

const PartnersList = () => {
  const { Layout, Fonts } = useTheme()
  const partners = [
    {
      title: 'Vor dem Theater',
      iconUri: 'https://cdn.reservix.com/core/img/resource/topevent/61/5cdd2f72f3860190516113754.png'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://cdn.reservix.com/core/img/resource/topevent/61/5cdd2f72f3860190516113754.png'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://cdn.reservix.com/core/img/resource/topevent/61/5cdd2f72f3860190516113754.png'
    },
  ]
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      alignContent: 'baseline',
      flexWrap: 'wrap',
      flexDirection: 'row'
      }}>
      <Text style={[ Fonts.titleRegular, { width: "100%" }]}>Partners</Text>
      { partners.map(({title, iconUri}, i) => (<Tile key={i} title={title} iconUri={iconUri} />)) }
    </View>
  )
}
export default PartnersList 
