import { ITidyUITheme } from '@tidy-ui/types';
import { defaultBase } from './base';
import { paletteVariant } from './orchid-light';

export const theme: ITidyUITheme = {
  isDark: true,
  name: 'Orchid Dark',
  ...defaultBase,
  palette: {
    background: {
      card: 'hsla(217, 33%, 17%, 1)',
      default: 'hsla(222, 47%, 11%, 1)',
      paper: 'hsla(217, 33%, 17%, 1)',
    },
    divider: 'hsla(0, 0%, 100%, 0.12)',
    ...paletteVariant,
    text: {
      disabled: 'hsla(0, 0%, 100%, 0.5)',
      primary: 'hsla(210, 40%, 96%, 1)',
      secondary: 'hsla(0, 0%, 100%, 0.7)',
    },
  },
};
