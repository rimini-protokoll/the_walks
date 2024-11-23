/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, FontSize, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderBottomColor: Colors.text,
        borderBottomWidth: 2,
        backgroundColor: Colors.background,
        fontFamily: 'Bambino-Regular',
        fontSize: FontSize.button,
        color: Colors.text,
        textAlign: 'center',
        minWidth: 90,
        maxHeight: 35,
        padding: 4,
      },
    }),
  }
}
