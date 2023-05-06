import React, { useRef, useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import FitImage from 'react-native-fit-image'
import { store } from '@/Store'
import StartWalk from '@/Store/Player/StartWalk'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import DownloadWalk from '@/Store/Walks/DownloadWalk'
import Markdown from '@/Components/Markdown'
import { useNetInfo } from '@react-native-community/netinfo'
import ActivityIndicator from '@/Components/ActivityIndicator'

const startWalk = walk => {
  // console.log(walk.data.srcUri[0])
  store.dispatch(StartWalk.action(walk.data.id))
  store.dispatch(
    ChangePlayer.action({
      paused: true,
      title: walk.data.title,
    }),
  )
}

const IndexWalkContainer = ({ navigation, route }) => {
  const netinfo = useNetInfo()
  const scrollViewRef = useRef()
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const walksPurchased = useSelector(state => state.walks.purchased)
  const activeWalkId = useSelector(state => state.player.activeWalk)
  const walk = useSelector(state => {
    let _id
    if (route.params?.walk) {
      _id = route.params.walk.data.id
    } else {
      _id = state.waks.selectedWalk
    }
    let _walk = state.walks.fetchWalks.walks.filter(
      walk => walk.data.id === _id,
    )[0]

    return _walk
  })
  const language = useSelector(state => state.language.selectedLanguage)
  const isDownloading = useSelector(state => state.walks.downloadWalk.loading)
  const isLocal = useSelector(state => {
    if (
      walk &&
      Object.keys(state.walks.localWalks[language] || {}).indexOf(
        walk.data.id,
      ) > -1
    ) {
      return true
    }
    return false
  })
  const hasPicture = useSelector(state => {
    //if(walk && walk.data.userPrompt.length !== 0){
    return true
    //}
    //return false
  })
  const hasCredits = useSelector(state => {
    if (walk && walk.data.credits) {
      return true
    }
    return false
  })

  const completed = useSelector(
    state => walk && state.walks.completed.indexOf(walk.data.id) > -1,
  )

  const [creditsIsShown, setCreditsIsShown] = useState(false)

  useEffect(() => {
    if (!walk && activeWalkId) {
      dispatch(ChangeWalk.action(activeWalkId))
    }
    // dispatch(DownloadWalk.action({walk, language, deleteWalk: true}))
  }, [walk])

  const activation = useCallback(() => {
    navigation.navigate(t('activation'))
  }, [navigation, t])

  if (!walk) {
    return null
  }

  const WalkButtons = () => {
    const buttons = _walk => (
      <>
        <TouchableOpacity
          onPress={() => startWalk(_walk)}
          style={[
            Common.button.outline,
            {
              opacity:
                (!netinfo.isConnected && !isLocal) ||
                isDownloading ||
                activeWalkId
                  ? 0.5
                  : 1,
            },
          ]}
          disabled={
            (!netinfo.isConnected && !isLocal) ||
            isDownloading ||
            !!activeWalkId
          }
        >
          <Text
            style={[Fonts.textButton, Fonts.textCenter, { minWidth: '50%' }]}
          >
            {t('walk.start')}
          </Text>
        </TouchableOpacity>
        {completed && hasPicture ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(`${walk.data.id}-Pictures`, { walk: walk })
            }
            style={[
              Common.button.outline,
              { marginLeft: 20 },
              { opacity: !netinfo.isConnected ? 0.5 : 1 },
            ]}
            disabled={!netinfo.isConnected}
          >
            <Text style={Fonts.textButton}>{t('walk.pictures')}</Text>
          </TouchableOpacity>
        ) : null}
      </>
    )
    return buttons(walk)
  }

  const creditsOpen = !creditsIsShown
    ? require('Assets/Icons/Plus.png')
    : require('Assets/Icons/Minus.png')
  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={[
        Layout.colCenter,
        Gutters.largeBPadding,
        { alignContent: 'flex-start' },
      ]}
    >
      <View style={{ height: 10 }} />
      <View style={{ width: '35%' }}>
        <FitImage
          originalWidth={1024}
          originalHeight={1024}
          source={{ uri: walk.data.iconUri }}
        />
      </View>
      <View style={(Layout.fill, Gutters.smallHPadding)}>
        <View
          accessible={true}
          accessibilityLabel={[
            walk.data.preTitle,
            walk.data.title,
            walk.data.afterTitle,
          ].join(' ')}
        >
          {walk.data.preTitle ? (
            <Text style={[Fonts.titleRegular, Fonts.textCenter]}>
              {walk.data.preTitle}
            </Text>
          ) : null}
          {walk.data.title ? (
            <Text style={[Fonts.titleLarge, Fonts.textCenter]}>
              {walk.data.title}
            </Text>
          ) : null}
          {walk.data.afterTitle ? (
            <Text style={[Fonts.titleRegular, Fonts.textCenter]}>
              {walk.data.afterTitle}
            </Text>
          ) : null}
          {walk.data.afterTitle ? (
            <View style={{ height: Fonts.titleSmall.fontSize / 2 }} />
          ) : null}
        </View>
        <View style={{ height: 10 }} />
        <Markdown markdown={walk.content} />
        <View style={[Gutters.regularVMargin, Layout.row, Layout.center]}>
          <View style={[Layout.center, { width: '33%' }]}>
            <Image
              style={Fonts.iconSmall}
              source={require('Assets/Icons/Dauer.png')}
            />
            <Text style={[Gutters.smallVMargin, Fonts.labelSmall]}>
              {walk.data.duration}
            </Text>
          </View>
          {walk.data.twoPerson ? (
            <View style={[Layout.center, { width: '33%' }]}>
              <Image
                style={Fonts.iconSmall}
                source={require('Assets/Icons/Teilnehmer.png')}
              />
              <Text style={[Gutters.smallVMargin, Fonts.labelSmall]}>
                {t('walk.twoPerson')}
              </Text>
            </View>
          ) : null}
          {walk.data.penPaper ? (
            <View style={[Layout.center, { width: '33%' }]}>
              <Image
                style={Fonts.iconSmall}
                source={require('Assets/Icons/Mitnehmen.png')}
              />
              <Text style={[Gutters.smallVMargin, Fonts.labelSmall]}>
                {t('walk.penPaper')}
              </Text>
            </View>
          ) : null}
        </View>
        <View style={[Gutters.regularVMargin, Layout.row, Layout.center]}>
          {!walksPurchased ? (
            <TouchableOpacity
              onPress={activation}
              style={[
                Common.button.outline,
                { opacity: isDownloading || activeWalkId ? 0.5 : 1 },
              ]}
            >
              <Text style={Fonts.textButton}>{t('activation')}</Text>
            </TouchableOpacity>
          ) : isDownloading ? (
            <ActivityIndicator size="small" color={Colors.primary} />
          ) : (
            <WalkButtons />
          )}
        </View>
      </View>
      {hasCredits ? (
        <View style={[Layout.row, Layout.center]}>
          <TouchableOpacity
            accessibilityLabel={
              creditsIsShown ? 'Close Walk credits' : 'Open Walk credits'
            }
            onPress={() => {
              if (creditsIsShown) {
                setCreditsIsShown(false)
              } else {
                setCreditsIsShown(true)
                setTimeout(() => {
                  scrollViewRef.current.scrollToEnd()
                }, 400)
              }
            }}
            style={[Layout.row, Layout.center]}
          >
            <Text
              style={[
                Gutters.largeVMargin,
                Gutters.smallHMargin,
                Fonts.textItalic,
              ]}
            >
              {t('walk.credits')}
            </Text>
            {!creditsIsShown ? (
              <Image style={Fonts.iconSmall} source={creditsOpen} />
            ) : (
              <Image style={Fonts.iconSmall} source={creditsOpen} />
            )}
          </TouchableOpacity>
        </View>
      ) : null}
      {creditsIsShown && typeof walk.data.credits === 'string' ? (
        <Markdown markdown={walk.data.credits} textCenter={true} />
      ) : null}
    </ScrollView>
  )
}

export default IndexWalkContainer
