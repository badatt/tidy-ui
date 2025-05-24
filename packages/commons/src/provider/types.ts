import { Dispatch, Key, ReactNode } from 'react';
import { AppActionTypes } from '../actions';
import { IState } from '../reducers/types';
import { ITidyUITheme } from '../theme';

/**
 * TidyUiProviderProps props
 */
export interface ITidyUiProviderProps {
  /**
   * children
   */
  children?: ReactNode;

  /**
   * key
   */
  key?: Key;
  /**
   * ref
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;

  /**
   * theme
   */
  theme?: ITidyUITheme;

  /**
   * ToasterProvider
   */
  toaster?: JSX.Element;
}

/**
 * TidyUiContext props
 */
export interface ITidyUiContextProps {
  /**
   * Action dispatcher
   */
  dispatch: Dispatch<AppActionTypes>;
  /**
   * State of the application
   */
  state: IState;
}

/**
 * StyledThemeWrapper props
 * This interface defines the props for the StyledThemeWrapper component.
 */
export interface IStyledThemeWrapper {
  /**
   * Children to be wrapped by the theme provider
   */
  children?: ReactNode;
  /**
   * Toaster component to be used for notifications
   */
  toaster?: JSX.Element;
}
