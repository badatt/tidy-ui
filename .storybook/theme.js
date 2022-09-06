// .storybook/YourTheme.js

import { create, themes } from '@storybook/theming';

const base = {
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
};

export const dark = create({
  base: 'dark',
  ...base,
});

export const light = create({
  base: 'light',
  ...base,
});
