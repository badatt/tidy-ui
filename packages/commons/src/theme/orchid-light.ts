import { ITidyUITheme } from '@tidy-ui/types';
import { defaultBase } from './base';
import { color } from './colors';
import { createColor } from './utils';

const paletteVariant = {
  // Red
  danger: createColor(color.red),

  // Blue
  info: createColor(color.blue),
  /**
   * colors taken from tailwind css https://tailwindcss.com/docs/customizing-colors
   */
  // Purple
  major: createColor(color.purple),
  // Pink
  minor: createColor(color.pink),
  // Neutral
  neutral: createColor(color.neutral),
  // Green
  success: createColor(color.green),
  // Amber
  warning: createColor(color.amber),
};

const theme: ITidyUITheme = {
  isDark: false,
  name: 'Orchid Light',
  ...defaultBase,
  palette: {
    background: {
      card: 'hsla(0, 100%, 100%, 1)',
      default: 'hsla(216, 56%, 98%, 1)',
      paper: 'hsla(0, 100%, 100%, 1)',
    },
    divider: 'hsla(0, 0%, 0%, 0.12)',
    ...paletteVariant,
    text: {
      disabled: 'hsla(0, 0%, 0%, 0.38)',
      primary: 'hsla(217, 33%, 17%, 1)',
      secondary: 'hsla(0, 0%, 0%, 0.6)',
    },
  },
};

export { paletteVariant, theme };
