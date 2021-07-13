import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import Tile from './Tile'

const WalksList = ({ navigation, walks }) => {
  const { Layout } = useTheme()
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      alignContent: 'baseline',
      flexWrap: 'wrap',
      flexDirection: 'row'
      }}>
      { walks.map(({data}, i) => (
        <Tile
          key={i}
          identifier={data.id}
          navigation={navigation}
          title={data.title}
          iconUri={data.iconUri}
          />
      ))}
    </View>
  )
}
export default WalksList 
