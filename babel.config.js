module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@type-apps': './src/package/types',
          '@api': './src/package/api',
          '@components': './src/components',
          '@screens': './src/screens',
          '@store-app': './src/package/store',
        },
      },
    ],
  ],
};
