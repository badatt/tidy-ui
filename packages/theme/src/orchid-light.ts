import { defaultBase } from './base';
import { ITidyUITheme } from './types/theme';

export const theme: ITidyUITheme = {
  name: 'Orchid Light',
  ...defaultBase,
  palette: {
    background: {
      card: 'hsl(0, 0%, 100%)',
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(216, 38%, 95%)',
    },
    divider: 'hsl(0, 0%, 88%)',
    primary: {
      main: 'hsl(239, 84%, 67%)',
      light: 'hsl(230, 94%, 82%)',
      dark: 'hsl(245, 58%, 51%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    secondary: {
      main: 'hsl(330, 81%, 60%)',
      light: 'hsl(327, 87%, 82%)',
      dark: 'hsl(335, 78%, 42%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    text: {
      primary: 'hsla(0, 0%, 0%, 0.87)',
      secondary: 'hsla(0, 0%, 0%, 0.6)',
      disabled: 'hsla(0, 0%, 0%, 0.38)',
    },
  },
};
