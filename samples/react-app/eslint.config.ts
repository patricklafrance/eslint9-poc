import js from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHookPlugin from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    // node_modules folder is ignored by default
    globalIgnores(["dist"]),
    {
        // -> CORE

        files: ["**/*.[jt]s?(x)", "**/*.[cm]js"],
        plugins: {
            js,
            import: importPlugin
        },
        extends: [
            js.configs.recommended
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2024,
                ...globals.node,
                ...globals.commonjs
            }
        },
        rules: {
            // @eslint/js/recommended overwrite
            "no-cond-assign": ["error", "except-parens"],
            "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
            "no-prototype-builtins": "off",

            // https://eslint.org/docs/rules
            // Extra eslint rules

            // Possible Problems
            "array-callback-return": "error",
            "no-self-compare": "error",
            "no-template-curly-in-string": "error",
            "no-use-before-define": [
                "error",
                {
                    functions: false,
                    classes: false,
                    variables: false
                }
            ],

            // Suggestions
            "no-array-constructor": "warn",
            "no-caller": "warn",
            "no-eval": "warn",
            "no-extend-native": "warn",
            "no-extra-bind": "warn",
            "no-extra-label": "warn",
            "no-implied-eval": "warn",
            "no-iterator": "warn",
            "no-label-var": "warn",
            "no-lone-blocks": "warn",
            "no-loop-func": "warn",
            "no-multi-str": "warn",
            "no-new-func": "warn",
            "no-new-object": "warn",
            "no-new-wrappers": "warn",
            "no-octal-escape": "warn",
            "no-useless-computed-key": "warn",
            "no-useless-concat": "warn",
            "no-useless-constructor": "warn",
            "no-script-url": "warn",
            "no-sequences": "warn",
            "no-throw-literal": "warn",
            "prefer-const": "warn",
            "no-var": "warn",
            curly: "warn",
            "no-shadow": "warn",
            "no-restricted-properties": "warn",
            "no-unneeded-ternary": "warn",
            "no-param-reassign": "warn",
            eqeqeq: ["warn", "smart"],
            "no-mixed-operators": [
                "warn",
                {
                    groups: [
                        ["&", "|", "^", "~", "<<", ">>", ">>>"],
                        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                        ["&&", "||"],
                        ["in", "instanceof"]
                    ],
                    allowSamePrecedence: false
                }
            ],
            "no-restricted-syntax": ["error", "WithStatement"],
            "no-restricted-globals": ["error"],
            "no-useless-rename": [
                "warn",
                {
                    ignoreDestructuring: false,
                    ignoreImport: false,
                    ignoreExport: false
                }
            ],
            strict: ["warn", "never"],
            "no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true
                }
            ],

            // Layout & Formatting
            // "no-native-reassign": "warn", // deprecated replaced by no-global-assign, deja ds recommended
            // "no-negated-in-lhs": "warn", // deprecated replaced by no-unsafe-negation, deja ds recommended
            "padding-line-between-statements": [
                "warn",
                { blankLine: "always", prev: "*", next: "return" }
            ],

            "rest-spread-spacing": ["warn", "never"],
            "unicode-bom": ["warn", "never"],
            "comma-spacing": ["warn", { before: false, after: true }],
            "keyword-spacing": ["warn", { before: true, after: true }],
            "arrow-spacing": ["warn", { before: true, after: true }],
            "space-before-blocks": ["warn", "always"],
            "space-in-parens": ["warn", "never"],
            "padded-blocks": ["warn", "never"],
            "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
            "new-parens": "warn",
            "no-whitespace-before-property": "warn",
            "no-multi-spaces": "warn",
            "no-multiple-empty-lines": "warn",
            "space-infix-ops": "warn",
            "max-len": ["warn", { tabWidth: 4, code: 300 }],
            indent: [
                "warn",
                4,
                {
                    SwitchCase: 1,
                    CallExpression: { arguments: "first" }
                }
            ],
            semi: ["warn", "always"],
            quotes: ["warn", "double"],
            "comma-dangle": ["warn", "never"],
            "object-curly-spacing": ["warn", "always"],
            "dot-location": ["warn", "property"],
            "arrow-parens": ["warn", "as-needed"],

            // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
            "import/no-amd": "error",
            "import/no-webpack-loader-syntax": "error",
            "import/no-self-import": "error",
            "import/newline-after-import": "warn",
            "import/no-duplicates": "warn"
        }
    },
    {
        // -> TypeScript

        files: ["**/*.ts?(x)"],
        plugins: {
            "@stylistic": stylisticPlugin
        },
        extends: [
            js.configs.recommended,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            tseslint.configs.recommended as any
        ],
        languageOptions: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parser: tseslint.parser as any,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            // @typescript-eslint/recommended disables
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "with-single-extends", allowObjectTypes: "never" }],

            // Additional rules we want
            "@typescript-eslint/consistent-type-definitions": "warn",
            "@typescript-eslint/explicit-member-accessibility": ["warn", { accessibility: "no-public" }],
            "@typescript-eslint/method-signature-style": "warn",
            "comma-dangle":"off",
            "no-dupe-class-members":"off",
            "@typescript-eslint/no-dupe-class-members":"error",
            "no-loop-func":"off",
            "@typescript-eslint/no-loop-func":"warn",
            "no-shadow":"off",
            "@typescript-eslint/no-shadow":"warn",
            "no-unused-expressions":"off",
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true
                }
            ],
            "no-use-before-define":"off",
            "no-useless-constructor":"off",
            "@typescript-eslint/no-useless-constructor":"warn",
            "object-curly-spacing":"off",
            "quotes":"off",
            "@stylistic/quotes": ["warn", "double"],
            "@typescript-eslint/no-import-type-side-effects": "warn",
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                {
                    "prefer": "type-imports",
                    "disallowTypeAnnotations": true,
                    "fixStyle": "inline-type-imports"
                }
            ],

            "@stylistic/member-delimiter-style": "warn",
            "@stylistic/comma-dangle": ["warn", "never"],
            "indent":"off",
            "@stylistic/indent": [
                "warn",
                4,
                {
                    SwitchCase: 1,
                    CallExpression: { arguments: "first" }
                }
            ],
            "@stylistic/object-curly-spacing": ["warn", "always"],
            "semi":"off",
            "@stylistic/semi": ["warn", "always"]
        }
    },
    {
        // -> React

        files: ["**/*.[jt]sx"],
        extends: [
            reactPlugin.configs.flat.recommended,
            reactHookPlugin.configs["recommended-latest"]
        ],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            // https://eslint.org/docs/rules
            "jsx-quotes": ["warn", "prefer-double"],

            // react/recommended overrides
            "react/jsx-no-duplicate-props": ["warn", { ignoreCase: true }],
            "react/jsx-no-undef": ["warn", { allowGlobals: true }],

            // react/recommended disables
            "react/react-in-jsx-scope": "off",
            "react/display-name": "off",
            "react/no-unescaped-entities": "off",
            "react/prop-types": "off",
            "react/jsx-key": "off",

            // extra react rules
            "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
            "react/jsx-pascal-case": [
                "warn",
                {
                    allowAllCaps: true,
                    ignore: []
                }
            ],
            "react/no-typos": "error",
            "react/style-prop-object": "warn",
            "react/button-has-type": "warn",
            "react/destructuring-assignment": [
                "warn",
                "always",
                { ignoreClassFields: true }
            ],
            "react/jsx-boolean-value": ["warn", "never"],
            "react/default-props-match-prop-types": "warn",
            "react/no-unused-state": "warn",
            "react/no-array-index-key": "warn",
            "react/no-access-state-in-setstate": "warn",
            "react/jsx-filename-extension": ["warn", { "extensions": [".jsx", ".tsx"] }],
            "react/jsx-curly-brace-presence": "warn",
            "react/no-unused-prop-types": [
                "warn",
                { customValidators: [], skipShapeProps: true }
            ],

            "react/jsx-closing-bracket-location": [1, "line-aligned"],
            "react/jsx-tag-spacing": ["warn", { beforeSelfClosing: "always" }],
            "react/jsx-max-props-per-line": [
                "warn",
                { maximum: 1, when: "multiline" }
            ],
            "react/jsx-curly-spacing": ["warn", { children: true, when: "never" }]
        }
    }
]);
