import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters, Layout }) {
  const base = {
    ...Layout.center,
    ...Gutters.regularHPadding,
    backgroundColor: Colors.primary,
    paddingTop: 8,
    paddingBottom: 4,
    maxWidth: 180,
    minHeight: 80,
  }
  const rounded = {
    ...base,
    borderRadius: 20,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2.5,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
