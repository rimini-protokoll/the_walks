import React, { useState, useCallback } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Theme'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import FitImage from 'react-native-fit-image'

const Tile = ({ navigation, walk, style, onLoad, width }) => {
  const { id, shortTitle, iconUri, local } = walk.data
  const { Gutters, Fonts } = useTheme()
  const dispatch = useDispatch()
  const selectWalk = useCallback(() => {
    dispatch(ChangeWalk.action(id))
    navigation.navigate(id, { walk })
  }, [navigation, dispatch, walk, id])
  const [show, setShow] = useState(false)
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={shortTitle}
      style={[
        style,
        {
          width: Math.min(150, width),
          paddingVertical: 10,
          justifySelf: 'flex-start',
          aspectRatio: 0.75,
          opacity: show ? 1 : 0,
        },
      ]}
      onPress={selectWalk}
    >
      <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
        <FitImage
          originalWidth={1024}
          originalHeight={1024}
          source={{ uri: iconUri }}
          onLoadEnd={() => { setShow(true); onLoad && onLoad(iconUri); }}
        />
      </View>
      <Text
        numberOfLines={2}
        style={[
          Fonts.textSmall,
          Gutters.tinyHPadding,
          {
            fontSize: Fonts.textSmall.fontSize * 0.95,
            textAlign: 'center',
            textDecorationLine: local ? 'underline' : undefined,
          },
        ]}
      >
        {!setShow ? "\n" : shortTitle}
      </Text>
    </TouchableOpacity>
  )
}

export default Tile
