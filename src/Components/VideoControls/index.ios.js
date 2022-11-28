import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Vibration,
  Platform
} from 'react-native'
import ActivityIndicator from '@/Components/ActivityIndicator'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import { store } from '@/Store'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import CompleteWalk from '@/Store/Walks/CompleteWalk'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Player/StartWalk'
import UserPrompt from '@/Store/Player/UserPrompt'
import { navigate, navigateAndReset } from '@/Navigators/Root'
import { useTranslation } from 'react-i18next'
import BackgroundService from 'react-native-background-actions'
import { usePlayer, usePrompt } from './Player'
import { playbackOptions } from './Player'
import { Player } from '@react-native-community/audio-toolkit'
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions'

const debug = true

const sleep = async () => {
  await new Promise((resolve) => setTimeout(resolve, 250))
}

const backgroundTask = async (args) => {
  const {
    navigate,
    dispatch,
    t,
    prompts,
    walk,
    isLocal,
    parentId,
    PlayerWalk,
    PlayerPrompt
  } = args
  if (!walk) {
    return
  }
  const hasGeoLocationPermission = (await check(Platform.OS == 'android' ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)) == RESULTS.GRANTED
  const hasCameraPermission = Platform.OS == 'android' ? true : (await check(PERMISSIONS.IOS.CAMERA)) == RESULTS.GRANTED
  let promptsList = await Promise.all(
    prompts.map(async prompt => ({
      ...prompt,
      completed: !prompt.actions.map(({action}) => {
        switch (action) {
          case 'geoLocation':
            return !hasGeoLocationPermission
          case 'camera':
            return !hasCameraPermission
          case 'downloadWalk':
            return !isLocal
          default:
            return true
        }
      }).every(x => x)
    }))
  )
  console.log('start background loop')
  while (BackgroundService.isRunning()) {
    const state = store.getState()
    const activeWalk = state.player.activeWalk
    const userPrompt = state.player.userPrompt
    let prompt = promptsList.filter(
      (prompt) => {
        return (!prompt.completed)
      })
    const isPrologue = prompt.filter(({triggerTime}) => triggerTime == 0).length > 0
    if (isPrologue) {
      PlayerWalk.setVolume(0)
    } else {
      PlayerWalk.setVolume(1)
    }


    if (!prompt.length) {
      await dispatch(CompleteWalk.action(parentId || activeWalk))
      return
    }
    if (!activeWalk) {
      return
    } if (userPrompt) {
      await sleep()
      continue
    }

    const position = PlayerWalk.getTime()

    let promptPrepare = prompt.filter(
      (prompt) => {
        return position >= prompt.triggerTime - 10
      })[0]

    prompt = prompt.filter(
      (prompt) => {
        return (position >= prompt.triggerTime)
      })[0]

    if(promptPrepare && !userPrompt && !promptsList[promptPrepare.index].prepare) {
      promptsList[promptPrepare.index].prepare = true
      PlayerPrompt.prepare(promptsList[promptPrepare.index].srcUri)
    }

    if (prompt && !userPrompt) {
      promptsList[prompt.index].prepare = false
      promptsList[prompt.index].completed = true
      PlayerWalk.pause()
      PlayerPrompt.play(promptsList[prompt.index].srcUri)
      // console.log('skip to next')
      await store.dispatch(ChangeWalk.action(walk.id))
      await store.dispatch(UserPrompt.action(prompt))
      // console.log('UserPrompt action')
      navigateAndReset([{name: 'Main', state: {routes: [{name: 'walk.action'}]}}])
      // console.log('navigate', 'walk.action')
      Vibration.vibrate(500)
    }
    await sleep()
  }
}

const str_pad_left = (string, pad, length) => {
  return (new Array(length + 1).join(pad) + string).slice(-length)
}

const timeToString = time => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2)
}

const createTrack = item => ({
  id: item.id,
  url: item.srcUri,
  title: item.title,
  artist: 'The Walks',
  artwork: item.iconUri
})


