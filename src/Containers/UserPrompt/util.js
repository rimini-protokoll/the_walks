import GeoLocation from 'react-native-geolocation-service'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import {
  PermissionsAndroid,
  Platform
} from 'react-native'
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions'


// Generate a Hash from string in Javascript https://stackoverflow.com/a/52171480/3528998
const cyrb53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909)
  h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909)
  return String(4294967296 * (2097151 & h2) + (h1>>>0))
}

export const uploadPicture = ({assets, postAction, onError, walk}) => {
  const getLocationAndUpload = () => {
    GeoLocation.getCurrentPosition(async position => {
      const coordinate = new firestore.GeoPoint(
        position.coords.latitude,
        position.coords.longitude
      )
      const date = firestore.Timestamp.now()

      const fileName = `${position.coords.latitude}_${position.coords.longitude}_${date.valueOf()}`
      const suffix = assets[0].type.split('/')[1]
      const storagePath = `/images/${walk.data.id}/${fileName}.${suffix}`
      const storageRef = storage().ref(storagePath)
      console.log(assets[0])
      console.log(storagePath)
      postAction()
      try {
        await storageRef.putFile(
          assets[0].uri
        )
        const downloadURL = `https://us-central1-thewalks-8f658.cloudfunctions.net/dynamicImages${storagePath}`
        await firestore()
          .collection(walk.data.id)
          .doc(fileName)
          .set({
            image: {
              storagePath,
              uri: downloadURL,
              width: assets[0].width,
              height: assets[0].height,
              type: assets[0].type
            },
            coordinate,
            date
          })
      } catch (e) {
        onError && onError(e)
      }
    },
      (error) => {
        console.log(error)
        onError && onError(error)
      },
      {timeout: 10000}
    )
  }
  permissionsGeoLocation().then(getLocationAndUpload)
}

export const permissionsGeoLocation = async () => {
  if (Platform.OS == 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "The Walks App Location Permission",
        message:
        "The Walks needs to access your geolocation " +
        "to tag your pictures on the map.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      })
  } else {
    await GeoLocation.requestAuthorization('whenInUse')
  }
}

export const permissionsCamera = async () => {
  if (Platform.OS == 'android') {
    return
  }
  const result = await request(PERMISSIONS.IOS.CAMERA)
  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log('This feature is not available (on this device / in this context)');
      break;
    case RESULTS.DENIED:
      console.log('The permission has not been requested / is denied but requestable');
      break;
    case RESULTS.LIMITED:
      console.log('The permission is limited: some actions are possible');
      break;
    case RESULTS.GRANTED:
      console.log('The permission is granted');
      break;
    case RESULTS.BLOCKED:
      console.log('The permission is denied and not requestable anymore');
      break;
  }
  return result
}
