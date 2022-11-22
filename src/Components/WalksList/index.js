import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '@/Theme'
import Tile from './Tile'

const WalksList = ({ navigation, walks }) => {
  const { Layout } = useTheme()
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      {walks.map((walk, i) => (
        <Tile key={i} walk={walk} navigation={navigation} />
      ))}
    </View>
  )
}
export default WalksList
