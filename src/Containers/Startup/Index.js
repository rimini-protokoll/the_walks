import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'
import InitStartup from '@/Store/Startup/Init'
import { Brand } from '@/Components'
import ActivityIndicator from '@/Components/ActivityIndicator'

const IndexStartupContainer = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()

  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fullSize, Layout.fill]}>
      <Brand />
      <ActivityIndicator size={'large'} color={Colors.primary}  style={{position: 'absolute', left: '50%', marginLeft: -20, bottom: 20}} />
    </View>
  )
}

export default IndexStartupContainer
