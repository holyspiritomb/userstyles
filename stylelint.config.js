/** @type {import('stylelint').Config} */
import defineConfig from 'stylelint-define-config';
/// <reference types="@stylelint-types/stylelint-stylus">
/// <reference types="@stylelint-types/stylelint-order">

export default defineConfig ({
  extends: [
    "stylelint-config-standard",
    // "stylelint-stylus/standard",
    // "stylelint-config-standard-less"
  ],
  plugins: [
    // "stylelint-less",
    "stylelint-use-nesting",
    "stylelint-declaration-block-no-ignored-properties",
    'stylelint-order',
    'stylelint-stylus'
  ],
  rules: {
    // "at-rule-disallowed-list": ["import"],
    "at-rule-empty-line-before":null,
    "at-rule-no-unknown": null,
    "color-function-notation":null,
    "color-hex-length": null,
    "color-no-invalid-hex":true,
    "csstools/use-nesting": "always",
    "comment-empty-line-before": null,
    "custom-property-no-missing-var-function": true,
    "declaration-no-important":null,
    "function-calc-no-unspaced-operator":true,
    "function-linear-gradient-no-nonstandard-direction": null,
    "function-url-quotes": "always",
    "length-zero-no-unit":null,
    // "less/color-no-invalid-hex":true,
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
    "stylus/indentation": 4,
    "value-keyword-case": null,
    "value-no-vendor-prefix":null,
  }
});
