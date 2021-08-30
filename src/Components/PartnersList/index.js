import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'
import Tile from './TilePartner'
import FitImage from 'react-native-fit-image'

const PartnersList = () => {
  const { t } = useTranslation()
  const { Layout, Fonts } = useTheme()
  const partners = [
    {
      iconUri: 'https://the-walks.netlify.app/partners/1_teatelli.png'
    },
    {
      iconUri: 'https://the-walks.netlify.app/partners/2_borderlight.png'
    },
    {
      iconUri: 'https://the-walks.netlify.app/partners/3_europeanforumalpbach.png'
    },
    {
      iconUri: 'https://the-walks.netlify.app/partners/4_fondazionearmoniedarte.png'
    },
    {
      iconUri: 'https://the-walks.netlify.app/partners/6_hellerau.png'
    },
    {
      iconUri: 'https://the-walks.netlify.app/partners/7_kampnagel.png'
    },
    {
      iconUri: 'https://the-walks.netlify.app/partners/8_zonak.jpg'
    },
    {
      iconUri: 'https://the-walks.netlify.app/partners/9_perspectives.jpg'
    },
  ]
  return (
    <FitImage 
      originalWidth={636}
      originalHeight={1232}
      resizeMode="contain"
      source={{uri: 'https://the-walks.netlify.app/partners/Koproduzenten.png'}}
    />
  )
}
export default PartnersList 

