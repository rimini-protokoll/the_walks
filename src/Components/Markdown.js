import React from 'react'
import { StyleSheet } from 'react-native'
import MarkdownDisplay from 'react-native-markdown-display'
import { useTheme } from '@/Theme'

const Markdown = ({ markdown }) => {
	const { Fonts, Colors, FontSize } = useTheme()

	const style = StyleSheet.create({
		body: { color: Colors.text, fontSize: FontSize.regular },
		heading1: Fonts.titleLarge,
		heading2: Fonts.titleRegular,
		heading3: Fonts.titleSmall,
	})

	return <MarkdownDisplay style={style}>{markdown}</MarkdownDisplay>
}

export default Markdown
