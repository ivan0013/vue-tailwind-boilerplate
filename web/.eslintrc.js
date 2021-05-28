module.exports = {
  root: true,

  env: {
    // this section will be used to determine which APIs are available to us
    es6: true,
    node: true,
    browser: true,
  },
  // parser: "@typescript-eslint/parser",
  // plugins: [
  //   "@typescript-eslint"
  // ],
  parserOptions: {
    // parser: 'babel-eslint',
    // // specifying a module source type prevent eslint from marking import statements as errors
    // sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],

  rules: {
    // semi: 'error',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // quotes: ['error', 'single', { allowTemplateLiterals: true }],
    // 'space-before-blocks': ['error', 'always'],
    // 'key-spacing': ['error', { mode: 'strict' }],
    // 'keyword-spacing': ['error', { 'before': true }],
    // 'space-infix-ops': ['error', { 'int32Hint': false }],
    eqeqeq: ['error', 'always'],
    // 'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 120 }],
    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'always-multiline',
    //     objects: 'always-multiline',
    //     imports: 'never',
    //     exports: 'never',
    //     functions: 'never',
    //   },
    // ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 8,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    // 'vue/html-closing-bracket-spacing': ['error', {
    //   'startTag': 'never',
    //   'endTag': 'never',
    //   'selfClosingTag': 'never',
    // }],
    // 'vue/html-self-closing': 0,
    // 'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    // 'indent': ['error', 2]
    // //TODO: Evaluate enable next two rules
    // 'no-async-promise-executor': 0,
    // 'no-prototype-builtins': 0,
  },

  globals: {
    jest: true,
    expect: true,
    mockFn: true,
    config: true,
    afterEach: true,
    beforeEach: true,
    describe: true,
    it: true,
    test: true,
    runs: true,
    waitsFor: true,
    pit: true,
    require: true,
    xdescribe: true,
    xit: true,
  },
};
