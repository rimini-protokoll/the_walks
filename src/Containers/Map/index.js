import React, { memo, useState, useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Image,
  Animated,
  Text,
  Dimensions,
  FlatList,
  Platform,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useTheme } from '@/Theme'
import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next'
import MapImage from './Image'
import ActivityIndicator from '@/Components/ActivityIndicator'
import ActiveMarkerSvg from '@/Assets/Icons/ActiveMarker.svg'
import MarkerSvg from '@/Assets/Icons/Marker.svg'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
const { height, width } = Dimensions.get('window')
const CARD_WIDTH = width
const CARD_SPACING = 10

const imageWidthList = [600, 750, 1024, 2048]

const MapLayout = {
  closed: 0.3,
  open: 0.7,
}

const ItemSeparatorComponent = memo(() => (
  <View
    style={{
      height: '100%',
      width: CARD_SPACING,
      backgroundColor: '#EAEAEA',
    }}
  />
))

const ImageMarker = memo(({ onMarkerPress, marker, active }) => {
  const [tracksViewChanges, setTracksViewChanges] = useState(true)
  return (
    <Marker
      key={marker.id}
      onPress={onMarkerPress}
      coordinate={marker.coordinate}
      tracksViewChanges={tracksViewChanges}
      zIndex={active ? 2 : 1}
    >
      {active ? (
        <ActiveMarkerSvg
          width={25}
          height={25}
          onLayout={() => setTracksViewChanges(false)}
        />
      ) : (
        <MarkerSvg
          width={20}
          height={20}
          onLayout={() => setTracksViewChanges(false)}
        />
      )}
    </Marker>
  )
})

