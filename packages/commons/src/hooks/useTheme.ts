import * as React from 'react';
import { Actions } from '../actions';
import { TidyUiContext } from '../provider';
import { ITidyUITheme } from '../theme/types';
import { storage } from '../utils';

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
  const { state, dispatch } = React.useContext(TidyUiContext);
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
    storage.set('tidyui-theme', newTheme.name);
  }, []);

  return { changeTheme, theme: state.pageState.theme! };
};

export default useTheme;
