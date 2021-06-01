import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
	StyleSheet,
	View,
	Image,
	Animated,
	TouchableOpacity,
	Text,
	Dimensions,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'


const markers = [
	{
		coordinate: {
			latitude: 52.4649,
			longitude: 13.4050,
		},
		title: 'Sun May 30 2021 16:03:10 GMT+0200 (Central European Summer Time)',
		image: 'https://www.rimini-protokoll.de/website/cache/images/Utopolis%20Petersburg/1280-KSR_9384.jpg',
	},
	{
		coordinate: {
			latitude: 52.5200,
			longitude: 13.3950,
		},
		title: 'Sat May 29 2021 16:03:10 GMT+0200 (Central European Summer Time)',
		image: 'https://www.rimini-protokoll.de/website/cache/images/Utopolis%20Petersburg/1280-KSR_8959.jpg',
	},
	{
		coordinate: {
			latitude: 52.5300,
			longitude: 10.4100,
		},
		title: 'Sun May 23 2021 16:03:10 GMT+0200 (Central European Summer Time)',
		image: 'https://www.rimini-protokoll.de/website/cache/images/Feast%20of%20Food/1280-IMG_4088.JPG',
	},
	{
		coordinate: {
			latitude: 52.5300,
			longitude: 9.4100,
		},
		title: 'Sun May 23 2021 16:03:10 GMT+0200 (Central European Summer Time)',
		image: 'https://forsterklaert.de/wp-content/uploads/2020/05/JHF0043280-scaled.jpg',
	},
]
const { width, height } = Dimensions.get('window')
const CARD_HEIGHT = height / 2
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10
const initialMapState = {
	markers,
	region: {
		latitude: 52.5200,
		longitude: 13.4050,
		latitudeDelta: 0.09,
		longitudeDelta: 0.09,
	},
}
const IndexMapContainer = () => {
	const { Layout, Fonts, Colors, Gutters } = useTheme()
	const _scrollView = React.useRef(null)
	const _map = React.useRef(null)
	const [state, setState] = React.useState(initialMapState)

	let mapIndex = 0
	let mapAnimation = new Animated.Value(0)
	
	const dateString = (date, locale) => {

  	let _date = Intl.DateTimeFormat(locale, { timeStyle: 'short', dateStyle: 'short' }).format(new Date(date))
		
		console.log(date, locale, _date)
  	
		return _date
	}

	//const dateString = (date, locale) => Intl.DateTimeFormat(locale, {dateStyle: 'short', timeStyle: 'short'}).format(new Date(date))
	const userLocale = useSelector(state => state.language.userLocale)

	const animateToCoordinate = markerCoordinate => {

		const coordinate = {...markerCoordinate}
		coordinate.latitude = coordinate.latitude - state.region.latitudeDelta / 4

		_map.current.animateToRegion(
			{
				...coordinate,
				latitudeDelta: state.region.latitudeDelta,
				longitudeDelta: state.region.longitudeDelta,
			},
			350,
		)
	}

	useEffect(() => {
		mapAnimation.addListener(({ value }) => {
			let index = Math.floor(value / CARD_WIDTH + 0.3) // animate 30% away from landing on the next item
			if (index >= state.markers.length) {
				index = state.markers.length - 1
			}
			if (index <= 0) {
				index = 0
			}

			clearTimeout(regionTimeout)

			const regionTimeout = setTimeout(() => {
				if (mapIndex !== index) {
					mapIndex = index
					const { coordinate } = state.markers[index]
					animateToCoordinate(coordinate)
				}
			}, 10)
		})
	})

	const interpolations = state.markers.map((marker, index) => {
		const inputRange = [
			(index - 1) * CARD_WIDTH,
			index * CARD_WIDTH,
			(index + 1) * CARD_WIDTH,
		]

		const scale = mapAnimation.interpolate({
			inputRange,
			outputRange: [1, 1.5, 1],
			extrapolate: 'clamp',
		})

		return { scale }
	})

	const onMarkerPress = mapEventData => {
		const markerID = mapEventData._targetInst.return.key
		const markerCoordinate = mapEventData.nativeEvent.coordinate
		animateToCoordinate(markerCoordinate)
		
		let x = markerID * CARD_WIDTH + markerID * 20
		if (Platform.OS === 'ios') {
			x = x - SPACING_FOR_CARD_INSET
		}

		_scrollView.current.scrollTo({ x: x, y: 0, animated: true })
	}

	return (
		<View style={Layout.fill}>
			<MapView
				ref={_map}
				style={{ width: '100%', height: '100%' }}
				initialRegion={state.region}
			>
				{state.markers.map((marker, index) => {
					const scaleStyle = {
						transform: [
							{
								scale: interpolations[index].scale,
							},
						],
					}
					return (
					<Marker
			      key={ index }
			      onPress={onMarkerPress}
			      coordinate={ marker.coordinate }
			    >
			    	
			    </Marker>
					)
				})}
			</MapView>
			<Animated.ScrollView
				ref={_scrollView}
				horizontal
				pagingEnabled
				scrollEventThrottle={1}
				showsHorizontalScrollIndicator={false}
				snapToInterval={CARD_WIDTH + 20}
				snapToAlignment="center"
				style={styles.scrollView}
				contentInset={{
					top: 0,
					left: SPACING_FOR_CARD_INSET,
					bottom: 0,
					right: SPACING_FOR_CARD_INSET,
				}}
				contentContainerStyle={{
					paddingHorizontal:
						Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
				}}
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									x: mapAnimation,
								},
							},
						},
					],
					{ useNativeDriver: true },
				)}
			>
				{state.markers.map((marker, index) => (
					<View style={[{backgroundColor:Colors.card}, styles.card]} key={index}>
						<View style={Gutters.smallPadding}>
							<Text style={Fonts.textSmall}>
								{dateString(marker.title, userLocale)}
							</Text>
						</View>
						<Image style={{width:CARD_WIDTH, height:CARD_HEIGHT}} resizeMode={'contain'} source={{ uri: marker.image }} />
					</View>
				))}
			</Animated.ScrollView>
		</View>
	)
}

export default IndexMapContainer

const styles = StyleSheet.create({
	scrollView: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
	card: {
		elevation: 2,
		marginHorizontal: 10,
		shadowColor: '#000',
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: { x: 2, y: -2 },
		overflow: 'hidden',
	},
})
