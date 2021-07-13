import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'
import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next'
import ChangeWalk from '@/Store/Walks/ChangeWalk'

const { width, height } = Dimensions.get('window')
const CARD_HEIGHT = height / 2
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10

const IndexMapContainer = ({navigation, route}) => {
  const { Layout, Fonts, Colors, Gutters } = useTheme()
  const _scrollView = React.useRef(null)
  const _map = React.useRef(null)
  const [mapState, setMapState] = React.useState({loading: true})
  const [markers, setMarkers] = React.useState([])
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const walk = useSelector(state => {
    if (route.params?.walk) {
      return route.params.walk
    }
    if (state.walks.selectedWalk) {
      return state.walks.fetchWalks.walks.filter(
        _walk => _walk.data.id == state.walks.selectedWalk,
      )[0]
    }
  })
  // console.log('map', walk)

  useEffect(() => {
    // dispatch(ChangeWalk.action(walk.data.id))
    const subscriber = firestore()
      .collection(walk.data.id)
      .orderBy('date','desc')
      .onSnapshot(markersSnapshot => {
        const _markers = []
        markersSnapshot.forEach(markerRef => {
          const marker = markerRef.data()
          const dateObj = (new firestore.Timestamp(marker.date.seconds, marker.date.nanoseconds)).toDate()
          const date =  dateString(dateObj)
          _markers.push({
            coordinate: {
              latitude: marker.coordinate._latitude,
              longitude: marker.coordinate._longitude
            },
            date,
            image: {
              ...marker.image,
            },
            id: marker.image.uri
          })
        })
        if (_markers.length) {
          setMarkers(_markers)
          if (mapState.loading) {
            setMapState({
              loading: false,
              region: {
                latitude: _markers[0].coordinate.latitude - 0.0225,
                longitude: _markers[0].coordinate.longitude,
                latitudeDelta: .09,
                longitudeDelta: .09,
              },
            })
          }
        } else {
          setMapState({ empty: true })
        }
      });

    return () => subscriber();
  }, [walk]);

  let mapIndex = 0
  let mapAnimation = new Animated.Value(0)

  const dateString = (date, locale) => {
    let _date = Intl.DateTimeFormat(locale, { timeStyle: 'short', dateStyle: 'short' }).format(date)

    console.log(date, locale, _date)

    return _date
  }

  //const dateString = (date, locale) => Intl.DateTimeFormat(locale, {dateStyle: 'short', timeStyle: 'short'}).format(new Date(date))
  const userLocale = useSelector(state => state.language.userLocale)

  const animateToCoordinate = markerCoordinate => {

    const coordinate = {...markerCoordinate}
    coordinate.latitude = coordinate.latitude - mapState.region.latitudeDelta / 4

    _map.current.animateToRegion(
      {
        ...coordinate,
        latitudeDelta: Math.min(.09, mapState.region.latitudeDelta),
        longitudeDelta: Math.min(.09, mapState.region.longitudeDelta),
      },
      350,
    )
  }

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3) // animate 30% away from landing on the next item
      if (index >= markers.length) {
        index = markers.length - 1
      }
      if (index <= 0) {
        index = 0
      }

      clearTimeout(regionTimeout)

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index
          const { coordinate } = markers[index]
          animateToCoordinate(coordinate)
        }
      }, 10)
    })
  })

  const interpolations = markers.map((marker, index) => {
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

  const onRegionChange = region => {
    setMapState({ region })
  }
  if (mapState.empty) {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <Text style={Fonts.textLarge}>{t('walk.noPictures')}</Text>
      </View>
    )
  }
  if (mapState.loading) {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }
  return (
    <View style={Layout.fill}>
      <MapView
        ref={_map}
        style={{ width: '100%', height: '100%' }}
        region={mapState.region}
        onRegionChangeComplete={onRegionChange}
      >
        {markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          }
          return (
            <Marker
              key={'marker' + marker.id}
              onPress={onMarkerPress}
              coordinate={marker.coordinate}
            >
            </Marker>
          )
        })}
      </MapView>
      <TouchableOpacity style={{position: 'absolute', top: 50, left: 0, width: '100%'}} onPress={() => navigation.navigate(walk.data.title, {walk})}>
        <Text style={[Fonts.titleLarge, Fonts.textCenter, ]}>{walk.data.title}</Text>
      </TouchableOpacity>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={[styles.scrollView]}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
          Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
          alignItems: 'flex-end'
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
        {markers.map((marker, index) => (
          <View style={[
            {width: CARD_WIDTH, backgroundColor:Colors.card},
            styles.card]}
            key={'image' + marker.id}>
            <View style={Gutters.smallPadding}>
              <Text style={Fonts.textSmall}>
                {marker.date}
              </Text>
            </View>
            <FitImage
              style={{
                height: Math.min(CARD_HEIGHT, CARD_WIDTH / (marker.image.width / marker.image.height)),
                width: CARD_WIDTH
              }}
              resizeMode='contain'
              originalWidth={marker.image.width}
              originalHeight={marker.image.height}
              source={{ uri: marker.image.uri }}
            />
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
    overflow: 'visible'
  },
})
