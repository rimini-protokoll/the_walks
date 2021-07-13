import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ScrollView,
  View,
  Image,
  ActivityIndicator,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import TrackPlayer, {
  useProgress
} from 'react-native-track-player'
import StartWalk from '@/Store/Player/StartWalk'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import DownloadWalk from '@/Store/Walks/DownloadWalk'
import Markdown from '@/Components/Markdown'

const IndexWalkContainer = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const walksPurchased = useSelector(state => state.walks.purchased)
  const activeWalkId = useSelector(state => state.player.activeWalk)
  const walk = useSelector(state => {
    if (route.params?.walk) {
      return route.params.walk
    }
    let _walk = state.walks.fetchWalks.walks.filter(
      walk => walk.data.id == state.walks.selectedWalk,
    )[0]

    return _walk
  })
  const language = useSelector(state => state.language.selectedLanguage)
  const isDownloading = useSelector(state => state.walks.downloadWalk.loading)

  useEffect(() => {
    if (!walk && activeWalkId) {
      dispatch(ChangeWalk.action(activeWalkId))
    }
  }, [walk])

  const localStorage = useCallback(() => { 
    dispatch(StartWalk.action(false))
    dispatch(DownloadWalk.action({walk, language}))
  }, [walk, language])

  const localStorageDelete = useCallback(() => {
    dispatch(StartWalk.action(false))
    dispatch(DownloadWalk.action({walk, language, deleteWalk: true}))
  }, [walk, language])

  const startWalk = useCallback(() => {
    dispatch(StartWalk.action(walk.data.id))
    dispatch(
      ChangePlayer.action({
        paused: true,
        title: walk.data.title,
      }),
    )
  }, [walk])

  const unsubscribeWalk = navigation.addListener('beforeRemove', event => {
    dispatch(ChangeWalk.action(null))
  })
  
  const activation = useCallback(() => {
    navigation.navigate(t('activation'))
  })

  if (!walk) {
    return null
  }

  return (
    <ScrollView
      contentContainerStyle={[Layout.colCenter, Gutters.regularBPadding, { alignContent: 'flex-start' }]}
    >
      <View style={{height: 50}}/>
      <View style={{ width: '100%', paddingRight: 100, paddingLeft: 100 }}>
        <FitImage
          originalWidth={100}
          originalHeight={100}
          source={{ uri: walk.data.iconUri }}
        />
      </View>
      <View style={(Layout.fill, Gutters.smallHPadding)}>
        <Text style={[Fonts.titleRegular, {
          textAlign: 'center',
        }]}>
          {walk.data.preTitle}
        </Text>
        <Text style={[Fonts.titleLarge, {
          textAlign: 'center',
        }]}>
          {walk.data.title}
        </Text>
        <Markdown
          markdown={walk.content}
        />
        <View
          style={[Gutters.regularVMargin, {
            flexDirection: 'row',
            justifyContent: 'center',
          }]}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text 
              style={[
                Gutters.smallHMargin, 
                Fonts.textItalic
              ]}>{t('credits')}</Text>
            <Image style={{width:20, height:20}}
                source={require('Assets/Icons/Plus.png')}
              />
          </View>
        </View>
        <View
          style={[Gutters.regularVMargin, {
            flexDirection: 'row',
            justifyContent: 'center',
          }]}
        >
          {!walksPurchased ? 
          <TouchableOpacity
            onPress={activation}
            style={[Common.button.outline, {opacity: (isDownloading || activeWalkId) ? .5 : 1}]}
          >
            <Text style={Fonts.textButton}>{t('activation')}</Text>
          </TouchableOpacity>
          : <>
          <TouchableOpacity
            onPress={startWalk}
            style={[Common.button.outline, {opacity: (isDownloading || activeWalkId) ? .5 : 1}]}
            disabled={isDownloading || activeWalkId}
          >
            <Text style={[Fonts.textButton, Fonts.textCenter]}>{t('walk.start')}</Text>
          </TouchableOpacity>
          <View style={{ width: 30 }}></View>
          {walk.data.srcUri.startsWith('https') ? (
            <TouchableOpacity
              disabled={isDownloading || activeWalkId}
              style={{opacity: isDownloading || activeWalkId ? .5 : 1, alignSelf: 'center'}}
              onPress={localStorage}>
              <Image
                style={{width:25, height:25}}
                source={require('Assets/Icons/Download.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled={isDownloading || activeWalkId}
              onPress={localStorageDelete}
              style={{opacity: isDownloading || activeWalkId ? .5 : 1, alignSelf: 'center'}}>
              <Image
                style={{width:25, height:25}}
                source={require('Assets/Icons/Download.png')}
              />
            </TouchableOpacity>
          ) }
          </>}
        </View>
        {isDownloading ? <ActivityIndicator size='large' color={Colors.primary}/> : null }
      </View>
      {/*
      <View style={Layout.fill}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pictures', {walk: walk.data})}
          style={Common.button.outline}
        >
          <Text style={Fonts.textRegular}>{t('walk.pictures')}</Text>
        </TouchableOpacity>
      </View>
      */}
    </ScrollView>
  )
}

export default IndexWalkContainer
