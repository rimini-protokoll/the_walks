import GeoLocation from 'react-native-geolocation-service'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { PermissionsAndroid, Platform } from 'react-native'

// Generate a Hash from string in Javascript https://stackoverflow.com/a/52171480/3528998
const cyrb53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return String(4294967296 * (2097151 & h2) + (h1 >>> 0))
}

export const uploadPicture = ({ response, postAction, walk }) => {
  const { didCancel, errorCode, errorMessage, assets } = response
  if (didCancel || errorCode || !assets) {
    return
  }
  const getLocationAndUpload = () => {
    GeoLocation.getCurrentPosition(
      position => {
        console.log(position, didCancel, errorCode, errorMessage)
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
        storageRef.putFile(assets[0].uri).then(async () => {
          const downloadURL = await storageRef.getDownloadURL()
          firestore()
            .collection(walk.data.id)
            .doc(fileName)
            .set({
              image: {
                uri: downloadURL,
                width: assets[0].width,
                height: assets[0].height,
                type: assets[0].type,
              },
              coordinate,
              date,
            })
        })
        postAction()
      },
      error => {
        console.log(error)
      },
      { timeout: 10000 },
    )
  }
  if (Platform.OS == 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'The Walks App Location Permission',
        message:
          'The Walks needs to access your geolocation' +
          'to tag your pictures on the map.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    ).then(getLocationAndUpload)
  } else {
    GeoLocation.requestAuthorization('whenInUse').then(getLocationAndUpload)
  }
}
