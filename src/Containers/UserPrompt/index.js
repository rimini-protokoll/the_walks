import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import { launchCamera } from 'react-native-image-picker'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Player/StartWalk'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import UserPrompt from '@/Store/Player/UserPrompt'
import { navigateAndReset, navigate } from '@/Navigators/Root'
import { uploadPicture, permissionsGeoLocation, permissionsCamera } from './util'
import BackgroundService from 'react-native-background-actions'
import {useNetInfo} from "@react-native-community/netinfo";
import { usePlayer, usePrompt } from '@/Components/VideoControls/Player'
import DownloadWalk from '@/Store/Walks/DownloadWalk'
import ActivityIndicator from '@/Components/ActivityIndicator'


const IndexUserPromptContainer = ({ navigation }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const netinfo = useNetInfo()
  const PlayerWalk = usePlayer()
  const PlayerPrompt = usePrompt()
  const language = useSelector(state => state.language.selectedLanguage)
  const isDownloading = useSelector(state => state.walks.downloadWalk.loading)
  const [isLoading, setIsLoading] = useState(false)

  const walk = useSelector(state => {
    if (state.player.activeWalk) {
      return state.walks.fetchWalks.walks.filter(
        walk => walk.data.id == state.player.activeWalk,
      )[0]
    }
  })
  const userPrompt = useSelector(state => state.player.userPrompt)
  const picture = action => {
    const postAction = actions[action.postAction] || actions['continue']
    setIsLoading(true)
    launchCamera({
      mediaType: 'photo',
      maxWidth: 2560,
      maxHeight: 2560,
      quality: .7
    }, ({didCancel, errorCode, errorMessage, assets}) => {
      if (didCancel) {
        setIsLoading(false)
      } else if (errorCode || !assets) {
        setIsLoading(false)
        postAction()
      } else {
        uploadPicture({
          assets,
          postAction: () => {setIsLoading(false); postAction()},
          onError: () => {setIsLoading(false); postAction()},
          walk
        })
      }
    })
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({description: ' '}).catch(() => {})
    }
  }
  const resumeWalk = async () => {
    PlayerWalk.seekTo(userPrompt.triggerTime)
    PlayerPrompt.stop()
    PlayerWalk.play()
  }
  const continueWalk = useCallback(() => {
    resumeWalk()
    dispatch(UserPrompt.action(false))
    setIsLoading(false)
    if (userPrompt.isLast) {
      console.log('userPrompt.isLast')
      dispatch(StartWalk.action(false))
    }
    // dispatch(ChangeWalk.action(walk.data.id))
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          state: {
            routes: [
              { name: 'The Walks' },
              { name: walk.data.id, params: { walk } }
            ]
          }
        }
      ]
    })
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({description: ' '})
    }
  }, [walk])

  const map = () => {
    dispatch(UserPrompt.action(false))
    PlayerPrompt.destroy()
    if (userPrompt.isLast) {
      dispatch(StartWalk.action(false))
    }

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          state: {
            routes: [
              { name: 'The Walks' },
              { name: walk.data.id, params: { walk } },
              { name: 'Pictures', params: { walk } }
            ]
          }
        }
      ]
    })
    if (BackgroundService.isRunning()) {
      BackgroundService.updateNotification({taskDesc: ' '})
    }
  }
  const actions = {
    continue: continueWalk,
    picture,
    map,
    async geoLocation() {
      setIsLoading(true)
      await permissionsGeoLocation()
      continueWalk()
    },
    async camera() {
      setIsLoading(true)
      await permissionsCamera()
      continueWalk()
    },
    downloadWalk() {
      dispatch(DownloadWalk.action({walk, language, callback: localWalk => {
        let srcUri
        if (typeof localWalk.srcUri == 'string') {
          srcUri = localWalk.srcUri
        } else {
          srcUri = localWalk.srcUri[localWalk.srcUri.map(({data}) => data.id).indexOf(userPrompt.walkId)]
        }
        PlayerWalk.replaceSrc(srcUri, continueWalk)
      }}))
    }
  }

  if (!walk || !userPrompt) {
    return null
  }
  return (
    <ScrollView contentContainerStyle={[Layout.fill, Layout.rowCenter]}>
      <View style={[Layout.fill, Gutters.smallHPadding]}>
        <Text
          style={[Fonts.textRegular, Gutters.largeVPadding, Fonts.textCenter]}
        >
          {userPrompt.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          {isDownloading ? (
            <ActivityIndicator
              size="large"
              color={Colors.primary}
              style={[Gutters.largePadding]}
            />
          ) : userPrompt.actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => actions[action.action](action)}
              style={[Common.button.outline, {opacity: isLoading || (!netinfo.isConnected && action.action == 'map') ? .5 : 1 }]}
              disabled={isLoading || (!netinfo.isConnected && action.action == 'map')}
            >
              <Text style={[Fonts.textButton, Fonts.textCenter]}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default IndexUserPromptContainer
