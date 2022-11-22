import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { useTheme } from '@/Theme'
import FitImage from 'react-native-fit-image'

const Brand = ({ height, width, mode }) => {
  const { Layout, Fonts } = useTheme()

  return (
    <FitImage
      originalWidth={100}
      originalHeight={100}
      resizeMode="cover"
      style={Layout.fill}
      source={require('Assets/Images/Splashscreen.png')}
    />
  )
}

/*Brand.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}*/

export default Brand
