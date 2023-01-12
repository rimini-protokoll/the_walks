import React, { useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  StyleSheet,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import FetchWalks from '@/Store/Walks/FetchWalks'
import WalksList from '@/Components/WalksList'

const createStyles = ({ Colors }) =>
  StyleSheet.create({
    separator: {
      width: '15%',
      height: 4,
      backgroundColor: Colors.text,
    },
  })

const Menu = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const styles = useRef(createStyles({ Colors }))
  const dispatch = useDispatch()
  const language = useSelector(state => state.language.selectedLanguage)
  const [isDisplayable, setIsDisplayable] = useState(false)

  const localWalks = useSelector(state =>
    Object.keys(state.walks.localWalks[language] || {}),
  )

  const [walks, completedWalks] = useSelector(state => {
    let listedWalks = state.walks.fetchWalks.walks.filter(({ data }) => data.listed)
    listedWalks = listedWalks.map(walk => ({
      content: walk.content,
      data: { ...walk.data, local: localWalks.indexOf(walk.data.id) > -1 },
    }))
    if (listedWalks) {
      return [
        listedWalks.filter(
          ({ data }) => state.walks.completed.indexOf(data.id) == -1,
        ),
        listedWalks.filter(({ data }) => state.walks.completed.indexOf(data.id) > -1),
      ]
    } else {
      return []
    }
  })

  const [refreshing, setRefreshing] = useState(false)
  const isLoading = useSelector(state => state.walks.fetchWalks.loading)

  const onRefresh = useCallback(() => {
    setIsDisplayable(false)
    setRefreshing(true)
    // setTimeout(() => setRefreshing(false), 3000)
    dispatch(FetchWalks.action({ language }))
    setRefreshing(false)
  }, [dispatch, language])

  return (
    <ScrollView
      style={[Gutters.smallVPadding]}
      contentContainerStyle={{ zIndex: -10, paddingBottom: 20 }}
      refreshControl={
        <RefreshControl
          refreshing={isLoading || refreshing}
          colors={['#000']}
          tintColor="#CCC"
          onRefresh={onRefresh}
        />
      }
      accessible={true}
      accessibilityLabel={walks.map(({ data }) => data.shortTitle).join(', ')}
    >
      <View style={{ height: 70 }} />
      <Text style={[Gutters.smallBMargin, Fonts.titleWalks, Fonts.textCenter]}>
        The Walks
      </Text>
      {!isLoading && !refreshing ? (
        <View>
          <WalksList navigation={navigation} walks={walks} onLoad={() => setIsDisplayable(true)} />
          {walks.length && completedWalks.length ? (
            <View
              style={[
                Gutters.largeLMargin,
                Gutters.largeTMargin,
                styles.current.separator,
                { opacity: isDisplayable ? 1 : 0 },
              ]}
            />
          ) : null}
          {isDisplayable ? <WalksList navigation={navigation} walks={completedWalks} /> : null}
        </View>
      ) : null}
    </ScrollView>
  )
}

export default Menu
