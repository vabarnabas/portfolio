import path from "node:path"
import { fileURLToPath } from "node:url"

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import _import from "eslint-plugin-import"
import prettier from "eslint-plugin-prettier"
import react from "eslint-plugin-react"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
  parserPath: tsParser,
})

export default [
  ...fixupConfigRules(
    compat.extends(
      "next",
      "plugin:@typescript-eslint/recommended",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:import/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "prettier"
    )
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      import: fixupPluginRules(_import),
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        react: "readonly",
        jsx: "readonly",
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },
      },
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: false,
        },
      ],

      "react/react-in-jsx-scope": "off",
      quotes: ["error", "double"],
      semi: ["error", "never"],

      "import/no-unresolved": [
        2,
        {
          commonjs: true,
          amd: true,
        },
      ],

      "import/named": 2,
      "import/namespace": 2,
      "import/default": 2,
      "import/export": 2,
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      "no-undef": "off",
    },
  },
]
