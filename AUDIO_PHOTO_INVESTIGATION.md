# The Walks — Audio & Photo Failure Investigation

**Date:** 2026-08-27
**Scope:** iOS field reports of (1) app freezing when taking a photo and (2) audio tracks
missing / wrong / boundaries skipped, varying by language.

Both reports trace to the same architectural weakness (prompt triggering runs on a
JavaScript polling loop that iOS suspends) plus a badly outdated audio library
(`react-native-track-player@3.2.0`).

---

## Field reports

> the app froze for a few participants during the experience, when they had to take a
> photo, so three couples had to restart the walk.

> ich hab heute festgestellt, dass die WALKS-Stücke nicht mehr wie ursprünglich
> eingestellt, abgespielt werden: Tracks fehlen, teils sind es die falschen, weil
> Trackgrenzen übersprungen werden; je nach Sprache sind's unterschiedliche Bugs gewesen.

---

## How the player is built today

A walk = one main audio track (`srcUri`) plus a set of `userPrompt` entries, each with a
`triggerTime` (position in the walk audio) and its own prompt audio (`srcUri`).

`buildWalk` (`src/Components/VideoControls/index.js:175-242`) constructs the queue by
**interleaving the same walk audio between prompts**:

```
[walk, prompt0, walk, prompt1, walk, …, promptN]
```

Prompts are fired by `backgroundTask` (`src/Components/VideoControls/index.js:38-97`) — a
`while` loop running under `react-native-background-actions` that polls
`TrackPlayer.getPosition()` every 500 ms and, when position ≥ a prompt's `triggerTime`,
sets `RepeatMode.Track` + `skipToNext()` to jump into (and loop) the prompt audio, then
shows the prompt UI. On "continue", `resumeWalk` (`src/Containers/UserPrompt/index.js:76-93`)
sets `RepeatMode.Off`, `skipToNext()` back to the walk segment, and seeks to `triggerTime`.

During normal playback `RepeatMode` is `Off`. The whole mechanism only works if the JS poll
loop fires *before* the walk track reaches its natural end.

---

## Symptom 1 — tracks missing / wrong / boundaries skipped (per language)

Two independent causes produce the identical symptom, which is why it's erratic.

### Cause A — prompt triggering runs on a JS polling loop that iOS suspends

- `react-native-background-actions`' own README states its iOS mechanism
  (`beginBackgroundTaskWithName`) **"won't keep your app in the background forever"** — iOS
  grants a short window then suspends the JS thread (it exposes an `'expiration'` event for
  exactly this).
- The walk UX is "put the phone in your pocket and walk" → screen locks → JS suspended.
  Native audio keeps playing (`UIBackgroundModes: audio` is set in
  `ios/TheWalks/Info.plist` ✓), but the poll loop is frozen.
- The walk track then reaches its end with `RepeatMode.Off` → **TrackPlayer auto-advances
  through the interleaved queue with no prompt UI** — playing prompt audio out of context,
  then the next walk segment, etc. → "tracks missing / wrong / boundaries skipped".
- Each language ships different audio files → different durations and `triggerTime`s → the
  overrun lands on different tracks → **different bugs per language**. That per-language
  signature is the fingerprint of a timing race, not a data error.
- Modern iOS suspends background JS more aggressively, so it surfaces now.

**Confirmed by primary sources:**
- react-native-background-actions README (iOS "WARNING" + `expiration` sections):
  https://github.com/Rapsssito/react-native-background-actions
