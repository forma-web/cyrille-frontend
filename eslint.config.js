import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    indent: 2,
    semi: true,
    quotes: 'single',
    overrides: {
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  formatters: {
    css: true,
  },
  rules: {
    'import/first': 'off',
  },
});
