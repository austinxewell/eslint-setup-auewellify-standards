export const eslintRules = `
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

const INDENT_SPACES = 4;

export default withNuxt(
    {
        files: ["**/*.{ts,vue}"],
        rules: {
            "no-undef": "off",
            "func-style": ["error", "declaration"],
            "space-before-function-paren": ["error", "never"],
            "comma-spacing": ["error", { before: false, after: true }],
            "id-length": [
                "error",
                {
                    min: 3,
                    properties: "never",
                    exceptions: ["i", "j", "k", "to", "id", "_"],
                },
            ],
            "max-statements-per-line": ["error", { max: 1 }],
            "one-var": ["error", "never"],
            "one-var-declaration-per-line": ["error", "always"],
            camelcase: [
                "error",
                {
                    properties: "never",
                    ignoreDestructuring: true,
                    ignoreImports: false,
                    ignoreGlobals: true,
                },
            ],
            "no-var": "error",
            "prefer-const": "error",
            "no-magic-numbers": [
                "error",
                {
                    ignore: [1, 0, -1],
                    ignoreArrayIndexes: true,
                    ignoreDefaultValues: true,
                    enforceConst: true,
                },
            ],
            "space-infix-ops": ["error", { int32Hint: false }],
            "object-shorthand": ["error", "always", { avoidQuotes: true }],
            "object-property-newline": "error",
            "object-curly-newline": ["error", { multiline: true }],
            "object-curly-spacing": ["error", "always"],
            "no-unneeded-ternary": "error",
            "multiline-ternary": ["error", "always-multiline"],
            "space-unary-ops": ["error"],
            "prefer-template": "error",
            curly: ["error", "multi", "consistent"],
            "key-spacing": ["error"],
            "prefer-exponentiation-operator": "error",
            eqeqeq: ["error", "always", { null: "ignore" }],
            "no-object-constructor": "error",
            "no-array-constructor": "error",
            "no-prototype-builtins": "error",
            "no-proto": "error",
            "no-param-reassign": ["error", { props: false }],
            "dot-notation": "error",
            "no-mixed-operators": ["error", { allowSamePrecedence: true }],
            "operator-assignment": ["error", "always"],
            "no-cond-assign": ["error", "always"],
            "function-call-argument-newline": ["error", "consistent"],
            "func-call-spacing": ["error", "never"],
            "comma-dangle": ["error", "never"],
            "linebreak-style": 0,
            indent: ["error", INDENT_SPACES, { SwitchCase: 1 }],
            quotes: ["error", "single", { avoidEscape: true }],
            semi: ["error", "never"],
            "vue/component-name-in-template-casing": "off",
            "vue/block-order": [
                "error",
                {
                    order: ["template", "script", "style"],
                },
            ],
            "vue/require-prop-types": "error",
            "vue/require-default-prop": "error",
            "vue/component-api-style": ["error", ["script-setup"]],
            "vue/no-dupe-keys": ["off"],
            "vue/v-on-style": ["error", "shorthand"],
            "vue/v-bind-style": ["error", "shorthand"],
            "vue/v-slot-style": ["error", "shorthand"],
            "vue/html-indent": [
                "error",
                INDENT_SPACES,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                },
            ],
            "vue/html-self-closing": [
                "error",
                {
                    html: {
                        void: "always",
                        normal: "always",
                        component: "always",
                    },
                    svg: "always",
                    math: "always",
                },
            ],
            "vue/no-static-inline-styles": ["error", { allowBinding: true }],
            "vue/attributes-order": [
                "error",
                {
                    order: [
                        "DEFINITION",
                        "LIST_RENDERING",
                        "CONDITIONALS",
                        "RENDER_MODIFIERS",
                        "GLOBAL",
                        ["UNIQUE", "SLOT"],
                        "TWO_WAY_BINDING",
                        "OTHER_DIRECTIVES",
                        "OTHER_ATTR",
                        "EVENTS",
                        "CONTENT",
                    ],
                    alphabetical: false,
                },
            ],
            "vue/html-closing-bracket-newline": [
                "error",
                {
                    singleline: "never",
                    multiline: "always",
                },
            ],
            "vue/max-attributes-per-line": [
                "error",
                {
                    singleline: { max: 2 },
                    multiline: { max: 1 },
                },
            ],
            "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
            "vue/no-multi-spaces": ["error", { ignoreProperties: false }],
            "vue/mustache-interpolation-spacing": ["error", "always"],
            "vue/html-quotes": ["error", "double", { avoidEscape: false }],
            "vue/no-side-effects-in-computed-properties": ["error"],
            "vue/component-definition-name-casing": ["error", "PascalCase"],
            "no-unreachable": "error",
            complexity: ["warn", { max: 10 }],
        },
    },
);
`
