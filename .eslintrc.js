module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    cypress: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jsx-a11y", "eslint-plugin-cypress"],
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
