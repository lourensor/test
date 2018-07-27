module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  plugins: ['jest', 'prettier'],
  env: {
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react'
  ],
  "rules": {
    "prettier/prettier": ["error"],
    "semi": ["off"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/require-default-props": ["off"],
    "import/prefer-default-export": ["off"]
  }
}