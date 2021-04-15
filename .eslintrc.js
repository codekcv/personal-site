module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // React
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",

    // Import
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "ignorePackages", { tsx: "never" }],
    // "import/no-unresolved": "off", // issue with gatsby-plugin-root-import

    // Prettier
    "prettier/prettier": ["error", { endOfLine: "auto" }],

    // Other
    "jsx-a11y/anchor-is-valid": "off",
    camelcase: "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts, .tsx"],
      },
    },
  },
}
