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
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Player/StartWalk'
import UserPrompt from '@/Store/Player/UserPrompt'
import { navigate } from '@/Navigators/Root'
import { useTranslation } from 'react-i18next'
import TrackPlayer, {
  RepeatMode,
  useProgress,
  useTrackPlayerEvents,
  getState,
  Event
} from 'react-native-track-player'
import BackgroundService from 'react-native-background-actions'


const sleep = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

const backgroundTask = async (args) => {
  const { navigate, dispatch, t, prompts, walk } = args
  if (!walk) {
    return
  }
  const promptsList = prompts.map(prompt => ({...prompt}))
  console.log('start background loop')
  while (BackgroundService.isRunning()) {
    const state = store.getState()
    const activeWalk = state.player.activeWalk
    const userPrompt = state.player.userPrompt
    if (!activeWalk) {
      // console.log('return, no activeWalk')
      return
    } if (userPrompt) {
      // console.log('continue, userPrompt')
      await sleep()
      continue
    }

    const position = await TrackPlayer.getPosition()
    let prompt = promptsList.filter(
      (prompt) => {
        return (!prompt.completed)
      })
    if (!prompt.length) {
      // console.log('return, no prompt')
      return
    }
    // console.log('prompt length', prompt.length)

    prompt = prompt.filter(
      (prompt) => {
        return (position >= prompt.triggerTime)
      })[0]
    // console.log(prompt)

    if (prompt && !userPrompt) {
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
      await navigate('walk.action')
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
  const { Fonts, Colors, Gutters, NavigationTheme } = useTheme()
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
      )[0].data
    }
  })
  const progress = useProgress()
  const [promptState, setPromptState] = useState([]) 
  const [setup, setSetup] = useState(true)

  useTrackPlayerEvents([Event.PlaybackQueueEnded], () => {
    if (!setup) {
      dispatch(StartWalk.action(false))
    }
  })

  useEffect(() => {
    setSetup(true)
    TrackPlayer.reset()
    TrackPlayer.removeUpcomingTracks().then(() => {
      if (walk) {
        const walkTrack = createTrack(walk)
        const tracks = [walkTrack]
        const prompts = []
        walk.userPrompt.forEach((prompt, i) => {
          prompts.push({
            ...prompt,
            index: i,
            completed: false
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
          taskName: 'Example',
          taskTitle: 'ExampleTask title',
          taskDesc: 'ExampleTask description',
          color: '#ff00ff',
          taskIcon: {
            name: 'ic_launcher',
            type: 'mipmap',
          },
          parameters: {
            prompts,
            walk,
            navigate,
            dispatch,
            t
          },
        };
        TrackPlayer.add(tracks).then(() => {
          BackgroundService.start(backgroundTask, options).then(() => {
            TrackPlayer.play()
            dispatch(ChangePlayer.action({ paused: false }))
            console.log('walk init') 
            setSetup(false)
          })
        })
      }
    })

  }, [walk])

  useEffect(() => {
    if (seekTo) {
      TrackPlayer.seekTo(seekTo).then(() => {
        if (Math.abs(progress.position - seekTo) <= 1) {
          TrackPlayer.setVolume(1)
          dispatch(ChangePlayer.action({ position: null }))
        }
      })
    }
    // TrackPlayer.getQueue().then(queue => console.log(queue))
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
    if (!userPrompt) {
      setState({
        durationString: timeToString(progress.duration - progress.position),
        currentTimeString: timeToString(progress.position),
        progressPercentage: progress.position / progress.duration * 100,
        bufferedPercentage: walk?.srcUri.startsWith('file') ? 100 : progress.buffered / progress.duration * 100
      })
    }
  }, [progress])

  const closeControls = useCallback(() => {
    dispatch(StartWalk.action(false))
  })

  const playPauseIcon = !paused ? require('Assets/Icons/Pause.png') : require('Assets/Icons/Play.png')
  
  if (!activeWalk || userPrompt) return null;

  if (setup || !progress.duration || seekTo) {
    return (
      <View style={{height: 150, backgroundColor: colors.card}}>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <TouchableOpacity
            style={[Gutters.smallRPadding]}
            onPress={closeControls}
          >
            <Icon name="close" size={iconSize} color={Colors.text} />
          </TouchableOpacity>
        </View>
        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={[Gutters.largePadding, {backgroundColor: colors.card}]}
        />
      </View>
    )
  }
  return (
    <View style={{height: 150, backgroundColor: colors.card}}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[{ flex: 1 }, Gutters.smallTMargin, Gutters.smallLPadding]}
          onPress={() => navigate(walk.title)}
        >
          <Text style={Fonts.textButton}>{walk.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Gutters.smallRPadding, Gutters.smallVPadding,{ alignItems: 'flex-end' }]}
          onPress={closeControls}
        >
          <Image
            style={{width:20, height:20}}
            source={require('Assets/Icons/Close.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          { flexDirection: 'row' },
          Gutters.smallVMargin,
          Gutters.smallHMargin,
        ]}
      >
        <Text style={[{ width: 65, textAlign: 'left' }, Fonts.textSmall]}>
          {state.currentTimeString}
        </Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              backgroundColor: Colors.secondary,
              height: 5,
              width: `${state.bufferedPercentage}%`,
            }}
          />
          <View
            style={{
              position: 'absolute',
              left: 0,
              backgroundColor: Colors.primary,
              height: 5,
              width: `${state.progressPercentage}%`,
            }}
          />
          <View
            style={{
              position: 'absolute',
              left: `${state.progressPercentage}%`,
              translateX: -5,
              backgroundColor: Colors.primary,
              height: 10,
              width: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <Text style={[{ width: 70, textAlign: 'left' }, Gutters.smallLPadding, Fonts.textSmall]}>
          -{state.durationString}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity style={styles.iconSize} onPress={() => seek(-1)}>
          <Icon name="play-back" color={Colors.text} size={iconSize} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconSize} onPress={playPause}>
          <Image
            style={{width:40, height:40}}
            source={playPauseIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconSize} onPress={() => seek(1)}>
          <Icon name="play-forward" color={Colors.text} size={iconSize} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const iconSize = 40
const styles = StyleSheet.create({
  iconSize: {
    width: iconSize,
    height: iconSize,
  },
})
export default VideoControl
