module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['jsdoc'],
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-ignore': 'error',
    '@typescript-eslint/ban-types': 'error',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-this-alias': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
