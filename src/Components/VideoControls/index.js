import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'
import ChangePlayer from '@/Store/Player/ChangePlayer'
import StartWalk from '@/Store/Walks/StartWalk'
import UserPrompt from '@/Store/Walks/UserPrompt'
import SeekPlayer from '@/Store/Player/Seek'
import { navigate } from '@/Navigators/Root'
import MusicControl from 'react-native-music-control'
import { useTranslation } from 'react-i18next'

const str_pad_left = (string, pad, length) => {
	return (new Array(length + 1).join(pad) + string).slice(-length)
}

const timeToString = time => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.floor(time % 60)
	return str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2)
}

const VideoControl = ({ isPaused }) => {
	const { Fonts, Colors, Gutters } = useTheme()
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const paused = useSelector(state => state.player.paused)
	const progress = useSelector(state => state.player.progress)
	const duration = useSelector(state => state.player.duration)
	const durationRemaining = useSelector(state => state.player.duration - state.player.currentTime)
	const currentTime = useSelector(state => state.player.currentTime)
	const title = useSelector(state => state.player.title)
	const userPrompt = useSelector(state => state.walks.userPrompt)
	const walk = useSelector(state => {
		const walk = state.walks.fetchWalks.walks.filter(
			walk => walk.id == state.walks.activeWalk,
		)[0]
		return walk
	})

	useEffect(() => {
		const prompts = walk.userPrompt.map((prompt, index) => ({...prompt, index}))
		const prompt = prompts.filter(
			(prompt, index) => {
				return currentTime >= prompt.triggerTime && !prompt.completed
		})[0]
		
		if (prompt) {
			dispatch(UserPrompt.action(prompt))
			dispatch(ChangePlayer.action({ paused: true }))
			navigate(t('walk.action'))
		}
	}, [progress])

	MusicControl.enableControl('play', true)

	const playPause = () => {
		dispatch(ChangePlayer.action({ paused: !paused }))

		MusicControl.setNowPlaying({
			title: title,
			artwork: walk.iconUri,
			artist: 'Rimini Protokoll',
			album: 'The Walks',
			genre: 'Audiowalk',
			duration: duration || 0,
		})
		//MusicControl.resetNowPlaying()
	}

	const seek = direction => {
		dispatch(SeekPlayer.action(currentTime + 15 * direction))
	}

	const durationString = timeToString(durationRemaining)
	const currentTimeString = timeToString(currentTime)
	if (userPrompt) return null;

	return (
		<View style={Gutters.largeBPadding}>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					style={[{ flex: 1 }, Gutters.smallTMargin, Gutters.smallLPadding]}
					onPress={() => navigate(title)}
				>
					<Text style={Fonts.textRegular}>{title}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[Gutters.smallRPadding, { alignItems: 'flex-end' }]}
					onPress={() => dispatch(StartWalk.action(false))}
				>
					<Icon name="close" size={iconSize} color={Colors.text} />
				</TouchableOpacity>
			</View>
			<View
				style={[
					{ flexDirection: 'row' },
					Gutters.smallVMargin,
					Gutters.smallHMargin,
				]}
			>
				<Text style={[{ width: 60, textAlign: 'center' }, Fonts.textSmall]}>
					{currentTimeString}
				</Text>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<View
						style={{
							backgroundColor: Colors.primary,
							height: 5,
							width: `${progress}%`,
						}}
					/>
					<View
						style={{
							position: 'absolute',
							left: `${progress}%`,
							translateX: -5,
							backgroundColor: Colors.primary,
							height: 10,
							width: 10,
							borderRadius: 5,
						}}
					/>
				</View>
				<Text style={[{ width: 60, textAlign: 'center' }, Fonts.textSmall]}>
					-{durationString}
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
					<Icon
						name={!paused ? 'pause' : 'play'}
						color={Colors.text}
						size={iconSize}
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