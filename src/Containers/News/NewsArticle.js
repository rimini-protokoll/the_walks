import React, { useState } from 'react'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import Markdown from '@/Components/Markdown'

const NewsArticle = ({ route }) => {
  console.log(route.params)
  const { newsBody } = route.params
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <ScrollView style={[Gutters.smallHPadding, Gutters.smallVPadding]}>
      <Markdown markdown={newsBody}/>
    </ScrollView>
  )
}

export default NewsArticle
