module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@store': './src/store',
            '@routes': './src/routes',
            '@resources': './src/resources',
            '@services': './src/services',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
