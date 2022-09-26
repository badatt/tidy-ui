// screens https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

const defaultBase = {
  font: {
    bold: 700,
    family:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif`',
    light: 200,
    medium: 400,
    mono: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
    regular: 500,
    size: '1rem',
  },
  layout: {
    radius: '0.5rem',
    screens: {
      lg: {
        breakpoint: 1200,
      },
      md: {
        breakpoint: 992,
      },
      sm: {
        breakpoint: 768,
      },
      xl: {
        breakpoint: 1400,
      },
      xs: {
        breakpoint: 576,
      },
    },
    shadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(15, 23, 42, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px',
  },
  typography: {
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
      marginBottom: '0.5rem',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.01071em',
      lineHeight: 1.43,
      marginBottom: '0.4375rem',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      letterSpacing: '0.03333em',
      lineHeight: 1.66,
      marginBottom: '0.375rem',
    },
    h1: {
      fontSize: '6rem',
      fontWeight: 300,
      letterSpacing: '-0.01562em',
      lineHeight: 1.167,
      marginBottom: '3rem',
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
      marginBottom: '1.875rem',
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.167,
      marginBottom: '1.5rem',
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
      letterSpacing: '0.00735em',
      lineHeight: 1.235,
      marginBottom: '1.0625rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.334,
      marginBottom: '0.75rem',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      lineHeight: 1.6,
      marginBottom: '0.325rem',
    },
    hero: {
      fontSize: '6rem',
      fontWeight: 300,
      letterSpacing: '-0.01562em',
      lineHeight: 1.167,
      marginBottom: '3rem',
    },
    p: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
      marginBottom: '0.5rem',
    },
    span: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.01071em',
      lineHeight: 1.43,
      marginBottom: '0.4375rem',
    },
    subtitle1: {
      fontSize: '2.125rem',
      fontWeight: 400,
      letterSpacing: '0.00735em',
      lineHeight: 1.235,
      marginBottom: '1.0625rem',
    },
    subtitle2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.334,
      marginBottom: '0.75rem',
    },
    title1: {
      fontSize: '3.75rem',
      fontWeight: 300,
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
      marginBottom: '1.875rem',
    },
    title2: {
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.167,
      marginBottom: '1.5rem',
    },
  },
};

export { defaultBase };
