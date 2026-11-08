import React, { memo, useState, useRef } from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import { useTheme } from '@/Theme'
import FitImage from 'react-native-fit-image'

const getImagePath = (uri, width) => {
  if (!uri) return { uri: '' }
  const targetWidth = Math.min(width || 750, 1024)
  return { uri: `${uri}?w=${targetWidth}` }
}

const Image = ({ item, imageWidth, CARD_HEIGHT, CARD_WIDTH, onPress }) => {
  const { FontSize, Fonts, Colors } = useTheme()
  const styles = useRef(getStyles({ FontSize, Fonts, Colors })).current
  const [loaded, setLoaded] = useState(false)

  const imageUri = item.image?.uri
  const targetWidth = Math.min(imageWidth || 750, 1024)
  const ratio =
    item.image?.height && item.image?.width
      ? item.image.height / item.image.width
      : 1

  return (
    <Pressable
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
      onPress={onPress}
      key={'image' + item.id}
    >
      <View style={[styles.card]}>
        {imageUri ? (
          <>
            <View
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: CARD_HEIGHT,
                width: CARD_WIDTH,
              }}
            >
              <FitImage
                style={{
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                }}
                blurRadius={1}
                resizeMode="cover"
                indicator={!loaded}
                indicatorSize="large"
                indicatorColor="#999"
                originalWidth={64}
                originalHeight={Math.round(64 * ratio)}
                source={getImagePath(imageUri, 64)}
              />
            </View>
            <View
              style={{
                opacity: loaded ? 1 : 0.05,
                position: 'absolute',
                left: 0,
                top: 0,
                height: CARD_HEIGHT,
                width: CARD_WIDTH,
              }}
            >
              <FitImage
                style={{
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                }}
                resizeMode="cover"
                indicator={false}
                originalWidth={targetWidth}
                originalHeight={Math.round(targetWidth * ratio)}
                source={getImagePath(imageUri, targetWidth)}
                onLoad={() => setLoaded(true)}
              />
            </View>
          </>
        ) : null}
        {item.date ? (
          <Text numberOfLines={1} style={[Fonts.titleRegular, styles.date]}>
            {item.date}
          </Text>
        ) : null}
      </View>
    </Pressable>
  )
}

const getStyles = ({ Colors, FontSize, Fonts }) =>
  StyleSheet.create({
    date: {
      backgroundColor: Colors.background,
      position: 'absolute',
      top: 0,
      right: 0,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: FontSize.small,
    },
    card: {
      width: '100%',
      height: '100%',
      backgroundColor: '#FAFAFA',
      zIndex: 0,
    },
  })

export default memo(Image)
