import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  VirtualizedList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import NewsArticle from './NewsArticle'

const Stack = createStackNavigator()
const md = `
# H1
![News image](https://www.rimini-protokoll.de/website/cache/images/remotex/Remote%20Belgrad/1280-20.09.BGnaDaljinski%20photoSonjaZugic15.jpg)
## H2
### H3
1. one
2. two
3. three
- a
  - a.1
  - a.2
- b
- c

**The Walks** is a performance series _developed_ by Rimini Protokoll for specific kinds of places and bodies in motion. An app will function like a stage for the project.
`
const news = [
  {
    date: 'Sat May 29 2021',
    title: 'News 1',
    image:
      'https://www.rimini-protokoll.de/website/cache/images/remotex/Remote%20Belgrad/1280-20.09.BGnaDaljinski%20photoSonjaZugic15.jpg',
    excerpt: 'Bla bla bli blub',
    newsBody: md,
  },
  {
    date: 'Fri May 28 2021',
    title: 'News 2',
    image: '',
    excerpt: 'Bla bla bli blub',
    newsBody: md,
  },
  {
    date: 'Sat May 22 2021',
    title: 'News 3',
    image:
      'https://www.rimini-protokoll.de/website/cache/images/URBAN%20NATURE/1280-UrbanNature_PressPicture_%C2%A9DominicHuber.jpg',
    excerpt: 'Bla bla bli blub',
    newsBody: md,
  },
  {
    date: 'Sat May 15 2021',
    title: 'News 4',
    image:
      'https://www.rimini-protokoll.de/website/cache/images/Temple/1280-StefanKaegi_TempleDuPresent_Gimel_201107_197_%C2%A9%20Philippe%20Weissbrodt.jpg',
    excerpt: 'Bla bla bli blub',
    newsBody: md,
  },
]

const dateString = (date, locale) => {
  console.log(locale, Intl.DateTimeFormat(locale, {dateStyle: 'full'}).format(new Date(date)))
  return Intl.DateTimeFormat(locale, {dateStyle: 'full'}).format(new Date(date))
}

const News = ({ navigation }) => {
  const { Gutters, Fonts } = useTheme()
  const { t, i18n } = useTranslation()
  const userLocale = useSelector(state => state.language.userLocale)
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
  const getItemCount = () => news.length
  const renderItem = ({ item }) => (
    <NewsItem
      date={item.date}
      title={item.title}
      image={item.image}
      excerpt={item.excerpt}
      newsBody={item.newsBody}
    />
  )
  return (
    <VirtualizedList
      contentContainerStyle={{ flexGrow: 1 }}
      style={Gutters.smallHPadding}
      data={news}
      initialNumToRender={4}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      getItemCount={getItemCount}
      getItem={(data, index) => data[index]}
    />
  )
}

const NewsStack = ({ navigation }) => {
  const { Colors, Fonts } = useTheme()
  const { t } = useTranslation()

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
        }}
      />
      {news.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.title}
          component={NewsArticle}
          options={{
            headerRight,
          }}
        />
      ))}
    </Stack.Navigator>
  )
}
const newsText = `
# H1
## H2
### H3
1. one
2. two
3. three
- a
  - a.1
  - a.2
- b
- c

**The Walks** is a performance series _developed_ by Rimini Protokoll for specific kinds of places and bodies in motion. An app will function like a stage for the project.
`

export default NewsStack
