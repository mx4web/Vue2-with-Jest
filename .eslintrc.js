module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true, // now **/*.test.js files' env has both jest
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          /* 'always' -- required self-closing at elements which don't have their content;
          'never' -- disallow self-closing;
          'any' -- don't enforce self-closing style
          */
          void: 'always',
          normal: 'never',
          component: 'always',
        },
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
