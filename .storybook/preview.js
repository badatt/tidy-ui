import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { orchidLight, orchidDark } from '@tidy-ui/theme/src';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f8fafc',
      },
      {
        name: 'dark',
        value: '#0f172a',
      },
    ],
  },
};

const themes = [orchidLight, orchidDark];
addDecorator(withThemesProvider(themes), ThemeProvider);
