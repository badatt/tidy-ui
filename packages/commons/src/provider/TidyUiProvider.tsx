import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createInitialState, initializer, mainReducer } from '../reducers';
import { orchidLight } from '../theme';
import { TidyUiContext } from './context';
import { ITidyUiProviderProps } from './types';

const { Consumer, Provider } = TidyUiContext;

/**
 * Custom TidyUiProvider
 *
 * @param {ITidyUiProviderProps} props TidyUiProvider props
 * @returns {JSX.Element} JSX Element
 */
const TidyUiProvider = (props: ITidyUiProviderProps): JSX.Element => {
  const { children, theme, toaster, ...rest } = props;
  const [state, dispatch] = React.useReducer(mainReducer, createInitialState(theme || orchidLight), initializer);
  const value = React.useMemo(() => ({ theme, ...rest }), [theme, rest]);

  return (
    <Provider value={{ ...value, dispatch, state }}>
      <ThemeProvider theme={{ ...state.pageState.theme }} {...rest}>
        {toaster ? React.cloneElement(toaster, {}, children) : children}
      </ThemeProvider>
    </Provider>
  );
};

export { Consumer as TidyUiConsumer, TidyUiProvider };
