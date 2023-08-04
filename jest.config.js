module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-native-flash-message/*)',
    'node_modules/(?!(jest-)?@react-native|react-native|react-native-elements/*)',
  ],
};
