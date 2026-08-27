/**
 * This is the code that will run tied to the player.
 *
 * The code here might keep running in the background.
 *
 * You should put everything here that should be tied to the playback but not the UI
 * such as processing media buttons or analytics.
 *
 * Prompt triggering lives here (rather than in a JS timer loop in the UI) so it keeps
 * firing while the app is backgrounded / the screen is locked. Native progress events
 * from react-native-track-player continue to be delivered to the playback service in
 * the background; a `setInterval` loop in the component does not.
 */

import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player'
import { Vibration } from 'react-native'
import { store } from '@/Store'
import { navigateAndReset } from '@/Navigators/Root'
import ChangeWalk from '@/Store/Walks/ChangeWalk'
import UserPrompt from '@/Store/Player/UserPrompt'
import StartWalk from '@/Store/Player/StartWalk'

// Re-entrancy guard: PlaybackProgressUpdated fires roughly every second, and firing a
// prompt is async (skipToNext, play). Set synchronously before the first await so a
// second event cannot double-fire the same prompt during the awaits.
let firing = false

module.exports = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
  TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext())
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  )
  // destroy() was removed in track-player v3+; reset() stops playback, clears the
  // queue and removes the notification.
  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.reset())

  // Prompt triggering.
  //
  // The queue is [walk0, prompt0, walk1, prompt1, ...]: walk segment k is at even
  // index 2k, prompt k at odd index 2k+1. `event.track` is the active queue index, so
  // the index itself tells us which walk segment we are on and which prompt to watch —
  // no separate "completed" bookkeeping is needed. When on walk segment k, once the
  // position reaches prompts[k].triggerTime we skip into (and loop) the prompt track
  // and show its screen.
  TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, async event => {
    if (firing) {
      return
    }
    const { activeWalk, userPrompt, prompts } = store.getState().player
    if (!activeWalk || !prompts || !prompts.length) {
      return
    }
    if (userPrompt) {
      // A prompt is already showing.
      return
    }
    if (event.track == null || event.track % 2 !== 0) {
      // Currently inside a looping prompt track (odd index) — ignore.
      return
    }
    const prompt = prompts[event.track / 2]
    if (!prompt || event.position < prompt.triggerTime) {
      return
    }

    firing = true
    try {
      await TrackPlayer.setRepeatMode(RepeatMode.Track)
      await TrackPlayer.skipToNext()
      TrackPlayer.setVolume(prompt.isPrologue ? 0 : 1)
      await TrackPlayer.play()
      store.dispatch(ChangeWalk.action(activeWalk))
      store.dispatch(UserPrompt.action(prompt))
      navigateAndReset([
        { name: 'Main', state: { routes: [{ name: 'walk.action' }] } },
      ])
      Vibration.vibrate(500)
    } finally {
      firing = false
    }
  })

  // End the walk when the queue finishes (a walk with no prompts, or the audio running
  // out). `setup` guards against the transient this can emit while the queue is being
  // built; a showing prompt means the queue legitimately ended on a looping track.
  TrackPlayer.addEventListener(Event.PlaybackQueueEnded, () => {
    const { activeWalk, userPrompt, setup } = store.getState().player
    if (setup || userPrompt || !activeWalk) {
      return
    }
    store.dispatch(StartWalk.action(false))
  })
}
