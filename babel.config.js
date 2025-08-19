module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.tsx',
            '.json',
            '.svg',
            '.png',
            '.ttf',
            '.jpg'
          ],
          alias: {
            '@types': './src/@types',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@constants': './src/constants',
            '@navigators': './src/navigators',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@store': './src/store',
            '@entities': './src/entities'
          }
        }
      ]
    ]
  }
}
