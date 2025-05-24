import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks';
import { IStyledThemeWrapper } from './types';

/**
 * StyledThemeWrapper component
 * This component wraps its children with a styled-components ThemeProvider.
 * It also allows for an optional toaster component to be passed in, which will wrap the children.
 * It uses the theme from the useTheme hook to provide the current theme context.
 * 
 * @param {IStyledThemeWrapper} props - The props for the StyledThemeWrapper component.
 * @returns {React.ReactElement} A React element that provides the theme context to its children.
 */
const StyledThemeWrapper = (props: IStyledThemeWrapper): React.ReactElement => {
  const { children, toaster, ...rest } = props;
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme} {...rest}>
      {toaster ? React.cloneElement(toaster, {}, children) : children}
    </ThemeProvider>
  );
};

export {StyledThemeWrapper};