const IndexMapContainer = ({ navigation, route }) => {
  const { Layout, Fonts, Colors } = useTheme()
  const _scrollView = React.useRef(null)
  const _map = React.useRef(null)
  const [mapState, setMapState] = useState({ loading: true })
  const [markers, setMarkers] = useState([])
  const [scrollTo, setScrollTo] = useState({ index: -1, timeout: null })
  const [loading, setLoading] = useState(false)
  const [imageWidth, setImageWidth] = useState(0)
  const [viewMap, setViewMap] = useState(false)
  const { t } = useTranslation()
  const walk = useSelector(state => {
    if (route.params?.walk) {
      return route.params.walk
    }
    if (state.walks.selectedWalk) {
      return state.walks.fetchWalks.walks.filter(
        _walk => _walk.data.id === state.walks.selectedWalk,
      )[0]
    }
  })
  // console.log('map', walk)
  const mapstyles = useSelector(state => state.walks.mapstyles)

  useEffect(() => {
    const { width, height } = Dimensions.get('window')
    setMapIndex(0)
    _scrollView.current?.scrollToIndex({ index: 0, animated: false })
    setImageWidth(
      imageWidthList.find(
        listWidth =>
          listWidth >= Math.max(CARD_WIDTH, height * MapLayout.open) * 2,
      ),
    )
    firestoreSubscriber()
    // dispatch(ChangeWalk.action(walk.data.id))
    const subscriber = firestore()
      .collection(walk.data.id)
      .orderBy('date', 'desc')
      .onSnapshot(markersSnapshot => {
        const _markers = []
        markersSnapshot.forEach((markerRef, index) => {
          const marker = markerRef.data()
          const dateObj = new firestore.Timestamp(
            marker.date.seconds,
            marker.date.nanoseconds,
          ).toDate()
          const date = dateString(dateObj)
          let uri = marker.image.uri
          _markers.push({
            index,
            coordinate: {
              latitude: marker.coordinate._latitude,
              longitude: marker.coordinate._longitude,
            },
            date,
            image: {
              ...marker.image,
              uri,
            },
            id: marker.image.uri,
          })
        })
        if (_markers.length) {
          setMarkers(_markers)
          setMapState({
            loading: false,
            camera: {
              center: _markers[0].coordinate,
              pitch: 0,
              heading: 0,
              zoom: 4,
            },
          })
        } else {
          setMapState({ empty: true })
        }
      })
    setFirestoreSubscriber(() => subscriber)

    return () => subscriber()
  }, [walk, firestoreSubscriber, dateString])

  const [mapIndex, setMapIndex] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const mapAnimation = useMemo(() => new Animated.Value(0), [])
  const [firestoreSubscriber, setFirestoreSubscriber] = useState(() => () => {})

  const dateString = useCallback(
    date => {
      let _date
      if (Platform.OS === 'android') {
        _date = date.toString()
        _date = _date.split(' ')
        _date = `${_date[2]}. ${_date[1]} ${_date[3]} ${_date[4]}`
      } else {
        _date = Intl.DateTimeFormat(userLocale, {
          timeStyle: 'short',
          dateStyle: 'short',
        }).format(date)
      }
      return _date
    },
    [userLocale],
  )

  const userLocale = useSelector(state => state.language.userLocale)

  const animateToCoordinate = useCallback(
    markerCoordinate => {
      _map.current?.getCamera().then(camera => {
        _map.current?.animateCamera(
          {
            ...camera,
            center: markerCoordinate,
            zoom: camera.zoom,
          },
          350,
        )
      })
    },
    [_map],
  )

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let _index = Math.round(value / (CARD_WIDTH + 10))
      if (_index >= markers.length) {
        _index = markers.length - 1
      }
      if (_index <= 0) {
        _index = 0
      }
      setCardIndex(_index)
    })
    return () => mapAnimation.removeAllListeners()
  }, [mapAnimation, markers, animateToCoordinate])

  useEffect(() => {
    if (mapIndex !== cardIndex && scrollTo.index === -1) {
      setMapIndex(cardIndex)
      setLoading(false)
    }

    if (cardIndex === scrollTo.index) {
      setScrollTo(state => ({ ...state, index: -1 }))
    }
  }, [mapIndex, cardIndex, animateToCoordinate, markers, scrollTo.index])

  useEffect(() => {
    if (markers?.length && mapIndex >= 0) {
      const { coordinate } = markers[mapIndex]
      animateToCoordinate(coordinate)
    }
    console.log('animating')
  }, [mapIndex, markers, animateToCoordinate])

  const onMarkerPress = useCallback(
    mapEventData => {
      setLoading(false)
      mapAnimation.stopAnimation()
      const markerID = mapEventData._targetInst.return.key

      const markerIndex = markers.map(marker => marker.id).indexOf(markerID)
      if (markerIndex !== scrollTo.index) {
        clearTimeout(scrollTo.timeout)
      }

      setMapIndex(markerIndex)
      setScrollTo(state => ({ ...state, index: markerIndex }))
      _scrollView.current?.scrollToIndex({ index: markerIndex, animated: true })
    },
    [markers, mapAnimation, _scrollView, scrollTo.timeout, scrollTo.index],
  )

  const imageMarkers = useMemo(
    () =>
      markers.map(marker => [
        <ImageMarker
          key={`imageMarker_${marker.id}`}
          marker={marker}
          onMarkerPress={onMarkerPress}
        />,
        <ImageMarker
          key={`imageMarker_active_${marker.id}`}
          marker={marker}
          active={true}
          onMarkerPress={onMarkerPress}
        />,
      ]),
    [markers, onMarkerPress],
  )

  const renderItem = useCallback(
    ({ item }) => (
      <MapImage
        item={item}
        imageWidth={imageWidth}
        CARD_HEIGHT={height * MapLayout.open}
        CARD_WIDTH={CARD_WIDTH}
        onPress={() => animateToCoordinate(item.coordinate)}
      />
    ),
    [animateToCoordinate, imageWidth],
  )

  const keyExtractor = useCallback(item => 'image' + item.id, [])

  const snapOffsets = useMemo(() => {
    const offsets = []
    for (let i = 0; i < markers.length; i++) {
      offsets.push(i * (CARD_WIDTH + 10))
    }
    return offsets
  }, [markers.length])

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
        style={{
          width: '100%',
          height: `${MapLayout[viewMap ? 'open' : 'closed'] * 100}%`,
        }}
        provider="google"
        initalCamera={mapState.camera}
        camera={mapState.camera}
        customMapStyle={mapstyles}
        toolbarEnabled={false}
      >
        {imageMarkers?.length &&
          markers
            .filter(({ index }) => index !== mapIndex)
            .map(({ index }) => {
              return imageMarkers[index][0]
            })}
        {imageMarkers[mapIndex][1]}
      </MapView>
      {loading ? null : (
        <AnimatedFlatList
          ref={_scrollView}
          data={markers}
          style={{ backgroundColor: '#FAFAFA' }}
          renderItem={renderItem}
          getItemLayout={(data, index) => ({
            length: CARD_WIDTH + CARD_SPACING,
            offset: (CARD_WIDTH + CARD_SPACING) * index,
            index,
          })}
          ItemSeparatorComponent={<ItemSeparatorComponent />}
          removeClippedSubviews={true}
          keyExtractor={keyExtractor}
          initialNumToRender={3}
          windowSize={3}
          horizontal
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={true}
          snapToOffsets={snapOffsets}
          onScrollBeginDrag={() => setViewMap(false)}
          contentInset={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
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
          onScrollToIndexFailed={data => {
            //console.log('onScrollToIndexFailed', data)
            setLoading(true)
            clearTimeout(scrollTo.timeout)
            _scrollView.current?.scrollToEnd({ animated: false })
            setScrollTo(state => ({
              index: data.index,
              timeout: setTimeout(() => {
                _scrollView.current?.scrollToIndex({
                  index: data.index,
                  animated: false,
                })
              }, 10),
            }))
          }}
        />
      )}
    </View>
  )
}

export default IndexMapContainer
