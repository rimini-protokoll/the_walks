import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import { useTheme } from '@/Theme'
import FitImage from 'react-native-fit-image'

const Brand = ({ mode }) => {
  const { Layout, Fonts } = useTheme()
  const { width, height } = useWindowDimensions()
  return (
    <View
      style={{ position: 'absolute', width, height }}
    >
      <Image
        resizeMode="cover"
        style={{ width, height }}
        source={require('Assets/Images/Splashscreen.png')}
      />
    </View>
  )
}

export default Brand
