import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Actions } from '../actions';
import { initializer, initialState, mainReducer } from '../reducers';
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
  const [state, dispatch] = React.useReducer(mainReducer, initialState, initializer);
  const value = React.useMemo(() => ({ theme, ...rest }), [theme, rest]);

  React.useEffect(() => {
    dispatch({
      payload: {
        theme,
      },
      type: Actions.Page.SetTheme,
    });
  }, [theme]);

  return (
    <Provider value={{ ...value, dispatch, state }}>
      <ThemeProvider theme={theme} {...rest}>
        {toaster ? React.cloneElement(toaster, {}, children) : children}
      </ThemeProvider>
    </Provider>
  );
};

export { Consumer as TidyUiConsumer, TidyUiProvider };
