import React, { useState, useEffect, useRef } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  StyleSheet,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import NewsArticle from './NewsArticle'
import api from '@/Services'
import MenuButton from '@/Components/MenuButton'
import ActivityIndicator from '@/Components/ActivityIndicator'

const Stack = createStackNavigator()

const createStyles = ({ Fonts }) =>
  StyleSheet.create({
    title: {
      ...Fonts.textBold,
      textAlign: 'center',
    },
  })

const News = ({ route, navigation }) => {
  const { Gutters, Fonts, Colors, Layout } = useTheme()
  const styles = useRef(createStyles({ Fonts }))
  const { t } = useTranslation()
  const [news, setNews] = useState({ loading: true, items: [] })
  useEffect(() => {
    setNews({ loading: true })
    api.get('news_index.md').then(({ data }) => {
      setNews({ loading: false, items: data.data.news })
    })
  }, [])

  const NewsItemWrapper = ({
    children,
    published,
    title,
    date,
    place,
    linkUri,
  }) => {
    if (linkUri) {
      return (
        <TouchableOpacity
          accessibilityLabel={`Hyperlink. ${date} ${place ? place : ''}, ${title}`}
          onPress={() => linkUri && Linking.openURL(linkUri)}
          style={[
            Gutters.largeVPadding,
            Layout.center,
            { opacity: published ? 1 : 0.6 },
          ]}
        >
          {children}
        </TouchableOpacity>
      )
    } else {
      return (
        <View
          accesible={true}
          accessibilityLabel={`${date} ${place ? place : ''} , ${title}`}
          style={[
            Gutters.largeVPadding,
            Layout.center,
            { opacity: published ? 1 : 0.6 },
          ]}
        >
          {children}
        </View>
      )
    }
  }
  const NewsItem = ({ date, title, language, place, linkUri, published }) => (
    <NewsItemWrapper
      linkUri={linkUri}
      published={published}
      title={title}
      place={place}
      date={date}
    >
      <Text style={Fonts.textRegular}>*{date}*</Text>
      <Text style={[linkUri ? Fonts.hyperlink : '', styles.current.title]}>
        {title}
      </Text>
      {place ? <Text style={Fonts.textItalic}>{place}</Text> : null}
    </NewsItemWrapper>
  )
  if (news.loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    )
  }

  const _newsSorted = [...news.items].sort((a, b) => {
    return a.data.index - b.data.index
  })

  return (
    <ScrollView contentContainerStyle={Gutters.smallHPadding}>
      <View style={{ height: 50 }} />
      <Text style={[Fonts.titleLarge, Fonts.textCenter, Gutters.largeBMargin]}>
        {t('news')}
      </Text>
      {_newsSorted.map((item, i) => (
        <NewsItem
          key={i}
          date={item.data.date}
          title={item.data.title}
          language={item.data.language}
          place={item.data.place}
          linkUri={item.data.linkUri}
          published={item.data.published}
        />
      ))}
    </ScrollView>
  )
}

const NewsStack = ({ navigation }) => {
  const { Gutters, Colors, Fonts } = useTheme()
  const { t } = useTranslation()
  const [news, setNews] = useState({ loading: true, items: [] })
  useEffect(() => {
    const _news = []
    api.get('/news_index.md').then(({ data }) => {
      setNews({ loading: false, items: data.news.data })
    })
  }, [])

  const headerRight = MenuButton({ navigation })
  return (
    <Stack.Navigator headerMode="float">
      <Stack.Screen
        name={t('news')}
        component={News}
        options={{
          headerRight,
          headerTitle: null,
          headerTransparent: true,
        }}
        initialParams={{ news }}
      />
      {news.items.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.data.title}
          component={NewsArticle}
          options={{
            headerRight,
            headerBackTitleVisible: false,
            headerTitle: null,
            headerTransparent: true,
            headerBackImage: () => (
              <Image
                style={[Fonts.iconRegular, Gutters.smallTMargin]}
                source={require('@/Assets/Icons/Back.png')}
              />
            ),
          }}
          initialParams={item}
        />
      ))}
    </Stack.Navigator>
  )
}

export default NewsStack
