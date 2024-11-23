import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, Easing, Animated } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

const ActivityIndicator = () => {
  const [state, setState] = useState({})

  useEffect(() => {
    const rotationValue = new Animated.Value(0)
    const rotationDegrees = rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
    setState({ rotationValue, rotationDegrees })
  }, [])
  if (!state.rotationDegrees) {
    return null
  }
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        transform: [{ translateX: 25 }, { translateY: 25 }],
      }}
    >
      <Animated.View
        style={{
          width: 50,
          height: 50,
          transform: [
            {
              translateX: -25,
            },
            {
              translateY: -25,
            },
            {
              rotate: state.rotationDegrees,
            },
          ],
        }}
      >
        <Svg width="50px" height="50px" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="11"
            strokeDasharray="164.93361431346415 56.97787143782138"
          />
        </Svg>
      </Animated.View>
    </View>
  )
}

export default ActivityIndicator
