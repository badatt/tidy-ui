module.exports = {
  stories: ['../packages/*/stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-styled-component-theme/dist/preset',
    'storybook-dark-mode',
  ],
};
