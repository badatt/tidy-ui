import * as React from 'react';
import { useTheme as useStyledTheme } from 'styled-components';
import { Actions } from '../actions';
import { createInitialState, mainReducer } from '../reducers';
import { ITidyUITheme } from '../theme/types';

/**
 * Interface for the theme attributes
 */
type useThemeReturn = {
  /**
   * Function to change the theme
   */
  changeTheme: (newTheme: ITidyUITheme) => void;
  /**
   * Theme attributes
   */
  theme: ITidyUITheme;
};

/**
 * React hook to get the theme attributes
 *
 * @returns {useThemeReturn} theme attributes
 */
const useTheme = (): useThemeReturn => {
  const defaultTheme = useStyledTheme() as ITidyUITheme;
  const [state, dispatch] = React.useReducer(mainReducer, createInitialState(defaultTheme));
  /**
   * Function to change the theme
   *
   * @param {ITidyUITheme} newTheme new theme
   */
  const changeTheme = React.useCallback((newTheme: ITidyUITheme) => {
    dispatch({
      payload: { theme: newTheme },
      type: Actions.Page.SetTheme,
    });
  }, []);

  return { changeTheme, theme: state.pageState.theme ?? defaultTheme };
};

export default useTheme;
