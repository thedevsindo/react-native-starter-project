module.exports = {
  root: true,
  env: {
      browser: true,
      commonjs: true,
      es6: true
  },
  extends: '@react-native-community',
  parserOptions: {
      ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true
      },
      sourceType: "module"
  },
  plugins: ['react'],
  rules: {
      indent: [
          error, 2, { "SwitchCase": 1, "VariableDeclarator": 1 }
      ],
      quotes: [ 'error', 'single' ],
      semi: [ 'error', 'never' ]
  }
};
