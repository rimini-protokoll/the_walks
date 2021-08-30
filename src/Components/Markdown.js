import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import MarkdownDisplay from 'react-native-markdown-display'
import { useTheme } from '@/Theme'


const Markdown = ({ textCenter, markdown }) => {
  const { Layout, Fonts, Colors, FontSize, Gutters } = useTheme()

  const style = StyleSheet.create({
    body: {
      color: Colors.text,
      ...Fonts.textRegular,
      ...Gutters.regularHPadding
    },
    heading1: {
      ...Fonts.titleLarge,
      ...Layout.selfStretch,
      ...Fonts.textCenter,
      marginBottom: 20
    },
    heading2: {
      ...Fonts.titleRegular,
      ...Layout.selfStretch,
      ...Fonts.textCenter
    },
    heading3: {
      ...Fonts.titleSmall,
      ...Layout.selfStretch,
      ...Fonts.textCenter
    },
    strong: Fonts.textBold,
    em: Fonts.textItalic,
    link: {
      textDecorationLine: 'underline',
      textDecorationColor: 'rgb(234, 192, 39)'
    }
  })

  const [rules, _] = useState({
    heading1: (node, children, parent, styles) =>
      <Text key={node.key} style={[style.heading1]}>
        {children}
      </Text>,
    heading2: (node, children, parent, styles) =>
      <Text key={node.key} style={[style.heading2]}>
        {children}
      </Text>,
    heading3: (node, children, parent, styles) =>
      <Text key={node.key} style={[style.heading3]}>
        {children}
      </Text>,
  })

  return <MarkdownDisplay
    style={style}
    rules={rules}
  >{markdown}</MarkdownDisplay>
}

export default Markdown
