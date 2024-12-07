/**
 * This file contains all application's style relative to fonts
 */
import {StyleSheet, Platform} from 'react-native';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

const textBase = {
  textAlignVertical: 'center',
  includeFontPadding: false,
};

export default function ({FontSize, Colors, IconSize}) {
  return StyleSheet.create({
    textSmall: {
      fontFamily: 'BambinoRegular',
      fontSize: FontSize.small * 0.95,
      color: Colors.text,
      lineHeight: FontSize.small * 1.1,
    },
    textRegular: {
      ...textBase,
      fontFamily: 'CrimsonTextRegular',
      fontSize: FontSize.regular,
      color: Colors.text,
      lineHeight: FontSize.regular * 1.4,
    },
    textBold: {
      ...textBase,
      fontFamily: 'CrimsonTextBold',
      fontWeight: Platform.OS == 'android' ? 'normal' : 'bold',
      fontSize: FontSize.regular,
      lineHeight: FontSize.regular * 1.4,
      color: Colors.text,
    },
    textItalic: {
      ...textBase,
      fontFamily: 'CrimsonTextItalic',
      fontStyle: Platform.OS == 'android' ? 'normal' : 'italic',
      fontSize: FontSize.regular,
      color: Colors.text,
      lineHeight: FontSize.regular * 1.4,
    },
    textButton: {
      fontFamily: 'BambinoRegular',
      fontSize: FontSize.button,
      color: Colors.text,
      lineHeight: FontSize.button * 1.15,
    },
    textPlayerTitle: {
      fontFamily: 'BambinoRegular',
      fontSize: FontSize.button * 0.95,
      color: Colors.text,
      lineHeight: FontSize.button * 1.15,
    },
    textLarge: {
      fontFamily: 'BambinoRegular',
      fontSize: FontSize.large,
      color: Colors.text,
      lineHeight: FontSize.large * 1.2,
    },
    labelSmall: {
      fontFamily: 'BambinoBold',
      fontSize: FontSize.small * 0.65,
      fontWeight: Platform.OS == 'android' ? 'normal' : 'bold',
      color: Colors.text,
      textTransform: 'uppercase',
      lineHeight: FontSize.small * 0.9,
    },
    legalSmall: {
      fontFamily: 'BambinoBold',
      fontSize: FontSize.small * 0.65,
      fontWeight: Platform.OS == 'android' ? 'normal' : 'bold',
      color: Colors.text,
      lineHeight: FontSize.regular,
    },
    titleSmall: {
      fontFamily: 'BambinoBold',
      fontSize: FontSize.small * 1.5,
      color: Colors.text,
    },
    titleRegular: {
      fontFamily: 'BambinoRegular',
      fontSize: FontSize.regular * 1.2,
      color: Colors.text,
      lineHeight: FontSize.regular * 1.5,
    },
    titleLarge: {
      fontFamily: 'BambinoRegular',
      fontSize: FontSize.large * 1.5,
      color: Colors.text,
      lineHeight: FontSize.large * 1.9,
    },
    titleWalks: {
      fontFamily: 'BambinoRegular',
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
  });
}
