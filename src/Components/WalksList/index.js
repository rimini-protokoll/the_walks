import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTheme } from '@/Theme'
import Tile from './Tile'

const WalksList = ({ navigation }) => {
  const { Layout } = useTheme()
  const walks = [
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
    {
      title: 'Vor dem Theater',
      iconUri: 'https://angry-fermi-c85f46.netlify.app/icons/VordemTheater.jpg'
    },
  ]
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      alignContent: 'baseline',
      flexWrap: 'wrap',
      flexDirection: 'row'
      }}>
      { walks.map(({title, iconUri}, i) => (
        <Tile   
          style={{ 
            paddingRight: (i % 2) == 0 ? 5 : 0,
            paddingLeft: (i % 2) == 1 ? 5 : 0,
          }} 
          key={i} navigation={navigation} title={title} iconUri={iconUri} />
      ))}
    </View>
  )
}
export default WalksList 
