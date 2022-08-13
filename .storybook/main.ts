module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    //'@storybook/addon-interactions',
    '@storybook/addon-measure',
    'storybook-addon-pseudo-states',
    '@storybook/addon-storysource',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
  ],
  core: {
    builder: 'webpack5',
  },
};
