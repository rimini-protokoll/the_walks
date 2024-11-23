import GeoLocation from 'react-native-geolocation-service'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { PermissionsAndroid, Platform } from 'react-native'
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'

export const uploadPicture = ({ assets, postAction, onError, walk }) => {
  const getLocationAndUpload = () => {
    GeoLocation.getCurrentPosition(
      async position => {
        const coordinate = new firestore.GeoPoint(
          position.coords.latitude,
          position.coords.longitude,
        )
        const date = firestore.Timestamp.now()

        const fileName = `${position.coords.latitude}_${
          position.coords.longitude
        }_${date.valueOf()}`
        const suffix = assets[0].type.split('/')[1]
        const storagePath = `/images/${walk.data.id}/${fileName}.${suffix}`
        const storageRef = storage().ref(storagePath)
        console.log(assets[0])
        console.log(storagePath)
        postAction()
        try {
          await storageRef.putFile(assets[0].uri)
          const downloadURL = `https://thewalks-cdn.ai-interaction.design${storagePath}`
          await firestore()
            .collection(walk.data.id)
            .doc(fileName)
            .set({
              image: {
                storagePath,
                uri: downloadURL,
                width: assets[0].width,
                height: assets[0].height,
                type: assets[0].type,
              },
              coordinate,
              date,
            })
        } catch (e) {
          onError && onError(e)
        }
      },
      error => {
        console.log(error)
        onError && onError(error)
      },
      { timeout: 10000 },
    )
  }
  permissionsGeoLocation().then(getLocationAndUpload)
}

export const permissionsGeoLocation = async () => {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'The Walks App Location Permission',
        message:
          'The Walks needs to access your geolocation ' +
          'to tag your pictures on the map.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    )
  } else {
    await GeoLocation.requestAuthorization('whenInUse')
  }
}

export const permissionsCamera = async () => {
  if (Platform.OS === 'android') {
    return
  }
  const result = await request(PERMISSIONS.IOS.CAMERA)
  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log(
        'This feature is not available (on this device / in this context)',
      )
      break
    case RESULTS.DENIED:
      console.log(
        'The permission has not been requested / is denied but requestable',
      )
      break
    case RESULTS.LIMITED:
      console.log('The permission is limited: some actions are possible')
      break
    case RESULTS.GRANTED:
      console.log('The permission is granted')
      break
    case RESULTS.BLOCKED:
      console.log('The permission is denied and not requestable anymore')
      break
  }
  return result
}
