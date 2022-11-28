import React, { memo } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'

const getImagePath = (uri, imageWidth) => {
  return { uri: uri + '?w=' + imageWidth }
}

const Image = ({item, imageWidth, CARD_HEIGHT, CARD_WIDTH}) => {
  const { Layout, Fonts, Gutters } = useTheme()

  return (
    <View style={[styles.card]}
      key={'image' + item.id}>
      <View style={[Gutters.smallHPadding]}>
        <Text style={[Fonts.textSmall, Fonts.textCenter, Layout.selfStretch]}>
          {item.date}
        </Text>
      </View>
      <FitImage
        style={{
          height: Math.min(CARD_HEIGHT, CARD_WIDTH / (item.image.width / item.image.height)),
          width: CARD_WIDTH
        }}
        resizeMode='contain'
        originalWidth={item.image.width}
        originalHeight={item.image.height}
        source={ getImagePath(item.image.uri, imageWidth) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    overflow: 'visible'
  },
})

export default memo(Image)
