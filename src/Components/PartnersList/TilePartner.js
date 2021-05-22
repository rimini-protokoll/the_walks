import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import FitImage from 'react-native-fit-image'


const TilePartner = ({ navigation, title, iconUri }) => {
  const { Fonts } = useTheme()
  return (
    <TouchableOpacity style={{ width: '50%' }}>
      <FitImage 
        originalWidth={100}
        originalHeight={100}
        source={{uri: iconUri}}
      />
    </TouchableOpacity>
  )
}

export default TilePartner
