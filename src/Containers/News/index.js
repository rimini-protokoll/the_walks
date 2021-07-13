import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  VirtualizedList,
  ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import NewsArticle from './NewsArticle'
import api, { handleError } from '@/Services'

const Stack = createStackNavigator()

const dateString = (date, locale) => {
  //console.log(locale, Intl.DateTimeFormat(locale, {dateStyle: 'full'}).format(new Date(date)))
  return Intl.DateTimeFormat(locale, {dateStyle: 'full'}).format(new Date(date))
}

const News = ({ route, navigation }) => {
  const { Gutters, Fonts, Colors } = useTheme()
  const { t, i18n } = useTranslation()
  const userLocale = useSelector(state => state.language.userLocale)
  const [news, setNews] = useState({loading: true, items: []})
  useEffect(() => {
    const _news = []
    setNews({loading: true})
    api.get('/news_index.md').then(({data}) => {
      data.data.news.forEach(newsId => {
        api.get(`/news/${newsId}.md`).then(response => {
          const itemData = response.data
          _news.push(itemData)
          if (_news.length == data.data.news.length) {
            setNews({loading: false, items: _news})
          }
        })
      })
    })
  }, [])
  const NewsItem = ({ date, title, image, excerpt, newsBody }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(title, { newsBody })}
      style={[Gutters.regularVMargin]}
    >
      <View>
        <Text style={Fonts.titleRegular}>{title}</Text>
        <Text style={[
          Fonts.textSmall,
          Fonts.textRight,
          Gutters.smallBMargin
          ]}>{dateString(date, userLocale)}</Text>
      </View>
      {image ? (
        <FitImage source={{ uri: image }} style={Gutters.smallBMargin} />
      ) : null}
      <Text style={Fonts.textRegular}>{excerpt}</Text>
    </TouchableOpacity>
  )
  const getItemCount = () => news.items.length
  const renderItem = ({ item }) => (
    <NewsItem
      date={item.data.date}
      title={item.data.title}
      image={item.data.image}
      excerpt={item.data.excerpt}
      newsBody={item.content}
    />
  )
  if (news.loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }
  return (
    <View style={ Gutters.smallHPadding }>
      <View style={{height: 50}}/>
      <Text style={[Fonts.titleLarge, Fonts.textCenter]}>{t('news')}</Text>
      <VirtualizedList
        contentContainerStyle={{ flexGrow: 1 }}
        style={Gutters.smallHPadding}
        data={news.items}
        initialNumToRender={4}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        getItemCount={getItemCount}
        getItem={(data, index) => data[index]}
      />
    </View>
  )
}

const NewsStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const { t } = useTranslation()
  const [news, setNews] = useState({loading: true, items: []})
  useEffect(() => {
    const _news = []
    api.get('/news_index.md').then(({data}) => {
      data.data.news.forEach(newsId => {
        api.get(`/news/${newsId}.md`).then(response => {
          const itemData = response.data
          _news.push(itemData)
          if (_news.length == data.data.news.length) {
            setNews({loading: false, items: _news})
          }
        })
      })
    })
  }, [])

  const headerRight = () => {
    return (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Icon
          name="menu-outline"
          style={{ paddingRight: 10 }}
          size={35}
          color={Colors.text}
        />
      </TouchableOpacity>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('news')}
        component={News}
        options={{
          headerRight,
          headerTitle: null,
          headerTransparent: true
        }}
        initialParams={{news}}
      />
      {news.items.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.data.title}
          component={NewsArticle}
          options={{
            headerRight,
          }}
          initialParams={item}
        />
      ))}
    </Stack.Navigator>
  )
}

export default NewsStack
