import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  VirtualizedList,
  ActivityIndicator,
  Image,
  Linking,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import NewsArticle from './NewsArticle'
import api, { handleError } from '@/Services'
import MenuButton from '@/Components/MenuButton'

const Stack = createStackNavigator()

const dateString = (date, locale) => {
  //console.log(locale, Intl.DateTimeFormat(locale, {dateStyle: 'full'}).format(new Date(date)))
  return Intl.DateTimeFormat(locale, {dateStyle: 'full'}).format(new Date(date))
}

const News = ({ route, navigation }) => {
  const { Gutters, Fonts, Colors, Layout } = useTheme()
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
  const NewsItem = ({ date, title, language, place, linkUri }) => (
    <TouchableOpacity
      onPress={() => Linking.openURL(linkUri)}
      disabled={!linkUri}
      style={[Gutters.largeVPadding, Layout.center]}
    >
      <Text style={Fonts.textRegular}>*{date}*</Text>
      <Text style={[{
        ...Fonts.textBold, 
        textAlign:'center',
      },
      linkUri ? Fonts.hyperlink : '']}>{title}</Text>
      {place ? <Text style={Fonts.textItalic}>{place}</Text>:null}
    </TouchableOpacity>
  )
  const getItemCount = () => news.items.length
  if (news.loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }

  const _newsSorted = [...news.items].sort((a, b) => {
    return a.data.index - b.data.index;
  });
  
  return (
    <ScrollView contentContainerStyle={Gutters.smallHPadding}>
      <View style={{height: 50}}/>
      <Text style={[Fonts.titleLarge, Fonts.textCenter, Gutters.largeBMargin]}>{t('news')}</Text>
        {_newsSorted.map((item, i) => (
          <NewsItem
            key={i}
            date={item.data.date}
            title={item.data.title}
            language={item.data.language}
            place={item.data.place}
            linkUri={item.data.linkUri}
          />
        ))}
    </ScrollView>
  )
}

const NewsStack = ({ navigation }) => {
  const { Gutters, Colors, Fonts } = useTheme()
  const { t } = useTranslation()
  const [news, setNews] = useState({loading: true, items: []})
  useEffect(() => {
    const _news = []
    api.get('/news_index.md').then(({data}) => {
      data.data.news.forEach((newsId, i) => {

        api.get(`/news/${newsId}.md`).then(response => {
          const itemData = response.data
        
          _news[i] = itemData
          _news[i].data.index = i

          if (_news.length == data.data.news.length) {
            setNews({loading: false, items: _news})
          }
        })
      })
    })
  }, [])

  const headerRight = MenuButton({navigation})
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
            headerBackTitleVisible: false,
            headerTitle: null,
            headerTransparent: true,
            headerBackImage: () => <Image style={[Fonts.iconRegular, Gutters.smallTMargin]} source={require('@/Assets/Icons/Back.png')}/>,
          }}
          initialParams={item}
        />
      ))}
    </Stack.Navigator>
  )
}

export default NewsStack