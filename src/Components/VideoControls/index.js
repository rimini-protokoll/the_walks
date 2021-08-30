import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Vibration
} from 'react-native'
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
import TrackPlayer, {
  RepeatMode,
  useProgress,
  useTrackPlayerEvents,
  getState,
  Event
} from 'react-native-track-player'
import BackgroundService from 'react-native-background-actions'

const debug = true

const sleep = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

const backgroundTask = async (args) => {
  const { navigate, dispatch, t, prompts, walk, parentId } = args
  if (!walk) {
    return
  }
  const promptsList = prompts.map(prompt => ({...prompt}))
  console.log('start background loop')
  while (BackgroundService.isRunning()) {
    const state = store.getState()
    const activeWalk = state.player.activeWalk
    const userPrompt = state.player.userPrompt
    let prompt = promptsList.filter(
      (prompt) => {
        return (!prompt.completed)
      })
    if (!prompt.length) {
      // console.log('return, no prompt')
      await dispatch(CompleteWalk.action(parentId || activeWalk))
      return
    }
    if (!activeWalk) {
      // console.log('return, no activeWalk')
      return
    } if (userPrompt) {
      // console.log('continue, userPrompt')
      await sleep()
      continue
    }

    const position = await TrackPlayer.getPosition()
    // console.log('prompt length', prompt.length)

    prompt = prompt.filter(
      (prompt) => {
        return (position >= prompt.triggerTime)
      })[0]
    // console.log(prompt)

    if (prompt && !userPrompt) {
      await BackgroundService.updateNotification({taskDesc: prompt.title})
      promptsList[prompt.index].completed = true
      // console.log('prompt', promptsList[prompt.index])
      await TrackPlayer.setRepeatMode(RepeatMode.Track)
      // console.log('repeat mode set')
      await TrackPlayer.skipToNext()
      await TrackPlayer.play()
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
    }
  })
  const language = useSelector(state => state.language.selectedLanguage)
  const isLocal = useSelector(state => {
    if (walk && Object.keys(state.walks.localWalks[language] || {}).indexOf(walk.data.id) > -1) {
      return true
    }
    return false
  })
  const progress = useProgress()
  const [promptState, setPromptState] = useState([]) 
  const [setup, setSetup] = useState(true)
  const [selection, setSelection] = useState([])

  useTrackPlayerEvents([Event.PlaybackQueueEnded], () => {
    if (!setup) {
      dispatch(StartWalk.action(false))
    }
  })

  const buildWalk = useCallback((walk, parentId) => {
    const walkTrack = createTrack(walk)
    //console.log(walkTrack)
    const tracks = [walkTrack]
    const prompts = []

    walk.userPrompt.forEach((prompt, i) => {
      prompts.push({
        ...prompt,
        index: i,
        completed: false,
        isLast: i == walk.userPrompt.length - 1
      })

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
      taskTitle: walk.title,
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
        navigate,
        dispatch,
        t
      },
    };
    TrackPlayer.add(tracks).then(() => {
      BackgroundService.start(backgroundTask, options).then(async () => {

        await TrackPlayer.play()
        await TrackPlayer.seekTo(0)
        dispatch(ChangePlayer.action({ paused: false }))
        console.log('walk init') 
        setSetup(false)
      })
    })
  })

  useEffect(async () => {
    setSetup(true)
    if ((await TrackPlayer.getQueue()).length) {
      console.log('resetting')
      await TrackPlayer.reset()
    }
    if (walk) {
      console.log('useEffect walk', activeWalk)
      if (typeof walk.data.srcUri == 'string') {
        buildWalk(walk.data)
      } else {
        setSelection(walk.data.srcUri)
      }
    }

  }, [walk])

  useEffect(() => {
    if (seekTo) {
      console.log('seekTo+play')

      TrackPlayer.play()
      TrackPlayer.seekTo(seekTo).then(() => {
        if (Math.abs(progress.position - seekTo) <= 1) {
          TrackPlayer.setVolume(1)
          dispatch(ChangePlayer.action({ position: null }))
        }
      })
    }
    //TrackPlayer.getQueue().then(queue => console.log(queue))
  }, [progress])

  useEffect(() => {
    paused ? TrackPlayer.pause() : TrackPlayer.play()
  }, [paused])

  const playPause = useCallback(() => {
    dispatch(ChangePlayer.action({ paused: !paused }))
  })

  const seek = direction => {
    let position = progress.position + 30 * direction * (direction == 1 ? 2 : 1)
    position = Math.min(progress.duration - 1, position)
    TrackPlayer.seekTo(position)
  }

  const [state, setState] = useState({
    durationString: '',
    currentTimeString: '',
    progressPercentage: 0,
    bufferedPercentage: 0
  })

  useEffect(() => {
    if (!userPrompt && progress.duration) {
      setState({
        durationString: timeToString(progress.duration - progress.position),
        currentTimeString: timeToString(progress.position),
        progressPercentage: progress.position / progress.duration * 100,
        bufferedPercentage: isLocal ? 100 : progress.buffered / progress.duration * 100
      })
    }

    console.log(progress)
  }, [progress])

  const closeControls = useCallback(() => {
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

  if (setup || !progress.duration || seekTo) {
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
        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={[Gutters.largePadding]}
        />
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
