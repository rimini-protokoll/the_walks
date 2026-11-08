import React, { useRef, useCallback, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
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

const selectLanguage = state => state.language.selectedLanguage
const selectLocalWalksMap = state => state.walks.localWalks
const selectAllWalks = state => state.walks.fetchWalks.walks
const selectCompleted = state => state.walks.completed

const selectCategorizedWalks = createSelector(
  [selectLanguage, selectLocalWalksMap, selectAllWalks, selectCompleted],
  (language, localWalksMap, allWalks, completedIds) => {
    if (!allWalks || !allWalks.length) {
      return { pendingWalks: [], completedWalksList: [] }
    }
    const localSet = new Set(Object.keys(localWalksMap?.[language] || {}))
    const completedSet = new Set(completedIds || [])

    const pendingWalks = []
    const completedWalksList = []

    for (let i = 0; i < allWalks.length; i++) {
      const walk = allWalks[i]
      if (!walk?.data?.listed) continue

      const isLocal = localSet.has(walk.data.id)
      const walkItem = {
        content: walk.content,
        data: { ...walk.data, local: isLocal },
      }

      if (completedSet.has(walk.data.id)) {
        completedWalksList.push(walkItem)
      } else {
        pendingWalks.push(walkItem)
      }
    }

    return { pendingWalks, completedWalksList }
  },
)

const Menu = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const styles = useRef(createStyles({ Colors }))
  const dispatch = useDispatch()
  const language = useSelector(selectLanguage)
  const [isDisplayable, setIsDisplayable] = useState(false)

  const { pendingWalks: walks, completedWalksList: completedWalks } =
    useSelector(selectCategorizedWalks)

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
