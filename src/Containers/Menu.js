import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import FetchWalks from '@/Store/Walks/FetchWalks'
import WalksList from '@/Components/WalksList'

const Menu = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const language = useSelector(state => state.language.selectedLanguage)

  const localWalks = useSelector(state =>
    Object.keys(state.walks.localWalks[language] || {}),
  )

  const [walks, completedWalks] = useSelector(state => {
    let walks = state.walks.fetchWalks.walks.filter(({ data }) => data.listed)
    walks = walks.map(walk => ({
      content: walk.content,
      data: { ...walk.data, local: localWalks.indexOf(walk.data.id) > -1 },
    }))
    if (walks) {
      return [
        walks.filter(
          ({ data }) => state.walks.completed.indexOf(data.id) == -1,
        ),
        walks.filter(({ data }) => state.walks.completed.indexOf(data.id) > -1),
      ]
    } else {
      return []
    }
  })

  const [refreshing, setRefreshing] = useState(false)
  const isLoading = useSelector(state => state.walks.fetchWalks.loading)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    // setTimeout(() => setRefreshing(false), 3000)
    dispatch(FetchWalks.action({ language }))
    setRefreshing(false)
  })

  return (
    <ScrollView
      style={[Gutters.smallVPadding]}
      contentContainerStyle={{ zIndex: -10 }}
      refreshControl={
        <RefreshControl
          refreshing={isLoading || refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={{ height: 70 }} />
      <Text style={[Gutters.smallBMargin, Fonts.titleLarge, Fonts.textCenter]}>
        The Walks
      </Text>
      {!isLoading && !refreshing ? (
        <View>
          <WalksList navigation={navigation} walks={walks} />
          {completedWalks.length ? (
            <View
              style={{
                ...Gutters.largeLMargin,
                ...Gutters.largeTMargin,
                width: '15%',
                height: 4,
                backgroundColor: Colors.text,
              }}
            />
          ) : null}
          <WalksList navigation={navigation} walks={completedWalks} />
        </View>
      ) : null}
    </ScrollView>
  )
}

export default Menu
