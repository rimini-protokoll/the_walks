import React, { useState, useEffect } from 'react'
import { View, useWindowDimensions } from 'react-native'
import Tile from './Tile'

const ListStyle = {
  width: '100%',
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
  flexDirection: 'row',
}

const WalksList = ({ navigation, walks, onLoad }) => {
  const { width } = useWindowDimensions()
  const [loaded, setLoaded] = useState(0)

  const iconLoaded = () => setLoaded(prevLoaded => prevLoaded + 1)

  useEffect(() => {
    if (loaded >= walks.length) {
      onLoad && onLoad()
    }
  }, [loaded, onLoad, walks])

  return (
    <View>
      <View style={ListStyle}>
        {walks.map((walk, i) => (
          <Tile
            key={i}
            walk={walk}
            navigation={navigation}
            onLoad={iconLoaded}
            width={Math.floor(width / 3)}
          />
        ))}
      </View>
    </View>
  )
}
export default WalksList
