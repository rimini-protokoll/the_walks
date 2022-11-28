import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import RNPickerSelect from 'react-native-picker-select'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'
import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import MapImage from './Image'
import ActivityIndicator from '@/Components/ActivityIndicator'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const { width, height } = Dimensions.get('window')
const CARD_HEIGHT = height / 2
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10

const imageWidthList = [ 600, 750, 1024 ]

const getItem = (data, index) => ({
  ...data[index]
})

const IndexMapContainer = ({navigation, route}) => {
  const { Layout, Fonts, Colors, Gutters } = useTheme()
  const _scrollView = React.useRef(null)
  const _map = React.useRef(null)
  const [mapState, setMapState] = useState({loading: true})
  const [markers, setMarkers] = useState([])
  const [initial, setInitial] = useState(0)
  const [scrollTo, setScrollTo] = useState({index: -1, timeout: null})
  const [loading, setLoading] = useState(false)
  const [imageWidth, setImageWidth] = useState(0)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const completed = useSelector(state => state.walks.completed)
  const walks = useSelector(state => {
    return state.walks.fetchWalks.walks.filter(
      walk => completed.indexOf(walk.data.id) >= 0,
    )
  })
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
  const mapstyles = useSelector(state => state.walks.mapstyles)

  useEffect(() => {
    setImageWidth(imageWidthList.find(listWidth => listWidth >= CARD_WIDTH*2))

    firestoreSubscriber()
    // dispatch(ChangeWalk.action(walk.data.id))
    const subscriber = firestore()
      .collection(walk.data.id)
      .orderBy('date', 'desc')
      .onSnapshot(markersSnapshot => {
        const _markers = []
        markersSnapshot.forEach(markerRef => {
          const marker = markerRef.data()
          const dateObj = new firestore.Timestamp(
            marker.date.seconds,
            marker.date.nanoseconds,
          ).toDate()
          const date = dateString(dateObj)
          _markers.push({
            coordinate: {
              latitude: marker.coordinate._latitude,
              longitude: marker.coordinate._longitude,
            },
            date,
            image: {
              ...marker.image,
            },
            id: marker.image.uri,
          })
        })
        if (_markers.length) {
          setMarkers(_markers)
          setMapState({
            loading: false,
            region: {
              latitude: _markers[0].coordinate.latitude - 1.25,
              longitude: _markers[0].coordinate.longitude,
              latitudeDelta: 5,
              longitudeDelta: 5,
            },
          })
        } else {
          setMapState({ empty: true })
        }
      })
    setFirestoreSubscriber(() => subscriber)

    return () => subscriber()
  }, [walk])

  const [mapIndex, setMapIndex] = useState(0)
  const mapAnimation = new Animated.Value(0)
  const [firestoreSubscriber, setFirestoreSubscriber] = useState(() => (() => {}))


  const dateString = useCallback((date) => {
    let _date;
    if (Platform.OS === 'android') {
      _date = date.toString()
      _date = _date.split(' ')
      _date = `${_date[2]}. ${_date[1]} ${_date[3]} ${_date[4]}`
    } else {
      _date = Intl.DateTimeFormat(userLocale, { timeStyle: 'short', dateStyle: 'short' }).format(date)
    }
    return _date
  }, [userLocale])

  const userLocale = useSelector(state => state.language.userLocale)

  const animateToCoordinate = useCallback(markerCoordinate => {

    const coordinate = {...markerCoordinate}
    coordinate.latitude = coordinate.latitude - mapState.region.latitudeDelta / 4

    _map.current?.animateToRegion(
      {
        ...coordinate,
        latitudeDelta: Math.min(5, mapState.region.latitudeDelta),
        longitudeDelta: Math.min(5, mapState.region.longitudeDelta),
      },
      350,
    )
  }, [_map, mapState])

  useEffect(() => {
    if (initial < 1 && !mapState.loading && markers.length) {
      animateToCoordinate(markers[0].coordinate)
      setInitial(initial + 1)
    }
  }, [mapState, markers])

  useEffect(() => {
    let regionTimeout
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / ( CARD_WIDTH + 20 ) + 0.3) // animate 30% away from landing on the next item
      if (index >= markers.length) {
        index = markers.length - 1
      }
      if (index <= 0) {
        index = 0
      }

      clearTimeout(regionTimeout)
      regionTimeout = setTimeout(() => {
        if (mapIndex !== index && scrollTo.index == -1 && index != 0) {
          const { coordinate } = markers[index]
          animateToCoordinate(coordinate)
          setMapIndex(index)
          setLoading(false)
        }

        if(index === scrollTo.index) {
          setScrollTo(state => ({...state, index: -1}))
        }
      }, 10)
    })
    return () => mapAnimation.removeAllListeners()
  }, [mapAnimation])


  const onMarkerPress = useCallback(mapEventData => {
    setLoading(false)
    mapAnimation.stopAnimation()
    const markerID = mapEventData._targetInst.return.key
    const markerCoordinate = mapEventData.nativeEvent.coordinate

    animateToCoordinate(markerCoordinate)
    const markerIndex = markers.map(marker => marker.id).indexOf(markerID)
    if (markerIndex != scrollTo.index) {
      clearTimeout(scrollTo.timeout)
    }

    let x = markerIndex * CARD_WIDTH + markerIndex * 20

    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET
    }

    setMapIndex(markerIndex)
    setScrollTo(state => ({...state, index: markerIndex}))
    _scrollView.current?.scrollToIndex({ index: markerIndex, animated: true })
  }, [markers, mapAnimation, _scrollView])

  const onRegionChange = useCallback(region => {
    setMapState(state => ({ ...state, region }))
  }, [])

  const renderItem = useCallback(({item}) => loading ? null : (
      <TouchableOpacity onPress={() => animateToCoordinate(item.coordinate)}>
        <MapImage item={item} imageWidth={imageWidth} CARD_HEIGHT={CARD_HEIGHT} CARD_WIDTH={CARD_WIDTH}/>
      </TouchableOpacity>)
  , [loading, animateToCoordinate])

  const keyExtractor = useCallback(item => 'image' +item.id, [])

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
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    )
  }

  return (
    <View style={Layout.fill}>
      <MapView
        ref={_map}
        style={{ width: '100%', height: '100%' }}
        provider='google'
        onRegionChange={onRegionChange}
        customMapStyle={mapstyles}
      >
        {markers.map((marker, index) => {
          return (
            <Marker
              key={marker.id}
              icon={require('@/Assets/Icons/Marker.png')}
              onPress={onMarkerPress}
              coordinate={marker.coordinate}
              tracksViewChanges={false}
            />
          )
        })}
      </MapView>
      <View
        style={{position: 'absolute', top: 8, left: 0, width: '100%'}}
      >
        <RNPickerSelect
          onValueChange={(value) => {
            firestoreSubscriber()
            _scrollView.current?.scrollToIndex({ index: 0, animated: true })
            navigation.navigate('Pictures', {walk: value})
          }}
          style={pickerSelectStyles}
          placeholder={{label: `- ${t('walk.pictures')} -`, value: null}}
          items={walks.map(walk => ({...walk, label: walk.data.shortTitle, value: walk}))}
        >
          <Text style={[Fonts.hyperlink, Fonts.titleLarge, Fonts.textCenter]}>{walk.data.shortTitle}</Text>
        </RNPickerSelect>
      </View>
      <AnimatedFlatList
        ref={_scrollView}
        data={markers}
        renderItem={renderItem}
        getItemLayout={(data, index) => (
          {length: CARD_WIDTH + 20, offset: (CARD_WIDTH + 20) * index, index}
        )}
        removeClippedSubviews={true}
        keyExtractor={keyExtractor}
        initialNumToRender={3}
        windowSize={10}
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
          alignItems: 'flex-end',
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
        onScrollToIndexFailed={(data) => {
          //console.log('onScrollToIndexFailed', data)
          setLoading(true)
          clearTimeout(scrollTo.timeout);
          _scrollView.current?.scrollToEnd({ animated: false })
          setScrollTo(state => ({
            index: data.index,
            timeout: setTimeout(() => { _scrollView.current?.scrollToIndex({ index: data.index, animated: false }) }, 10)
          }))
        }}
      >
      </AnimatedFlatList>
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
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})
