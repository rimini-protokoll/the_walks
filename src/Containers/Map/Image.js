import React, { memo, useState, useCallback } from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import { useTheme } from '@/Theme'
import FitImage from 'react-native-fit-image'

const getImagePath = (uri, imageWidth) => {
  return { uri: uri + '?w=' + imageWidth }
}

const absoluteStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
}

const Image = memo(({ item, imageWidth, CARD_HEIGHT, CARD_WIDTH, onPress }) => {
  const { FontSize, Fonts, Colors } = useTheme()
  const [loaded, setLoaded] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, []);

  const containerStyle = {
    width: CARD_WIDTH,
    height: CARD_HEIGHT
  };

  const imageStyle = {
    ...absoluteStyle,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  };

  const highResStyle = {
    ...imageStyle,
    opacity: loaded ? 1 : 0.1,
  };

  const styles = StyleSheet.create({
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
  });

  const thumbHeight = 16 * (item.image.height / item.image.width);
  const fullHeight = imageWidth * (item.image.height / item.image.width);

  return (
    <Pressable
      style={containerStyle}
      onPress={onPress}
    >
      <View style={styles.card}>
        <View style={imageStyle}>
          <FitImage
            style={containerStyle}
            blurRadius={1}
            resizeMode="cover"
            indicator={true}
            indicatorSize="large"
            indicatorColor="#000"
            originalWidth={16}
            originalHeight={thumbHeight}
            source={getImagePath(item.image.uri, 16)}
          />
        </View>
        <View style={highResStyle}>
          <FitImage
            style={containerStyle}
            resizeMode="cover"
            indicator={false}
            originalWidth={imageWidth}
            originalHeight={fullHeight}
            source={getImagePath(item.image.uri, imageWidth)}
            onLoad={handleLoad}
          />
        </View>
        <Text numberOfLines={1} style={[Fonts.titleRegular, styles.date]}>
          {item.date}
        </Text>
      </View>
    </Pressable>
  )
})

export default Image
