module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    // 处理 Unable to resolve path to module './home'
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
  rules: {
    // 处理 Missing file extension "tsx" for "./home"
    "import/extensions": [ "error", "ignorePackages", { "js": "never", "jsx": "never", "ts": "never", "tsx": "never" } ],
    // 处理  JSX not allowed in files with extension '.tsx'
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }]
  },
};
