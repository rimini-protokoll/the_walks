import 'react-native-gesture-handler'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Video from 'react-native-video';
import { store, persistor } from '@/Store'
import { ApplicationNavigator } from '@/Navigators'
import './Translations'

const App = () => {
  const audioRef = useRef()
  return (
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
        <Video
          ref={audioRef}
          source={{uri: "https://angry-fermi-c85f46.netlify.app/medias/de01.mp3"}}   // Can be a URL or a local file.
         />
      </PersistGate>
    </Provider>
  )
}

export default App
