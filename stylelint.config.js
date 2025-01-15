/** @type {import('stylelint').Config} */

export default {
  extends: ["stylelint-config-standard"],
  plugins: [
    "stylelint-less",
    "stylelint-use-nesting",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "color-no-invalid-hex":true,
    "less/color-no-invalid-hex":true,
    "csstools/use-nesting": "always",
    "at-rule-empty-line-before":null,
    "color-function-notation":null,
    "color-hex-length": null,
    "custom-property-no-missing-var-function": true,
    "declaration-no-important":null,
    "function-calc-no-unspaced-operator":true,
    "function-linear-gradient-no-nonstandard-direction": null,
    "function-url-quotes": "always",
    "length-zero-no-unit":null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "no-invalid-position-at-import-rule": null,
    "rule-empty-line-before": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern":null,
    "selector-id-pattern":null,
    "selector-no-qualifying-type": false,
    "value-no-vendor-prefix":null,
    "plugin/declaration-block-no-ignored-properties": true,
  }
};
