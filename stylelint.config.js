// @ts-check
import defineConfig from 'stylelint-define-config';
/// <reference types="@stylelint-types/stylelint-stylistic">
/// <reference types="@stylelint-types/stylelint-stylus">
/// <reference types="@stylelint-types/stylelint-order">

export default defineConfig ({
  extends: [
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-use-nesting",
    "stylelint-declaration-block-no-ignored-properties",
    'stylelint-order',
    "@stylistic/stylelint-plugin"
  ],
  rules: {
    "alpha-value-notation": null,
    "at-rule-empty-line-before":null,
    "at-rule-no-vendor-prefix": null,
    "block-no-empty": null,
    "color-function-notation":null,
    "color-hex-length": null,
    "color-no-invalid-hex":true,
    "comment-empty-line-before": null,
    "custom-property-pattern": null,
    // "csstools/use-nesting": "always",
    "custom-property-empty-line-before": null,
    "custom-property-no-missing-var-function": true,
    "declaration-no-important":null,
    "function-calc-no-unspaced-operator":true,
    "function-linear-gradient-no-nonstandard-direction": null,
    "function-url-quotes": "always",
    "import-notation": null,
    "length-zero-no-unit":null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "no-invalid-position-at-import-rule": null,
    "plugin/declaration-block-no-ignored-properties": true,
    "property-no-vendor-prefix": null,
    "rule-empty-line-before": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern":null,
    "selector-id-pattern":null,
    "selector-no-qualifying-type": null,
    "selector-no-vendor-prefix": null,
    "value-keyword-case": null,
    "value-no-vendor-prefix":null,
    "@stylistic/string-quotes": null,
    "@stylistic/max-line-length": null,
  },
  overrides: [
    {
      files: "**/*.user.css",
      extends: [
        "@stylistic/stylelint-config",
      ],
      rules: {
        "@stylistic/indentation": 4,
      }
    },
    {
      files: "**/*.less",
      customSyntax: "postcss-less",
      ignoreDisables: true,
      extends: [ "stylelint-config-standard-less"],
      plugins: ["stylelint-less",],
      rules: {
        "at-rule-no-unknown": null,
        "less/color-no-invalid-hex": true,
        "less/no-duplicate-variables": null,
        "no-duplicate-selectors": null,
        // "at-rule-allowed-list": ["var"],
      }
    },
    {
      files: "**/*.styl",
      plugins: ["stylelint-stylus"],
      rules: {
        "stylus/indentation": 4,
      }
    }
  ]
});
