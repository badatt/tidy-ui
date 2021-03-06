import { ITidyUITheme } from '@tidy-ui/types';
import { amber, blue, green, neutral, pink, purple, red } from './colors';
import { createColor, defaultBase } from '.';

export const paletteVariant = {
  // Red
  danger: createColor(red),
  divider: 'hsla(214, 32%, 91%, 1)',
  // Blue
  info: createColor(blue),
  /**
   * colors taken from tailwind css https://tailwindcss.com/docs/customizing-colors
   */
  // Purple
  major: createColor(purple),
  // Pink
  minor: createColor(pink),
  // Neutral
  neutral: createColor(neutral),
  // Green
  success: createColor(green),
  // Amber
  warning: createColor(amber),
};

export const theme: ITidyUITheme = {
  isDark: false,
  name: 'Orchid Light',
  ...defaultBase,
  palette: {
    background: {
      card: 'hsla(0, 100%, 100%, 1)',
      default: 'hsla(216, 56%, 98%, 1)',
      paper: 'hsla(0, 100%, 100%, 1)',
    },
    ...paletteVariant,
    text: {
      disabled: 'hsla(0, 0%, 0%, 0.38)',
      primary: 'hsla(217, 33%, 17%, 1)',
      secondary: 'hsla(0, 0%, 0%, 0.6)',
    },
  },
};
