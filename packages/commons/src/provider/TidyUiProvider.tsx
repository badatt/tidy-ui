import React from 'react';
import { createInitialState, initializer, mainReducer } from '../reducers';
import { orchidLight } from '../theme';
import { TidyUiContext } from './context';
import { StyledThemeWrapper } from './StyledThemeWrapper';
import { ITidyUiProviderProps } from './types';

const { Consumer, Provider } = TidyUiContext;

/**
 * TidyUiProvider component
 * This component provides the Tidy UI context to its children.
 * It uses a reducer to manage the state and allows for a theme and toaster to be passed in as props.
 * It wraps its children in a StyledThemeWrapper to apply the theme.
 * It also provides a context value that includes the theme and other props.
 *
 * @param {ITidyUiProviderProps} props - The props for the TidyUiProvider component.
 * @returns {JSX.Element} A React element that provides the Tidy UI context to its children.
 */
const TidyUiProvider = (props: ITidyUiProviderProps): JSX.Element => {
  const { children, theme, toaster, ...rest } = props;
  const [state, dispatch] = React.useReducer(mainReducer, createInitialState(theme ?? orchidLight), initializer);
  const value = React.useMemo(() => ({ theme, ...rest }), [theme, rest]);

  return (
    <Provider value={{ ...value, dispatch, state }}>
      <StyledThemeWrapper toaster={toaster}>{children}</StyledThemeWrapper>
    </Provider>
  );
};

export { Consumer as TidyUiConsumer, TidyUiProvider };
