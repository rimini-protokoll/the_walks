import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import BackgroundService from 'react-native-background-actions';
import {store} from '@/Store';
import ChangeWalk from '@/Store/Walks/ChangeWalk';
import UserPrompt from '@/Store/Player/UserPrompt';
import {navigateAndReset} from '@/Navigators/Root';
import {Vibration, Platform} from 'react-native';

// Debounce function to prevent multiple rapid executions
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Handle prompt trigger with debouncing
const handlePromptTrigger = debounce(async (nextPrompt, promptsList, walk) => {
  console.log('[PlaybackMonitor] handlePromptTrigger called with prompt:', {
    title: nextPrompt.title,
    triggerTime: nextPrompt.triggerTime,
    index: nextPrompt.index,
  });

  try {
    console.log('[PlaybackMonitor] Updating notification...');
    // Update notification first to keep the service alive
    await BackgroundService.updateNotification({
      taskDesc: nextPrompt.title,
      taskTitle: 'The Walks - Active',
    });

    console.log('[PlaybackMonitor] Marking prompt as completed...');
    // Mark as completed before any other operations
    promptsList[nextPrompt.index].completed = true;

    // Batch audio operations
    await Promise.all([
      TrackPlayer.setRepeatMode(RepeatMode.Track),
      nextPrompt.isPrologue
        ? TrackPlayer.setVolume(0)
        : TrackPlayer.setVolume(1),
    ]);

    // Execute track changes
    await TrackPlayer.skipToNext();
    await TrackPlayer.play();

    // Batch Redux operations
    await Promise.all([
      store.dispatch(ChangeWalk.action(walk.id)),
      store.dispatch(UserPrompt.action(nextPrompt)),
    ]);

    // Navigation and vibration can happen last
    navigateAndReset([
      {
        name: 'Main',
        state: {
          routes: [
            {
              name: 'Walks',
              state: {
                routes: [{name: 'walk.action'}],
                index: 0,
              },
            },
          ],
          index: 0,
        },
      },
    ]);

    Vibration.vibrate(500);
  } catch (error) {
    console.error('Error handling prompt:', error);
  }
}, 250); // 250ms debounce

let lastProcessedPosition = 0;
const POSITION_THRESHOLD = 0.5; // Only process position changes greater than 0.5 seconds

export const setupPlaybackMonitor = async (prompts, walk, t) => {
  console.log(
    '[PlaybackMonitor] Initializing with prompts:',
    prompts.map(p => ({
      title: p.title,
      triggerTime: p.triggerTime,
    })),
  );

  let promptsList = prompts.map(prompt => ({...prompt}));

  // Remove any existing listeners
  // await TrackPlayer.removeEvent([Event.PlaybackProgressUpdated]);

  // Initialize the notification
  await BackgroundService.updateNotification({
    taskDesc: 'Playing...',
    taskTitle: `The Walks - ${walk.title || 'Active'}`,
  });

  console.log('[PlaybackMonitor] Setting up progress listener...');

  // Set up progress listener with optimizations
  TrackPlayer.addEventListener(
    Event.PlaybackProgressUpdated,
    async ({position}) => {
      if (!BackgroundService.isRunning()) {
        console.log(
          '[PlaybackMonitor] Background service not running, skipping update',
        );
        return;
      }

      // Only process if position has changed significantly
      if (Math.abs(position - lastProcessedPosition) < POSITION_THRESHOLD) {
        // console.log('[PlaybackMonitor] Position change too small:', { position, lastProcessedPosition });
        return;
      }

      console.log('[PlaybackMonitor] Processing position update:', {
        position,
        lastProcessedPosition,
        delta: position - lastProcessedPosition,
      });

      lastProcessedPosition = position;

      // Quick state checks before any heavy operations
      const state = store.getState();
      if (!state.player.activeWalk || state.player.userPrompt) {
        console.log(
          '[PlaybackMonitor] Skipping update - no active walk or user prompt exists:',
          {
            activeWalk: state.player.activeWalk,
            hasUserPrompt: !!state.player.userPrompt,
          },
        );
        return;
      }

      // Find next prompt efficiently
      const incompletePrompts = promptsList.filter(p => !p.completed);
      console.log('[PlaybackMonitor] Checking prompts:', {
        position,
        incompletePrompts: incompletePrompts.map(p => ({
          triggerTime: p.triggerTime,
          title: p.title,
          completed: p.completed,
        })),
      });

      const nextPrompt = promptsList.find(
        p => !p.completed && position >= p.triggerTime,
      );
      if (nextPrompt) {
        console.log('[PlaybackMonitor] Found prompt to trigger:', {
          title: nextPrompt.title,
          triggerTime: nextPrompt.triggerTime,
        });
        handlePromptTrigger(nextPrompt, promptsList, walk);
      } else {
        console.log(
          '[PlaybackMonitor] No prompt to trigger at position:',
          position,
        );
      }
    },
  );
};

