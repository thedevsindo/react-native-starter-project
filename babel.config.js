module.exports = {
  presets: [
    'module:react-native-dotenv',
    'module:metro-react-native-babel-preset',
    '@babel/preset-flow'
  ],
  plugins: [
    ['babel-plugin-inline-import', {
      'extensions': [
        '.svg'
      ]
    }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true}],
    [
      'module-resolver', {
        cwd: 'babelrc',
        root: ['./app'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          '@app': './app',
          '@utils': './app/utils',
          '@components': './app/components',
          '@screens': './app/screens',
          '@config': './app/config',
          '@kernel': './app/kernel',
          '@store': './app/store',
          '@actions': './app/store/actions',
          '@assets': './app/assets',
          '@images': './app/assets/images',
          '@styles': './app/assets/styles',
        }
      }
    ]
  ]
}
