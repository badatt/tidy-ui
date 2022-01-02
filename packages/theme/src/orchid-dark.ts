import { defaultBase } from './base';
import { ITidyUITheme } from './types/theme';
import { purple, pink, neutral, blue, green, amber, red } from './colors';
import { createColor } from './utils';

export const theme: ITidyUITheme = {
  name: 'Orchid Dark',
  isDark: true,
  ...defaultBase,
  palette: {
    background: {
      card: 'hsla(217, 33%, 17%, 1)',
      paper: 'hsla(217, 33%, 17%, 1)',
      default: 'hsla(222, 47%, 11%, 1)',
    },
    divider: 'hsla(215, 16%, 47%, 1)',
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
      primary: 'hsla(210, 40%, 96%, 1)',
      secondary: 'hsla(0, 0%, 100%, 0.7)',
      disabled: 'hsla(0, 0%, 100%, 0.5)',
    },
  },
};
