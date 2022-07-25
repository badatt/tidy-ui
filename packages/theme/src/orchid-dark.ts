import { defaultBase } from '.';
import { ITidyUITheme } from '@tidy-ui/types';
import { amber, blue, green, neutral, pink, purple, red } from './colors';
import { createColor } from '.';

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
    // Red
    danger: createColor(red),
    divider: 'hsla(215, 16%, 47%, 1)',
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
    text: {
      disabled: 'hsla(0, 0%, 100%, 0.5)',
      primary: 'hsla(210, 40%, 96%, 1)',
      secondary: 'hsla(0, 0%, 100%, 0.7)',
    },
    // Amber
    warning: createColor(amber),
  },
};
