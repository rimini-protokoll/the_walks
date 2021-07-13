/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FAFAFA',
  background: 'rgb(239,239,241)',
  white: '#ffffff',
  text: '#212529',
  primary: '#555',
  secondary: '#AAA',
  success: '#28a745',
  error: '#dc3545',
  card: 'rgb(239,239,241)'
}

export const NavigationColors = {
  primary: Colors.primary,
  background: Colors.background,
  card: Colors.background,
  text: Colors.text,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 18,
  regular: 20,
  button: 20,
  large: 30,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}
