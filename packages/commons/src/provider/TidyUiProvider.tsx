import React, { useMemo, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { initializer, mainReducer } from '../reducers';
import { initialState, TidyUiContext } from './context';
import { ITidyUiProviderProps } from './types';

const { Consumer, Provider } = TidyUiContext;

/**
 * Custom TidyUiProvider
 *
 * @param {ITidyUiProviderProps} props TidyUiProvider props
 * @returns {JSX.Element} JSX Element
 */
const TidyUiProvider = (props: ITidyUiProviderProps): JSX.Element => {
  const { children, theme, ...rest } = props;
  const [state, dispatch] = useReducer(mainReducer, initialState, initializer);
  const value = useMemo(() => ({ theme, ...rest }), [theme, rest]);

  return (
    <Provider value={{ ...value, dispatch, state }}>
      <ThemeProvider theme={theme} {...rest}>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export { Consumer as TidyUiConsumer, TidyUiProvider };
