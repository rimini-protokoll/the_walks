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


const Tile = ({ navigation, local, identifier, title, iconUri, style }) => {
  const { Fonts } = useTheme()
  const dispatch = useDispatch()
  const selectWalk = () => {
    dispatch(ChangeWalk.action(identifier))
    navigation.navigate(title)
  }
  return (
    <TouchableOpacity 
      style={[ style, {
        width: '33%'
      }]}
      onPress={selectWalk}>
      <View style={{padding: 15}}>
        <FitImage 
          originalWidth={100}
          originalHeight={100}
          source={{ uri: iconUri }}
        />
      </View>
      <View>
        <Text style={[Fonts.textSmall, { textAlign:'center' }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Tile
