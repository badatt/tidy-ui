import { ITidyUIBaseTheme } from '@tidy-ui/types';

export const defaultBase: ITidyUIBaseTheme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  layout: {
    radius: '0.5rem',
    shadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(15, 23, 42, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px',
  },
  typography: {
    fontSize: '0.875rem',
    fontWeightLight: 200,
    fontWeightMedium: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '6rem',
      fontWeight: 300,
      letterSpacing: '-0.01562em',
      lineHeight: 1.167,
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.167,
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
      letterSpacing: '0.00735em',
      lineHeight: 1.235,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.334,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      lineHeight: 1.6,
    },
    hero: {
      fontSize: '6rem',
      fontWeight: 300,
      letterSpacing: '-0.01562em',
      lineHeight: 1.167,
    },
    title1: {
      fontSize: '3.75rem',
      fontWeight: 300,
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    title2: {
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.167,
    },
    subtitle1: {
      fontSize: '2.125rem',
      fontWeight: 400,
      letterSpacing: '0.00735em',
      lineHeight: 1.235,
    },
    subtitle2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.334,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.01071em',
      lineHeight: 1.43,
    },
    p: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      letterSpacing: '0.03333em',
      lineHeight: 1.66,
    },
    span: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.01071em',
      lineHeight: 1.43,
    },
    code: {
      fontSize: '0.75rem',
      fontWeight: 400,
      letterSpacing: '0.03333em',
      lineHeight: 1.66,
    },
  },
};
