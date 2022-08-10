import React, { createContext, Key, ReactNode, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { ITidyUITheme } from '@tidy-ui/types';
import usePortal from '../hooks/usePortal';

/**
 *
 */
export interface ITidyUiProviderProps {
  /**
   *
   */
  children?: ReactNode;

  /**
   *
   */
  key?: Key;
  /**
   *
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  /**
   *
   */
  theme?: ITidyUITheme;
}

const TidyUiContext = createContext<ITidyUiProviderProps>({});

const { Consumer, Provider } = TidyUiContext;

/**
 * Custom TidyUiProvider
 *
 * @param {ITidyUiProviderProps} props TidyUiProvider props
 * @returns {JSX.Element} JSX Element
 */
const TidyUiProvider = (props: ITidyUiProviderProps): JSX.Element => {
  const { children, theme, ...rest } = props;

  const { Portal } = usePortal();

  console.log('Calling custom provider');

  const value = useMemo(() => ({ theme, ...rest }), [theme, rest]);

  return (
    <ThemeProvider theme={theme} {...rest}>
      <Provider value={value}>
        {children}
        <Portal>
          <div>portal</div>
        </Portal>
      </Provider>
    </ThemeProvider>
  );
};

export { Consumer as TidyUiConsumer, TidyUiContext, TidyUiProvider };
