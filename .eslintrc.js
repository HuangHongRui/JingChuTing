module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    // 处理  JSX not allowed in files with extension '.tsx'
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    // 处理 Missing file extension "tsx" for "./"
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" }
    ],
    "react/static-property-placement": ["error", "static public field"],
    "no-console": "error",
    // "import/no-unresolved": "error",
    // "import/prefer-default-export": "off",
    // 'max-len': ['error', { code: 100, ignoreUrls: true, ignoreStrings: true }],
    // prettier 配置
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        printWidth: 120
      }
    ]
  }
};
