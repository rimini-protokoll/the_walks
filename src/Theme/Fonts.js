/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet, Platform } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

const textBase = {
  textAlignVertical: 'center',
  includeFontPadding: false,
}

export default function ({ FontSize, Colors, IconSize }) {
  return StyleSheet.create({
    textSmall: {
      fontFamily: 'Bambino-Regular',
      fontSize: FontSize.small * 0.95,
      color: Colors.text,
      lineHeight: FontSize.small * 1.1,
    },
    textRegular: {
      ...textBase,
      fontFamily: 'CrimsonText-Regular',
      fontSize: FontSize.regular,
      color: Colors.text,
      lineHeight: FontSize.regular * 1.4,
    },
    textBold: {
      ...textBase,
      fontFamily: 'CrimsonText-Bold',
      fontWeight: Platform.OS == 'android' ? 'normal' : 'bold',
      fontSize: FontSize.regular,
      lineHeight: FontSize.regular * 1.4,
      color: Colors.text,
    },
    textItalic: {
      ...textBase,
      fontFamily: 'CrimsonText-Italic',
      fontStyle: Platform.OS == 'android' ? 'normal' : 'italic',
      fontSize: FontSize.regular,
      color: Colors.text,
      lineHeight: FontSize.regular * 1.4,
    },
    textButton: {
      fontFamily: 'Bambino',
      fontSize: FontSize.button,
      color: Colors.text,
      lineHeight: FontSize.button * 1.15,
    },
    textPlayerTitle: {
      fontFamily: 'Bambino',
      fontSize: FontSize.button * 0.95,
      color: Colors.text,
      lineHeight: FontSize.button * 1.15,
    },
    textLarge: {
      fontFamily: 'Bambino-Regular',
      fontSize: FontSize.large,
      color: Colors.text,
      lineHeight: FontSize.large * 1.2,
    },
    labelSmall: {
      fontFamily: 'Bambino-Bold',
      fontSize: FontSize.small * 0.65,
      fontWeight: Platform.OS == 'android' ? 'normal' : 'bold',
      color: Colors.text,
      textTransform: 'uppercase',
      lineHeight: FontSize.small * 0.9,
    },
    legalSmall: {
      fontFamily: 'Bambino-Bold',
      fontSize: FontSize.small * 0.65,
      fontWeight: Platform.OS == 'android' ? 'normal' : 'bold',
      color: Colors.text,
      lineHeight: FontSize.regular,
    },
    titleSmall: {
      fontFamily: 'Bambino-Bold',
      fontSize: FontSize.small * 1.5,
      color: Colors.text,
    },
    titleRegular: {
      fontFamily: 'Bambino',
      fontSize: FontSize.regular * 1.2,
      color: Colors.text,
      lineHeight: FontSize.regular * 1.5,
    },
    titleLarge: {
      fontFamily: 'Bambino',
      fontSize: FontSize.large * 1.5,
      color: Colors.text,
      lineHeight: FontSize.large * 1.9,
    },
    titleWalks: {
      fontFamily: 'Bambino',
      fontSize: FontSize.walks * 1.5,
      color: Colors.text,
      lineHeight: FontSize.walks * 1.9,
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
    iconXSmall: {
      width: IconSize.xSmall,
      height: IconSize.xSmall,
    },
    iconSmall: {
      width: IconSize.small,
      height: IconSize.small,
    },
    iconRegular: {
      width: IconSize.regular,
      height: IconSize.regular,
    },
    iconLarge: {
      width: IconSize.large,
      height: IconSize.large,
    },
    iconXLarge: {
      width: IconSize.xLarge,
      height: IconSize.xLarge,
    },
    hyperlink: {
      textDecorationLine: 'underline',
      textDecorationColor: 'rgb(234, 192, 39)',
    },
  })
}
