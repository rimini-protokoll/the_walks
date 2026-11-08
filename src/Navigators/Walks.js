import React, { useState, useMemo } from 'react'
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import {
  MenuContainer,
  IndexWalkContainer,
  IndexUserPromptContainer,
  IndexMapContainer,
} from '@/Containers'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigate } from './Root'
import { useTranslation } from 'react-i18next'
import MenuButton from '@/Components/MenuButton'

const Stack = createStackNavigator()

const MapPicker = React.memo(({ navigation, walk }) => {
  const { t } = useTranslation()
  const { Fonts, Colors } = useTheme()
  const [modalVisible, setModalVisible] = useState(false)
  const walksList = useSelector(state => state.walks.fetchWalks.walks)
  const completed = useSelector(state => state.walks.completed)

  const availableWalks = useMemo(() => {
    if (!walksList) return []
    const listed = walksList.filter(({ data }) => data.listed)
    return listed.filter(
      _walk => completed?.indexOf(_walk.data.id) >= 0,
    )
  }, [walksList, completed])

  if (!walk) {
    return <View />
  }

  const selectWalk = targetWalk => {
    setModalVisible(false)
    if (targetWalk.data.id === walk.data.id) {
      return
    }
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          state: {
            routes: [
              { name: 'The Walks' },
              { name: walk.data.id, params: { walk } },
              {
                name: `${targetWalk.data.id}-Pictures`,
                params: { walk: targetWalk },
              },
            ],
          },
        },
      ],
    })
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 50 }}
        pressRetentionOffset={{ top: 40, bottom: 40, left: 40, right: 50 }}
        delayPressIn={0}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={`${walk.data.shortTitle}, Galerie wechseln`}
        style={styles.headerButton}
      >
        <Text
          numberOfLines={1}
          style={[Fonts.hyperlink, Fonts.titleRegular, Fonts.textCenter]}
        >
          {walk.data.shortTitle}
        </Text>
        <Icon
          name="chevron-down"
          size={14}
          color={Colors.text}
          style={styles.headerChevron}
        />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable
            style={styles.modalBackdrop}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.sheetContainer}>
            <View style={styles.sheetHandle} />

            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>{t('walk.pictures')}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                style={styles.sheetCloseBtn}
              >
                <Icon name="close" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.sheetScroll}
              showsVerticalScrollIndicator={false}
            >
              {availableWalks.map((item, idx) => {
                const isSelected = item.data.id === walk.data.id
                return (
                  <TouchableOpacity
                    key={item.data.id || idx}
                    onPress={() => selectWalk(item)}
                    activeOpacity={0.7}
                    style={[
                      styles.walkRow,
                      isSelected && styles.walkRowSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.walkRowTitle,
                        isSelected && styles.walkRowTitleSelected,
                      ]}
                    >
                      {item.data.shortTitle}
                    </Text>
                    {isSelected ? (
                      <Icon name="checkmark" size={18} color="#000" />
                    ) : null}
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  )
})

// @refresh reset
const WalksNavigator = ({ navigation }) => {
  const { Fonts, Colors, NavigationTheme, Gutters } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const headerRight = MenuButton({ navigation })
  const headerRightTransparent = MenuButton({ navigation, transparent: true })
  const headerBackImage = () => (
    <Image
      style={[
        { margin: 20, marginLeft: 15, backgroundColor: 'transparent' },
        Fonts.iconRegular,
      ]}
      source={require('@/Assets/Icons/Back.png')}
    />
  )

  const walk = useSelector(state => {
    if (state.walks.selectedWalk) {
      return state.walks.fetchWalks.walks.filter(
        _walk => _walk.data.id == state.walks.selectedWalk,
      )[0]?.data
    }
  })

  const walks = useSelector(state => {
    const _walks = state.walks.fetchWalks.walks
    if (_walks) {
      return _walks.filter(walk => walk.data.listed)
    } else {
      return []
    }
  })

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureResponseDistance: 135,
      }}
    >
      {walks ? (
        <Stack.Screen
          name="The Walks"
          component={MenuContainer}
          options={{
            headerTitle: () => null,
            headerRight,
            headerTransparent: true,
          }}
        />
      ) : null}
      {walks.map((walk, index) => (
        <Stack.Screen
          key={walk.data.id}
          name={walk.data.id}
          component={IndexWalkContainer}
          options={{
            headerBackImage,
            headerBackTitleVisible: false,
            headerTitle: () => null,
            headerRight,
            headerTransparent: true,
          }}
        />
      ))}
      {walks.map((walk, index) => (
        <Stack.Screen
          key={`${walk.data.id}-Pictures`}
          name={`${walk.data.id}-Pictures`}
          component={IndexMapContainer}
          initialParams={{ walk }}
          options={{
            headerBackImage,
            headerBackTitleVisible: false,
            headerTitle: () => (
              <MapPicker navigation={navigation} walk={walk} />
            ),
            headerTransparent: false,
            headerRight: () => null,
            gestureEnabled: false,
          }}
        />
      ))}
      <Stack.Screen
        name={t('walk.action')}
        component={IndexUserPromptContainer}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default WalksNavigator

const styles = StyleSheet.create({
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  headerChevron: {
    marginTop: 2,
    marginLeft: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  sheetContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 36 : 24,
    paddingHorizontal: 20,
    maxHeight: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 16,
  },
  sheetHandle: {
    width: 38,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D1D5DB',
    alignSelf: 'center',
    marginBottom: 14,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
    marginBottom: 8,
  },
  sheetTitle: {
    fontFamily: 'Bambino-Regular',
    fontSize: 18,
    color: '#111827',
  },
  sheetCloseBtn: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
  },
  sheetScroll: {
    marginTop: 6,
  },
  walkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 2,
  },
  walkRowSelected: {
    backgroundColor: '#F3F4F6',
  },
  walkRowTitle: {
    fontFamily: 'Bambino-Regular',
    fontSize: 16,
    color: '#1F2937',
  },
  walkRowTitleSelected: {
    fontWeight: 'bold',
    color: '#000000',
  },
})
