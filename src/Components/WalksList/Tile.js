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


const Tile = ({ navigation, walk, style }) => {
  const {id, shortTitle, iconUri, local} = walk.data
  const { Fonts } = useTheme()
  const dispatch = useDispatch()
  const selectWalk = () => {
    dispatch(ChangeWalk.action(id))
    navigation.navigate(id, {walk})
  }
  return (
    <TouchableOpacity 
      style={[ style, {
        width: '33%',
        paddingVertical: 10,
        justifySelf: 'flex-start'
      }]}
      onPress={selectWalk}>
      <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
        <FitImage
          originalWidth={1024}
          originalHeight={1024}
          source={{ uri: iconUri }}
        />
      </View>
      <View>
        <Text style={[Fonts.textSmall, { fontSize: Fonts.textSmall.fontSize * .95, textAlign:'center', textDecorationLine: local ? 'underline' : undefined}]}>{shortTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Tile
