import { defaultBase } from './base';
import { ITidyUITheme } from '@tidy-ui/types';
import { purple, pink, neutral, blue, green, amber, red } from './colors';
import { createColor } from './utils';

export const theme: ITidyUITheme = {
  name: 'Orchid Light',
  isDark: false,
  ...defaultBase,
  palette: {
    background: {
      card: 'hsla(0, 100%, 100%, 1)',
      paper: 'hsla(0, 100%, 100%, 1)',
      default: 'hsla(216, 56%, 98%, 1)',
    },
    divider: 'hsla(214, 32%, 91%, 1)',
    /**
     * colors taken from tailwind css https://tailwindcss.com/docs/customizing-colors
     */
    // Purple
    major: createColor(purple),
    // Pink
    minor: createColor(pink),
    // Neutral
    neutral: createColor(neutral),
    // Blue
    info: createColor(blue),
    // Green
    success: createColor(green),
    // Amber
    warning: createColor(amber),
    // Red
    danger: createColor(red),
    text: {
      primary: 'hsla(217, 33%, 17%, 1)',
      secondary: 'hsla(0, 0%, 0%, 0.6)',
      disabled: 'hsla(0, 0%, 0%, 0.38)',
    },
  },
};
