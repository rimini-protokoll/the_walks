/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textSmall: {
      fontFamily: 'Bambino-Regular',
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegular: {
      fontFamily: 'CrimsonText-Regular',
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textBold: {
      fontFamily: 'CrimsonText-SemiBold',
      fontWeight: 'normal',
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textItalic: {
      fontFamily: 'CrimsonText-Italic',
      fontStyle: 'normal',
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textButton: {
      fontFamily: 'Bambino-Regular',
      fontSize: FontSize.button,
      color: Colors.text,
    },
    textLarge: {
      fontFamily: 'Bambino-Regular',
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontFamily: 'Bambino-Bold',
      fontSize: FontSize.small * 1.5,
      color: Colors.text,
    },
    titleRegular: {
      fontFamily: 'Bambino-Bold',
      fontSize: FontSize.regular * 1.5,
      color: Colors.text,
    },
    titleLarge: {
      fontFamily: 'Bambino',
      fontSize: FontSize.large * 1.5,
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
