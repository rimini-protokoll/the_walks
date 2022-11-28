import { useCallback, useState, useEffect } from 'react'
import { Player, MediaStates, PlaybackCategories } from '@react-native-community/audio-toolkit'

let playerWalk, playerPrompt = {};

const playbackOptions = {
  continuesToPlayInBackground: true,
  autoDestroy: false,
  wakeLock: true,
  mixWithOthers: true,
  category: PlaybackCategories.Playback
}

function usePrompt() {
  const prepare = path => {
    return new Promise((resolve, reject) => {
      stop().then(() => {
        if (!playerPrompt[path]) {
          playerPrompt[path] = new Player(path, playbackOptions)
          playerPrompt[path].looping = true
          playerPrompt[path].volume = 1
        }
        if (playerPrompt[path].state < 1) {
          console.log('preparing', playerPrompt[path])
          playerPrompt[path].prepare(() => {
            console.log('prepared', playerPrompt[path])
            resolve(playerPrompt[path])
          })
        } else {
          console.log('ready', playerPrompt[path])
          resolve(playerPrompt[path])
        }
      })
    })
  }

  const destroy = async () => {
    await stop()
    for (let path in playerPrompt) {
      playerPrompt[path].destroy(() => {
        delete playerPrompt[path]
      })
    }
  }

  const play = async (srcUri) => {
    (await prepare(srcUri)).play()
  }

  const stop = () => {
    if (Object.keys(playerPrompt).length == 0) {
      return new Promise(resolve => resolve())
    }
    return new Promise((resolve, reject) => {
      let stopped = Object.keys(playerPrompt)
      const cb = path => {
        stopped = stopped.filter(s => s !== path)
        if (stopped.length == 0) {
          resolve()
        }
      }
      for (let path in playerPrompt) {
        playerPrompt[path].pause(() => {
          playerPrompt[path].seek(0, () => cb(path))
        })
      }
    })
  }

  return { prepare, play, stop, destroy }
}

const updateProgress = (player, setProgress) => {
  setProgress({
    position: player.currentTime / 1000,
    duration: player.duration / 1000,
    canPlay: player.canPlay
  })
}

function usePlayer() {
  const [progressInterval, setProgressInterval] = useState()
  const [progress, setProgress] = useState({position: -1, duration: -1})

  const start = (path, callback) => {
    playerWalk?.stop()
    playerWalk?.destroy()
    const player = new Player(path, playbackOptions)
    player.volume = 1
    player.looping = false
    player.on('ended', ev => {
      console.log(ev)
      clearInterval(progressInterval)
      player.destroy(() => playerWalk = undefined)
      setProgress({
        ...progress,
        position: progress.duration
      })
    })
    player.play(() => {
      console.log('start', player)
      playerWalk = player
      clearInterval(progressInterval)
      setProgressInterval(setInterval(updateProgress, 200, player, setProgress))
      callback && callback(player)
    })
    return destroy
  }

  const setVolume = volume => {
    if (playerWalk) {
      playerWalk.volume = volume
    }
  }

  const replaceSrc = (path, callback) => {
    const currentTime = playerWalk.currentTime
    start(path, player => {
      player.seek(currentTime)
      callback && callback(player)
    })
  }

  const destroy = () => {
    playerWalk && console.log('playerWalk destroy', playerWalk)
    clearInterval(progressInterval)
    setProgressInterval()
    setProgress({
      position: -1,
      duration: -1,
      canPlay: false
    })
    playerWalk?.destroy(() => {
      playerWalk = undefined
    })
  }

  const play = () => {
    playerWalk?.canPlay && playerWalk.play()
  }

  const pause = () => {
    playerWalk?.pause()
  }

  const seek = direction => {
    let position = playerWalk.currentTime + 30000 * direction * (direction == 1 ? 2 : 1)
    position = Math.min(playerWalk.duration - 1000, position)
    playerWalk?.seek(position)
  }

  const seekTo = position => {
    playerWalk?.seek(position * 1000)
  }

  const getTime = () => {
    return playerWalk ? playerWalk.currentTime / 1000 : -1
  }

  return { start, setVolume, replaceSrc, destroy, play, pause, seek, seekTo, progress, getTime }
}

export { usePlayer, usePrompt }
