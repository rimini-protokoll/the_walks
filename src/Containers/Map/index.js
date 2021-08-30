import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator,
  VirtualizedList
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import RNPickerSelect from 'react-native-picker-select'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'
import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next'
import ChangeWalk from '@/Store/Walks/ChangeWalk'

const AnimatedVirtualizedList = Animated.createAnimatedComponent(VirtualizedList)

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
  const [initial, setInitial] = React.useState(0)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const completed = useSelector(state => state.walks.completed)
  const walks = useSelector(state => {
    return state.walks.fetchWalks.walks.filter(walk => completed.indexOf(walk.data.id) >= 0)
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
                latitudeDelta: 5,
                longitudeDelta: 5,
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

  const dateString = useCallback((date) => {
    let _date = Intl.DateTimeFormat(userLocale, { timeStyle: 'short', dateStyle: 'short' }).format(date)
    return _date
  }, [userLocale])

  //const dateString = (date, locale) => Intl.DateTimeFormat(locale, {dateStyle: 'short', timeStyle: 'short'}).format(new Date(date))
  const userLocale = useSelector(state => state.language.userLocale)

  const animateToCoordinate = markerCoordinate => {

    const coordinate = {...markerCoordinate}
    coordinate.latitude = coordinate.latitude - mapState.region.latitudeDelta / 4

    _map.current.animateToRegion(
      {
        ...coordinate,
        latitudeDelta: Math.min(5, mapState.region.latitudeDelta),
        longitudeDelta: Math.min(5, mapState.region.longitudeDelta),
      },
      350,
    )
  }

  useEffect(() => {
    if (initial < 3 && !mapState.loading && markers.length) {
      animateToCoordinate(markers[0].coordinate)
      setInitial(initial + 1)
    }
  }, [mapState, markers])

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
    
    console.log(markerID, markerCoordinate)
    animateToCoordinate(markerCoordinate)
    const markerIndex = markers.map(marker => marker.id).indexOf(markerID)

    let x = markerIndex * CARD_WIDTH + markerIndex * 20
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET
    }

    _scrollView.current?.scrollToIndex({ index: markerIndex, animated: true })
  }

  const onRegionChange = region => {
    setMapState({ region })
  }

  const renderItem = useCallback(({item}) => (
    <View style={[
      styles.card]}
      key={'image' + item.id}>
      <View style={[Gutters.smallHPadding]}>
        <Text style={[Fonts.textSmall, Fonts.textCenter, Layout.selfStretch]}>
          {item.date}
        </Text>
      </View>
      <FitImage
        style={{
          height: Math.min(CARD_HEIGHT, CARD_WIDTH / (item.image.width / item.image.height)),
          width: CARD_WIDTH
        }}
        resizeMode='contain'
        originalWidth={item.image.width}
        originalHeight={item.image.height}
        source={{ uri: item.image.uri }}
      />
    </View>
  ))

  const getItem = (data, index) => ({
    ...data[index]
  })

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
        provider='google'
        region={mapState.region}
        onRegionChangeComplete={onRegionChange}
        customMapStyle={mapstyles}
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
              key={marker.id}
              icon={require('@/Assets/Icons/Marker.png')}
              onPress={onMarkerPress}
              coordinate={marker.coordinate}
            >
            </Marker>
          )
        })}
      </MapView>
      <View
        style={{position: 'absolute', top: 8, left: 0, width: '100%'}}
      >
      <RNPickerSelect
        onValueChange={(value) => {
          _scrollView.current.scrollToIndex({ index: 0, animated: true })
          navigation.navigate('Pictures', {walk: value})
        }}
        style={pickerSelectStyles}
        placeholder={{}}
        items={walks.map(walk => ({...walk, label: walk.data.shortTitle, value: walk}))}
      >
        <Text style={[Fonts.hyperlink, Fonts.titleRegular, Fonts.textCenter, ]}>{walk.data.shortTitle}</Text>
      </RNPickerSelect>
      </View>
      <AnimatedVirtualizedList
        ref={_scrollView}
        data={markers}
        initialNumToRender={1}
        windowSize={3}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        getItemCount={(data) => data.length}
        getItem={getItem}
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
        onScrollToIndexFailed={(data)=>{
          console.log('onScrollToIndexFailed', data.index)
        }}
      >
      </AnimatedVirtualizedList>
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
});
