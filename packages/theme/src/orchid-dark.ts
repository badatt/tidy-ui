import { defaultBase } from './base';
import { ITidyUITheme } from './types/theme';

export const theme: ITidyUITheme = {
  name: 'Orchid Dark',
  ...defaultBase,
  palette: {
    background: {
      card: '#1e293b',
      paper: '#1e293b',
      default: '#0f172a',
    },
    divider: '#64748b',
    /**
     * colors taken from tailwind css https://tailwindcss.com/docs/customizing-colors
     * main = 600
     * light = 400
     * dark = 800
     */
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
    neutral: {
      main: 'hsl(330, 81%, 60%)',
      light: 'hsl(327, 87%, 82%)',
      dark: 'hsl(335, 78%, 42%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    info: {
      main: 'hsl(239, 84%, 67%)',
      light: 'hsl(230, 94%, 82%)',
      dark: 'hsl(245, 58%, 51%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    success: {
      main: 'hsl(239, 84%, 67%)',
      light: 'hsl(230, 94%, 82%)',
      dark: 'hsl(245, 58%, 51%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    warning: {
      main: 'hsl(239, 84%, 67%)',
      light: 'hsl(230, 94%, 82%)',
      dark: 'hsl(245, 58%, 51%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    danger: {
      main: 'hsl(239, 84%, 67%)',
      light: 'hsl(230, 94%, 82%)',
      dark: 'hsl(245, 58%, 51%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: 'hsla(0, 0%, 100%, 0.7)',
      disabled: 'hsla(0, 0%, 100%, 0.5)',
    },
  },
};
