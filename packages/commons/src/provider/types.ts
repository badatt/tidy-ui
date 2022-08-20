import { Dispatch, Key, ReactNode } from 'react';
import { ITidyUITheme } from '@tidy-ui/types';
import { AppActionTypes } from '../actions';
import { IPageState } from '../reducers/page.reducer';
import { IRootState } from '../reducers/root.reducer';

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
 * State props
 */
export interface IState {
  /**
   * Page state
   */
  pageState: IPageState;

  /**
   * Root state
   */
  rootState: IRootState;
}
