import { defaultBase } from './base';
import { ITidyUITheme } from './types/theme';

export const theme: ITidyUITheme = {
  name: 'Orchid Light',
  ...defaultBase,
  palette: {
    background: {
      card: '#ffffff',
      paper: '#ffffff',
      default: '#f8fafd',
    },
    divider: '#e2e8f0',
    /**
     * colors taken from tailwind css https://tailwindcss.com/docs/customizing-colors
     * main = 600
     * light = 400
     * dark = 800
     * contrastText = 100
     */
    // Purple
    primary: {
      main: '#9333ea',
      light: '#c084fc',
      dark: '#6b21a8',
      contrastText: '#f3e8ff',
    },
    // Pink
    secondary: {
      main: '#db2777',
      light: '#f472b6',
      dark: '#9d174d',
      contrastText: '#fce7f3',
    },
    // Neutral
    neutral: {
      main: '#525252',
      light: '#a3a3a3',
      dark: '#262626',
      contrastText: '#f5f5f5',
    },
    // Blue
    info: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1e40af',
      contrastText: '#dbeafe',
    },
    // Green
    success: {
      main: '#16a34a',
      light: '#4ade80',
      dark: '#166534',
      contrastText: '#dcfce7',
    },
    // Amber
    warning: {
      main: '#d97706',
      light: '#fbbf24',
      dark: '#92400e',
      contrastText: '#fef3c7',
    },
    // Red
    danger: {
      main: '#dc2626',
      light: '#f87171',
      dark: '#991b1b',
      contrastText: '#fee2e2',
    },
    text: {
      primary: '#1e293b',
      secondary: 'hsla(0, 0%, 0%, 0.6)',
      disabled: 'hsla(0, 0%, 0%, 0.38)',
    },
  },
};
