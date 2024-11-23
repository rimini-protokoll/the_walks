import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'

const MenuButton = ({ navigation, transparent }) => {
  const { Colors, Fonts } = useTheme()
  return (
    <TouchableOpacity
      accessible={false}
      accessibilityLabel="Open Menu"
      onPress={navigation.openDrawer}
    >
      <Image
        style={[
          Fonts.iconRegular,
          {
            backgroundColor: transparent ? 'transparent' : Colors.background,
            margin: 20,
          },
        ]}
        source={require('Assets/Icons/Burger.png')}
      />
    </TouchableOpacity>
  )
}

export default ({ navigation }) =>
  () =>
    <MenuButton navigation={navigation} />
