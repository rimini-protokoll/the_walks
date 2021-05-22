import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import FitImage from 'react-native-fit-image'


const Tile = ({ navigation, title, iconUri, style }) => {
  const { Fonts } = useTheme()
  return (
    <TouchableOpacity 
      style={[ style, {
        width: '50%'
      }]}
      onPress={() => navigation.navigate(title) }>
      <FitImage 
        originalWidth={100}
        originalHeight={100}
        source={{ uri:iconUri }}
      />
      <View>
        <Text style={[Fonts.textRegular, { textAlign:'center', padding:10 }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Tile
