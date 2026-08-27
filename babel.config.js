const presets = ['module:@react-native/babel-preset']
// Force LOOSE class fields ([[Set]] semantics). The default @react-native/babel-preset
// uses define semantics, under which a bare field declaration (e.g. react-native-maps'
// `getNativeComponent;`) creates an own `undefined` property that shadows the method
// decorateMapComponent puts on the prototype -> "this.getNativeComponent is not a function".
// (babel requires these three transforms to share the same `loose` setting.)
const plugins = [
  ['@babel/plugin-transform-class-properties', { loose: true }],
  ['@babel/plugin-transform-private-methods', { loose: true }],
  ['@babel/plugin-transform-private-property-in-object', { loose: true }],
]

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
      assets: './src/assets',
    },
  },
])

plugins.push('react-native-reanimated/plugin')

module.exports = {
  presets,
  plugins,
}
