// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'rgb(146, 52, 234)',
  colorSecondary: 'rgb(219, 41, 121)',

  // UI
  appBorderRadius: 4,

  // Typography
  fontCode: 'monospace',

  // Form colors
  inputBorderRadius: 4,

  brandTitle: 'Tidy UI',
  brandUrl: 'https://github.com/badatt/tidy-ui',
  brandImage: 'https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/storybook-logo.png',
});
