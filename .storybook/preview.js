import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { orchidLight, orchidDark } from '../packages/theme';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#edf1f7',
      },
      {
        name: 'dark',
        value: '#151a30',
      },
    ],
  },
};

const themes = [orchidLight, orchidDark];
addDecorator(withThemesProvider(themes), ThemeProvider);
