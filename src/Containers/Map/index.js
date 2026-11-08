import React, { memo, useState, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  View,
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

const { width } = Dimensions.get('window')
const CARD_WIDTH = width
const CARD_SPACING = 10

const MapLayout = {
  closed: 0.35,
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

  useEffect(() => {
    setTracksViewChanges(true)
    const timeout = setTimeout(() => {
      setTracksViewChanges(false)
    }, 250)
    return () => clearTimeout(timeout)
  }, [active])

  return (
    <Marker
      key={marker.id}
      onPress={onMarkerPress}
      coordinate={marker.coordinate}
      tracksViewChanges={tracksViewChanges}
      zIndex={active ? 99 : 1}
    >
      {active ? (
        <ActiveMarkerSvg width={28} height={28} />
      ) : (
        <MarkerSvg width={20} height={20} />
      )}
    </Marker>
  )
})

const IndexMapContainer = ({ navigation, route }) => {
  const { Layout, Fonts, Colors } = useTheme()
  const _scrollView = useRef(null)
  const _map = useRef(null)
  const [mapState, setMapState] = useState({
    loading: true,
    empty: false,
    camera: null,
  })
  const [markers, setMarkers] = useState([])
  const [mapIndex, setMapIndex] = useState(0)
  const [viewMap, setViewMap] = useState(false)
  const { t } = useTranslation()

  const userLocale = useSelector(state => state.language.userLocale)
  const mapstyles = useSelector(state => state.walks.mapstyles)

  const walk = useSelector(state => {
    if (route.params?.walk) {
      return route.params.walk
    }
    if (state.walks.selectedWalk) {
      return state.walks.fetchWalks.walks.find(
        _walk => _walk.data.id === state.walks.selectedWalk,
      )
    }
  })

  const dateString = useCallback(
    date => {
      try {
        if (Platform.OS === 'android') {
          const parts = date.toString().split(' ')
          return `${parts[2]}. ${parts[1]} ${parts[3]} ${parts[4]}`
        }
        return Intl.DateTimeFormat(userLocale, {
          timeStyle: 'short',
          dateStyle: 'short',
        }).format(date)
      } catch (e) {
        return ''
      }
    },
    [userLocale],
  )

  const animateToCoordinate = useCallback(
    markerCoordinate => {
      if (!markerCoordinate || !_map.current) return
      _map.current
        .getCamera()
        .then(camera => {
          _map.current?.animateCamera(
            {
              ...camera,
              center: markerCoordinate,
              zoom: Math.max(camera?.zoom || 14, 14),
            },
            350,
          )
        })
        .catch(() => {
          _map.current?.animateToRegion(
            {
              latitude: markerCoordinate.latitude,
              longitude: markerCoordinate.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            },
            350,
          )
        })
    },
    [],
  )

  // Subscribe to Firestore markers
  useEffect(() => {
    if (!walk?.data?.id) return
    setMapIndex(0)

    const subscriber = firestore()
      .collection(walk.data.id)
      .orderBy('date', 'desc')
      .onSnapshot(
        markersSnapshot => {
          const _markers = []
          markersSnapshot.forEach((markerRef, index) => {
            const marker = markerRef.data()
            if (!marker || !marker.coordinate) return
            let date = ''
            if (marker.date) {
              try {
                const dateObj = new firestore.Timestamp(
                  marker.date.seconds,
                  marker.date.nanoseconds,
                ).toDate()
                date = dateString(dateObj)
              } catch (e) {
                date = ''
              }
            }
            const uri = marker.image?.uri || ''
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
              id: uri || `marker_${index}`,
            })
          })

          if (_markers.length > 0) {
            setMarkers(_markers)
            setMapState({
              loading: false,
              empty: false,
              camera: {
                center: _markers[0].coordinate,
                pitch: 0,
                heading: 0,
                zoom: 14,
              },
            })
          } else {
            setMarkers([])
            setMapState({ loading: false, empty: true, camera: null })
          }
        },
        error => {
          console.warn('Firestore onSnapshot error:', error)
          setMapState(prev => ({ ...prev, loading: false }))
        },
      )

    return () => subscriber()
  }, [walk?.data?.id, dateString])

  // Animate camera on mapIndex change
  useEffect(() => {
    if (markers.length > 0 && mapIndex >= 0 && markers[mapIndex]) {
      animateToCoordinate(markers[mapIndex].coordinate)
    }
  }, [mapIndex, markers, animateToCoordinate])

  // Handle momentum scroll end for carousel
  const onMomentumScrollEnd = useCallback(
    event => {
      const offsetX = event.nativeEvent.contentOffset.x
      const stride = CARD_WIDTH + CARD_SPACING
      const newIndex = Math.max(
        0,
        Math.min(markers.length - 1, Math.round(offsetX / stride)),
      )
      if (newIndex !== mapIndex) {
        setMapIndex(newIndex)
      }
    },
    [markers.length, mapIndex],
  )

  // Handle marker press to scroll carousel
  const onMarkerPress = useCallback(
    index => {
      if (index >= 0 && index < markers.length) {
        setMapIndex(index)
        _scrollView.current?.scrollToOffset({
          offset: index * (CARD_WIDTH + CARD_SPACING),
          animated: true,
        })
      }
    },
    [markers.length],
  )

  const renderItem = useCallback(
    ({ item }) => (
      <MapImage
        item={item}
        imageWidth={Math.min(Math.round(CARD_WIDTH * 1.5), 1024)}
        CARD_HEIGHT={Dimensions.get('window').height * MapLayout.open}
        CARD_WIDTH={CARD_WIDTH}
        onPress={() => animateToCoordinate(item.coordinate)}
      />
    ),
    [animateToCoordinate],
  )

  const keyExtractor = useCallback(item => 'image_' + item.id, [])

  if (mapState.loading) {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    )
  }

  if (mapState.empty) {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <Text style={Fonts.textLarge}>{t('walk.noPictures')}</Text>
      </View>
    )
  }

  const validMapStyle =
    Array.isArray(mapstyles) && mapstyles.length > 0 ? mapstyles : undefined

  return (
    <View style={Layout.fill}>
      <MapView
        ref={_map}
        style={{
          width: '100%',
          height: `${MapLayout[viewMap ? 'open' : 'closed'] * 100}%`,
        }}
        provider="google"
        initialCamera={mapState.camera || undefined}
        customMapStyle={validMapStyle}
        toolbarEnabled={false}
      >
        {markers.map((marker, index) => (
          <ImageMarker
            key={`marker_${marker.id}`}
            marker={marker}
            active={index === mapIndex}
            onMarkerPress={() => onMarkerPress(index)}
          />
        ))}
      </MapView>

      <FlatList
        ref={_scrollView}
        data={markers}
        style={{ backgroundColor: '#FAFAFA' }}
        renderItem={renderItem}
        getItemLayout={(data, index) => ({
          length: CARD_WIDTH + CARD_SPACING,
          offset: (CARD_WIDTH + CARD_SPACING) * index,
          index,
        })}
        ItemSeparatorComponent={ItemSeparatorComponent}
        removeClippedSubviews={Platform.OS === 'android'}
        keyExtractor={keyExtractor}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        windowSize={3}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        snapToAlignment="start"
        decelerationRate="fast"
        disableIntervalMomentum={true}
        onScrollBeginDrag={() => setViewMap(false)}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollToIndexFailed={info => {
          _scrollView.current?.scrollToOffset({
            offset: info.index * (CARD_WIDTH + CARD_SPACING),
            animated: false,
          })
        }}
      />
    </View>
  )
}

export default IndexMapContainer
