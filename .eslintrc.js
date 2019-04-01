module.exports = {
  extends: ['prettier'],
  parser: 'typescript-eslint-parser',
  plugins: ['typescript', 'react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  root: true,
  parserOptions: {
    jsx: true,
    sourceType: "module"
  },
  rules: {
    'no-unused-expressions': 0,
    'no-useless-constructor': 0,
    camelcase: 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['ts', '.tsx', '.js', '.jsx'] }
    ]
  }
}
