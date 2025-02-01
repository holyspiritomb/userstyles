/** @type {import('stylelint').Config} */
import defineConfig from 'stylelint-define-config';

export default defineConfig ({
  extends: [
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-use-nesting",
    "stylelint-declaration-block-no-ignored-properties",
    'stylelint-order',
  ],
  rules: {
    "alpha-value-notation": null,
    "at-rule-empty-line-before":null,
    "at-rule-no-vendor-prefix": null,
    "color-function-notation":null,
    "color-hex-length": null,
    "color-no-invalid-hex":true,
    "comment-empty-line-before": null,
    "csstools/use-nesting": "always",
    "custom-property-empty-line-before": null,
    "custom-property-no-missing-var-function": true,
    "declaration-no-important":null,
    "function-calc-no-unspaced-operator":true,
    "function-linear-gradient-no-nonstandard-direction": null,
    "function-url-quotes": "always",
    "length-zero-no-unit":null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
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
  },
  overrides: [
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
