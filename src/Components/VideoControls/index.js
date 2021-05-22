import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  View,
} from 'react-native'
const VideoControl = () => {
	return (
		<View style={{ 
			flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}>
			<Icon name="play-back" color="#666" size={40} />
			<Icon name="play" color="#000" size={40}/>
			<Icon name="play-forward" color="#666" size={40} />
		</View>
	)
}
export default VideoControl