- react-native-background-timer (the lib background-actions' iOS side forks) exists purely
  because normal timers stop when backgrounded: https://github.com/ocetnik/react-native-background-timer
- track-player Background Mode doc: "while your app is in background, your UI might be
  unmounted by React Native. Event listeners added in the playback service will continue to
  receive events." — i.e. native events are the right tool, JS timers are not:
  https://github.com/doublesymmetry/react-native-track-player/blob/v4/docs/docs/basics/background-mode.md

### Cause B — react-native-track-player 3.2.0 has confirmed iOS queue/repeat bugs

3.2.0 (Sept 2022) predates iOS 16/17/18 and has confirmed defects fixed only in v4:

- **`RepeatMode.Track` broken on iOS** — `skipToNext()` while a track is repeating gets the
  player *stuck*; a later `reset()` crashes. **This app calls exactly that pattern**
  (`index.js:76-78`, `UserPrompt/index.js:78-84`). Fixed in 4.0.0-rc06 / rc08.
  https://github.com/doublesymmetry/react-native-track-player/issues/1433
- **Queue advancing to wrong track / current-item not updated** — fixed in 4.0.0-rc02.
- **`PlaybackQueueEnded` race** (this app ends a walk on that event, `index.js:169-173`) —
  fixed in 4.0.0-rc07.
- **Audio-session activation bugs** affecting background reliability — fixed across
  4.0.0-rc08 / rc09.

CHANGELOG: https://github.com/doublesymmetry/react-native-track-player/blob/v4/CHANGELOG.md

---

## Symptom 2 — app freezes at "take a photo"

`picture()` (`src/Containers/UserPrompt/index.js:45-74`) calls `launchCamera` from
**`react-native-image-picker@4.10.0`** — an old fork (`git+github.com/wuzhengu/...`) that
predates iOS 17/18. At that moment:

- TrackPlayer is **looping the prompt audio under the buggy `RepeatMode.Track`** with the
  AVAudioSession active, and
- the background poll loop is still spinning.

The camera claims the AVAudioSession for mic/capture. Track-player's confirmed issue #1429
("audio stops when camera opened on iOS") shows the camera-vs-audio-session contention is
real. There is **no confirmed upstream image-picker bug** proving "active audio freezes the
camera", so this is app-specific session contention (no code pauses audio or yields the
session before `launchCamera`), aggravated by the outdated picker and 3.2.0's
`RepeatMode.Track` instability on resume (`skipToNext` while repeating → stuck, per #1433).

Note: the confirmed iOS-18 picker *freeze* (image-picker #2312) is a Simulator /
library-picker issue, not this — the field freeze is attributed to session contention + old
libs, not that bug.

- https://github.com/doublesymmetry/react-native-track-player/issues/1429
- https://github.com/react-native-image-picker/react-native-image-picker/issues/2312

---

## Other real bugs found in the code

1. **Duplicate track IDs** — `walkTrack` (id = `walk.id`) is pushed into the queue multiple
   times with the same id/object (`index.js:179,207`). TrackPlayer expects unique track
   identity; this makes skip/seek bookkeeping unreliable.
2. **Racy resume/seek effect** (`index.js:264-278`) — after a prompt, un-muting and clearing
   the seek flag depend on `useProgress()`'s `progress.position` landing within 1 s of
   `seekTo`. On streamed/buffering audio it can miss, leaving playback **silent (volume 0)
   and stuck on the loading spinner** (`index.js:368`) — reads as a freeze. It also re-fires
   `play()/seekTo()` on every progress tick while pending.
3. **Deprecated/removed APIs** — `getState` imported (`index.js:27`, unused),
   `TrackPlayer.getCurrentTrack()` (`Application.js:29`), `TrackPlayer.destroy()`
   (`service.js`). Legacy in 3.2, renamed/removed in 4.x — must be migrated on upgrade.
4. **Typos silently disabling options** — `notificationCapabilites` / `compactCapabilites`
   (missing "i") in `Application.js:39,44` → wrong lock-screen controls.
5. **Dead code** — `src/Components/VideoControls/Player.ios.js` uses
   `@react-native-community/audio-toolkit`, which isn't even a dependency. Safe to delete.

---

## Recommended remediation

The upgrade is corroborated as the fix. **4.1.2 is the last free/maintained
`react-native-track-player`** (v5 is renamed `@rntp/player` + commercially licensed and
requires the New Architecture). RN 0.75.4 satisfies 4.1.2's peer deps (RN ≥ 0.60; iOS
target 11.0; Swift 4.2; SwiftAudioEx 1.1.0).

1. **Upgrade `react-native-track-player` 3.2.0 → 4.1.2.** Fixes the confirmed
   `RepeatMode.Track`, queue/current-item, `PlaybackQueueEnded`, and session bugs. Requires
   migrating the deprecated APIs above.
2. **Replace the JS polling loop with native events.** Detect `triggerTime` via
   **`PlaybackProgressUpdated`** (set `progressUpdateEventInterval`) registered in the
   **playback service** (`service.js`) — these fire from native even when iOS has unmounted
   the JS UI, which is where the current design fails. Caveat (#2059): under
   `RepeatMode.Track` on iOS, track-change events don't fire — use progress /
   `PlaybackQueueEnded` for loop detection, not `PlaybackActiveTrackChanged`. This also lets
   us drop `react-native-background-actions` from the critical path.
3. **Fix the camera flow** — pause TrackPlayer and yield the audio session (mixable
   category / deactivate) *before* `launchCamera`, restore after; upgrade
   `react-native-image-picker` off the 4.10.0 fork to a current 7.x/8.x release.
4. **Clean-ups** — unique track ids, harden the resume/seek effect, delete dead
   `Player.ios.js`, fix the option typos.

Items 1–2 are what actually stop the couples' walks from breaking; item 3 stops the freeze.

- Events API: https://github.com/doublesymmetry/react-native-track-player/blob/v4/docs/docs/api/events.md
- iOS RepeatMode.Track event caveat: https://github.com/doublesymmetry/react-native-track-player/issues/2059
