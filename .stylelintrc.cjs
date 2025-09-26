const bemPattern =
  '^.[adv|adyen]*(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$';

module.exports = {
  syntax: 'scss',
  extends: ['stylelint-config-recommended', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'property-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,

    'scss/at-rule-no-unknown': true,

    'selector-class-pattern': [bemPattern, { resolveNestedSelectors: true }],
    'scss/at-mixin-pattern': bemPattern,
    'scss/dollar-variable-pattern': bemPattern,

    'scss/load-partial-extension': null,
  },
};
