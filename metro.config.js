/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const {
  resolver: { sourceExts, assetExts },
} = defaultConfig

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Import *.svg files as React components. Use the bare-React-Native entry point,
    // which uses @react-native/metro-babel-transformer (RN 0.72+); the default entry
    // still references the removed metro-react-native-babel-transformer.
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
    // Disable inlineRequires: with the RN 0.75 babel preset it defers module
    // evaluation in a way that makes some requires (e.g. re-export barrels) resolve
    // to `undefined` at first access ("Cannot read property X of undefined").
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    // Treat .svg as source (transformed to components) rather than a static asset.
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
}

module.exports = mergeConfig(defaultConfig, config)
