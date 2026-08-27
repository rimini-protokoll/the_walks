import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Player/StartWalk'
import ActivityIndicator from '@/Components/ActivityIndicator'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const debug = false
const PLAYER_HEIGHT = 200

const str_pad_left = (string, pad, length) => {
  return (new Array(length + 1).join(pad) + string).slice(-length)
}

const timeToString = time => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2)
}

const createTrack = (item, id) => ({
  id: id || item.id,
  url: item.srcUri,
  title: item.title,
  artist: 'The Walks',
  artwork: item.iconUri,
})

const CloseButton = ({ onPress }) => {
  const { Fonts, Gutters } = useTheme()
  return (
    <TouchableOpacity
      accessibilityLabel="Close Walk"
      style={[
        Gutters.smallHPadding,
        Gutters.smallVPadding,
        { alignItems: 'flex-end' },
      ]}
      onPress={onPress}
    >
      <Image
        style={Fonts.iconXSmall}
        source={require('Assets/Icons/Close.png')}
      />
    </TouchableOpacity>
  )
}

const VideoControl = () => {
  const { Fonts, Colors, Gutters, Layout, Common } = useTheme()
  const dispatch = useDispatch()
  const paused = useSelector(state => state.player.paused)
  const userPrompt = useSelector(state => state.player.userPrompt)
  const activeWalk = useSelector(state => state.player.activeWalk)
  const seekTo = useSelector(state => state.player.position)
  const walk = useSelector(state => {
    if (activeWalk) {
      return state.walks.fetchWalks.walks.filter(
        _walk => _walk.data.id === state.player.activeWalk,
      )[0]
    }
  })
  const language = useSelector(state => state.language.selectedLanguage)
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
  const progress = useProgress()
  const [setup, setSetup] = useState(true)
  const [selection, setSelection] = useState([])

  const buildWalk = useCallback(
    (_walk, parentId) => {
      dispatch(ChangePlayer.action({ setup: true }))
      // Interleaved queue: [walk0, prompt0, walk1, prompt1, ...]. Every entry gets a
      // unique id (walk segments reuse the same audio/artwork) so track-player's queue
      // bookkeeping stays unambiguous.
      const tracks = [createTrack(_walk, `${_walk.id}#seg0`)]
      const prompts = []

      const prologues = _walk.userPrompt.filter(
        ({ triggerTime }) => triggerTime === 0,
      )
      _walk.userPrompt.forEach((prompt, i) => {
        const isLast = i === _walk.userPrompt.length - 1
        prompts.push({
          ...prompt,
          index: i,
          isLast,
          isPrologue: prompt.triggerTime === 0,
          isLastPrologue: prologues.indexOf(prompt) === prologues.length - 1,
          parentId,
          activeWalk,
        })

        tracks.push(
          createTrack(
            {
              srcUri: prompt.srcUri,
              title: prompt.title,
              iconUri: _walk.iconUri,
            },
            `${_walk.id}#p${i}`,
          ),
        )
        if (!isLast) {
          tracks.push(createTrack(_walk, `${_walk.id}#seg${i + 1}`))
        }
      })

      TrackPlayer.add(tracks).then(async () => {
        // Prompts are stored in redux so the playback service can fire them from native
        // progress events, which keep arriving in the background (see service.js).
        dispatch(ChangePlayer.action({ prompts }))
        await TrackPlayer.play()
        await TrackPlayer.seekTo(0)
        dispatch(ChangePlayer.action({ paused: false, setup: false }))
        setSetup(false)
      })
    },
    [dispatch, activeWalk],
  )

  useEffect(() => {
    const _setup = async () => {
      setSetup(true)
      if ((await TrackPlayer.getQueue()).length) {
        console.log('resetting')
        await TrackPlayer.reset()
        dispatch(ChangePlayer.action({ position: null }))
      }
      if (walk) {
        console.log('useEffect walk', activeWalk)
        if (typeof walk.data.srcUri === 'string') {
          buildWalk(walk.data)
        } else {
          setSelection(walk.data.srcUri)
        }
      }
    }
    _setup()
  }, [buildWalk, activeWalk, walk, dispatch])

  useEffect(() => {
    if (seekTo) {
      // Mute, seek to the resume point, then un-mute once the seek resolves. The old
      // version only un-muted when useProgress() happened to report a position within
      // 1s of the target — which may never arrive on buffering audio, leaving playback
      // silent and the UI stuck on the loading spinner.
      TrackPlayer.setVolume(0)
      TrackPlayer.seekTo(seekTo).then(() => {
        TrackPlayer.play()
        TrackPlayer.setVolume(1)
        dispatch(ChangePlayer.action({ position: null }))
      })
    }
  }, [dispatch, seekTo])

  useEffect(() => {
    paused ? TrackPlayer.pause() : TrackPlayer.play()
  }, [paused])

  const playPause = useCallback(() => {
    dispatch(ChangePlayer.action({ paused: !paused }))
  }, [dispatch, paused])

  const seek = useCallback(
    direction => {
      let position =
        progress.position + 30 * direction * (direction === 1 ? 2 : 1)
      position = Math.min(progress.duration - 1, position)
      TrackPlayer.seekTo(position)
    },
    [progress.duration, progress.position],
  )

  const [state, setState] = useState({
    durationString: '',
    currentTimeString: '',
    progressPercentage: 0,
    bufferedPercentage: 0,
  })

  useEffect(() => {
    if (!userPrompt && progress.duration) {
      setState({
        durationString: timeToString(progress.duration - progress.position),
        currentTimeString: timeToString(progress.position),
        progressPercentage: (progress.position / progress.duration) * 100,
        bufferedPercentage: isLocal
          ? 100
          : (progress.buffered / progress.duration) * 100,
      })
    }

    // console.log('progress', progress)
  }, [progress, userPrompt, isLocal])

  const closeControls = useCallback(() => {
    setSelection(false)
    dispatch(StartWalk.action(false))
  }, [dispatch])

  const playPauseIcon = !paused
    ? require('Assets/Icons/Pause.png')
    : require('Assets/Icons/Play.png')

  if (!activeWalk || userPrompt) {
    return null
  }

  if (selection?.length) {
    return (
      <View
        style={{
          height: PLAYER_HEIGHT,
          backgroundColor: Colors.player,
          ...Gutters.regularPadding,
        }}
      >
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <CloseButton onPress={closeControls} />
        </View>
        <View style={[Layout.center, Layout.row, Layout.fill]}>
          {selection.map((_walk, i) => {
            return (
              <TouchableOpacity
                key={`${walk.data.id}_${i}`}
                style={[
                  Common.button.outline,
                  { marginRight: i == selection.length - 1 ? 0 : 20 },
                ]}
                onPress={() => {
                  buildWalk(_walk.data, walk.data.id)
                  setSelection(false)
                }}
              >
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
      <View
        style={{
          height: PLAYER_HEIGHT,
          backgroundColor: Colors.player,
          ...Gutters.regularPadding,
        }}
      >
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <CloseButton />
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
    <View
      style={{
        backgroundColor: Colors.player,
        ...Gutters.regularPadding,
        height: PLAYER_HEIGHT,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View
          accessible={true}
          accessibilityLabel={walk.data.shortTitle}
          style={[
            { flex: 1 },
            Gutters.smallTMargin,
            Gutters.smallLPadding,
            Gutters.largeBMargin,
          ]}
        >
          <Text numberOfLines={1} style={Fonts.textPlayerTitle}>
            The Walks | {walk.data.shortTitle}
          </Text>
        </View>
        <CloseButton onPress={closeControls} />
      </View>
      <View
        style={{
          position: 'relative',
          width: '100%',
          height: 3,
          backgroundColor: Colors.player,
          justifyContent: 'center',
          ...Gutters.smallHPadding,
        }}
        accessible={true}
        accessibilityValue={{
          text: `${Math.floor(state.progressPercentage)}%`,
        }}
      >
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
        {!debug ? null : (
          <Text style={[Fonts.labelSmall]}>{state.currentTimeString}</Text>
        )}
        <View style={{ flex: 1 }} />
        {!debug ? null : (
          <Text style={[Fonts.labelSmall]}>-{state.durationString}</Text>
        )}
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {!debug ? null : (
          <TouchableOpacity style={styles.iconSize} onPress={() => seek(-1)}>
            <Icon name="play-back" color={Colors.text} size={iconSize} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          accessibilityLabel={paused ? 'Play' : 'Pause'}
          style={styles.iconSize}
          onPress={playPause}
        >
          <Image style={Fonts.iconLarge} source={playPauseIcon} />
        </TouchableOpacity>
        {!debug ? null : (
          <TouchableOpacity style={styles.iconSize} onPress={() => seek(1)}>
            <Icon name="play-forward" color={Colors.text} size={iconSize} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const iconSize = 30
const styles = StyleSheet.create({
  iconSize: {
    padding: 20,
  },
})
export default VideoControl