const VideoControl = () => {
  const { Fonts, Colors, Gutters, NavigationTheme, Layout, Common } = useTheme()
  const { colors } = NavigationTheme
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const paused = useSelector(state => state.player.paused)
  const userPrompt = useSelector(state => state.player.userPrompt)
  const activeWalk = useSelector(state => state.player.activeWalk)
  const seekTo = useSelector(state => state.player.position)
  const walk = useSelector(state => {
    if (activeWalk) {
      return state.walks.fetchWalks.walks.filter(
        walk => walk.data.id == state.player.activeWalk,
      )[0]
    } else {
      PlayerWalk?.destroy()
      PlayerPrompt?.destroy()
    }
  })
  const language = useSelector(state => state.language.selectedLanguage)
  const isLocal = useSelector(state => {
    if (walk && Object.keys(state.walks.localWalks[language] || {}).indexOf(walk.data.id) > -1) {
      return true
    }
    return false
  })
  const [promptState, setPromptState] = useState([]) 
  const [setup, setSetup] = useState(true)
  const [selection, setSelection] = useState([])
  const PlayerWalk = usePlayer()
  const PlayerPrompt = usePrompt()

  const buildWalk = useCallback((walk, parentId) => {
    const walkTrack = createTrack(walk)
    const tracks = [walkTrack]
    const prompts = []

    walk.userPrompt.forEach((prompt, i) => {
      prompts.push({
        ...prompt,
        index: i,
        completed: false,
        prepare: false,
        isLast: i == walk.userPrompt.length - 1,
        walkId: walk.id,
        parentId,
        isInitPrompt: walk.userPrompt.filter(({triggerTime}) => triggerTime == 0).slice(0, -1).indexOf(prompt) !== -1
      })
      // console.log(prompts)

      tracks.push(createTrack({
        id: walk.id + i,
        srcUri: prompt.srcUri,
        title: prompt.title,
        iconUri: walk.iconUri
      }))
      tracks.push(walkTrack)
    })
    setPromptState(prompts)

    const options = {
      taskName: 'The Walks',
      taskTitle: walk.shortTitle || walk.title,
      taskDesc: '',
      color: '#f00000',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      linkingURI: 'thewalks://notification.click',
      parameters: {
        prompts,
        parentId,
        walk,
        isLocal,
        navigate,
        dispatch,
        t,
        PlayerWalk,
        PlayerPrompt
      },
    };
    BackgroundService.start(backgroundTask, options).then(async () => {
      PlayerWalk.start(tracks[0].url)
      dispatch(ChangePlayer.action({ paused: false }))
      console.log('walk init') 
      setSetup(false)
    })
    //  })
  })

  useEffect(async () => {
    setSetup(true)
    if (walk) {
      // console.log('useEffect walk', activeWalk)
      if (typeof walk.data.srcUri == 'string') {
        buildWalk(walk.data)
      } else {
        setSelection(walk.data.srcUri)
      }
    }
  }, [walk])

  const playPause = useCallback(() => {
    paused ? PlayerWalk.play() : PlayerWalk.pause()
    dispatch(ChangePlayer.action({ paused: !paused }))
  }, [PlayerWalk])

  const seek = direction => {
    PlayerWalk.seek(direction)
  }

  const [state, setState] = useState({
    durationString: '',
    currentTimeString: '',
    progressPercentage: 0,
    bufferedPercentage: 0
  })

  useEffect(() => {
    if (!userPrompt && PlayerWalk.progress.duration != -1) {
      setState({
        durationString: timeToString(PlayerWalk.progress.duration - PlayerWalk.progress.position),
        currentTimeString: timeToString(PlayerWalk.progress.position),
        progressPercentage: PlayerWalk.progress.position / PlayerWalk.progress.duration * 100,
        bufferedPercentage: isLocal ? 100 : 0
      })
    }
  }, [PlayerWalk.progress, userPrompt, isLocal])

  const closeControls = useCallback(() => {
    PlayerPrompt.destroy()
    PlayerWalk.destroy()
    setSelection(false)
    dispatch(StartWalk.action(false))
  })

  const playPauseIcon = !paused ? require('Assets/Icons/Pause.png') : require('Assets/Icons/Play.png')

  if (!activeWalk || userPrompt) return null;

  if (selection?.length) {
    return (
      <View style={{height: 200, backgroundColor: Colors.player, ...Gutters.regularPadding}}>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <TouchableOpacity
            style={[Gutters.smallRPadding, Gutters.smallVPadding,{ alignItems: 'flex-end' }]}
            onPress={closeControls}
          >
            <Image
              style={Fonts.iconXSmall}
              source={require('Assets/Icons/Close.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[Layout.center, Layout.row, Layout.fill]}>
          {selection.map((_walk, i) => {
            return (
              <TouchableOpacity
                key={`${walk.data.id}_${i}`}
                style={[Common.button.outline, {marginRight: i == selection.length - 1 ? 0 : 20}]} onPress={() => {buildWalk(_walk.data, walk.data.id); setSelection(false)}}>
                <Text style={Fonts.textButton}>{_walk.data.shortTitle}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }

  if (setup || PlayerWalk.progress.duration == -1 || !PlayerWalk.progress.canPlay) {
    return (
      <View style={{height: 150, backgroundColor: Colors.player, ...Gutters.regularPadding}}>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <TouchableOpacity
            style={[Gutters.smallRPadding, Gutters.smallVPadding,{ alignItems: 'flex-end' }]}
            onPress={closeControls}
          >
            <Image
              style={Fonts.iconXSmall}
              source={require('Assets/Icons/Close.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[Gutters.largePadding]}>
          <ActivityIndicator/>
        </View>
      </View>
    )
  }
  return (
    <View style={{height: 150, backgroundColor: Colors.player, ...Gutters.regularPadding}}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[{ flex: 1 }, Gutters.smallTMargin, Gutters.smallLPadding, Gutters.largeBMargin]}
          onPress={() => navigate(walk.data.id, {walk})}
        >
          <Text style={Fonts.textPlayerTitle}>The Walks | {walk.data.shortTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Gutters.smallHPadding, Gutters.smallVPadding,{ alignItems: 'flex-end' }]}
          onPress={closeControls}
        >
          <Image
            style={Fonts.iconXSmall}
            source={require('Assets/Icons/Close.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', ...Gutters.smallHMargin }}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            backgroundColor: Colors.secondary,
            height: 3,
            width: `${state.bufferedPercentage}%`,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 0,
            backgroundColor: Colors.tertiary,
            height: 3,
            width: `${state.progressPercentage}%`,
          }}
        />
      </View>
      <View
        style={[
          { flexDirection: 'row' },
          Gutters.smallVMargin,
          Gutters.smallHMargin,
        ]}
      >
        {!debug ? null :
        <Text style={[Fonts.labelSmall]}>
          {state.currentTimeString}
        </Text>}
        <View style={{flex: 1}}/>
        {!debug ? null :
        <Text style={[Fonts.labelSmall]}>
          -{state.durationString}
        </Text>}
      </View>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30
        }}
      >
        {!debug ? null :
        <TouchableOpacity style={styles.iconSize} onPress={() => seek(-1)}>
          <Icon name="play-back" color={Colors.text} size={iconSize} />
        </TouchableOpacity>}
        <TouchableOpacity style={styles.iconSize} onPress={playPause}>
          <Image
            style={Fonts.iconLarge}
            source={playPauseIcon}
          />
        </TouchableOpacity>
        {!debug ? null :
        <TouchableOpacity style={styles.iconSize} onPress={() => seek(1)}>
          <Icon name="play-forward" color={Colors.text} size={iconSize} />
        </TouchableOpacity>}
      </View>
    </View>
  )
}

const iconSize = 30
const styles = StyleSheet.create({
  iconSize: {
    width: iconSize,
    height: iconSize,
  },
})
export default VideoControl
