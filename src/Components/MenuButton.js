import React from 'react'
import { 
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'


const MenuButton = ({ navigation }) => {
  const { Colors } = useTheme()
  return (
    <Pressable onPress={ navigation.openDrawer }>
      <Icon name="menu-outline" style={{ paddingRight:10 }} size={35} color={Colors.text} />
    </Pressable>
  )
}

export default ({navigation}) => (() => <MenuButton navigation={navigation}/>)
