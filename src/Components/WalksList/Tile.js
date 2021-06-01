import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Theme'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import FitImage from 'react-native-fit-image'


const Tile = ({ navigation, identifier, title, iconUri, style }) => {
  const { Fonts } = useTheme()
  const dispatch = useDispatch()
  const selectWalk = () => {
    dispatch(ChangeWalk.action(identifier))
    navigation.navigate(title)
  }
  return (
    <TouchableOpacity 
      style={[ style, {
        width: '50%'
      }]}
      onPress={selectWalk}>
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
