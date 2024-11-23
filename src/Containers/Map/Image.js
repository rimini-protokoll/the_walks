import React, { memo, useState, useEffect, useRef } from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import { useTheme } from '@/Theme'
import FitImage from 'react-native-fit-image'

const getImagePath = (uri, imageWidth) => {
  return { uri: uri + '?w=' + imageWidth }
}

const Image = ({ item, imageWidth, CARD_HEIGHT, CARD_WIDTH, onPress }) => {
  const { FontSize, Fonts, Colors } = useTheme()
  const styles = useRef(getStyles({ FontSize, Fonts, Colors })).current
  const [show, setShow] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const showTimeout = setTimeout(() => setShow(true), 16)
    return () => clearTimeout(showTimeout)
  }, [])

  return (
    <Pressable
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
      onPress={onPress}
      key={'image' + item.id}
    >
      <View style={[styles.card]}>
        {show || loaded ? (
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
                indicator={true}
                indicatorSize="large"
                indicatorColor="#000"
                originalWidth={16}
                originalHeight={16 * (item.image.height / item.image.width)}
                source={getImagePath(item.image.uri, 16)}
              />
            </View>
            <View
              style={{
                opacity: loaded ? 1 : .1,
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
                originalWidth={imageWidth}
                originalHeight={imageWidth * (item.image.height / item.image.width)}
                source={getImagePath(item.image.uri, imageWidth)}
                onLoad={() => setLoaded(true)}
              />
            </View>
          </>
        ) : null}
        <Text numberOfLines={1} style={[Fonts.titleRegular, styles.date]}>
          {item.date}
        </Text>
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
