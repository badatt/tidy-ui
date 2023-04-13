module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    //'@storybook/addon-interactions',
    '@storybook/addon-measure',
    'storybook-addon-pseudo-states',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
};
