import { ITidyUITheme } from '../theme/types';
import { ActionMap } from './types';

/**
 * Page actions
 */
export enum PageActions {
  SetTheme = 'SET_THEME',
  SetTitle = 'SET_TITLE',
}

/**
 * Page payload
 */
type PagePayload = {
  /**
   * Sets the title
   */
  [PageActions.SetTitle]: {
    /**
     * Title
     */
    title?: string;
  };
  /**
   * Sets theme
   */
  [PageActions.SetTheme]: {
    /**
     * Theme
     */
    theme?: ITidyUITheme;
  };
};

/**
 * Page action types
 */
export type PageActionTypes = ActionMap<PagePayload>[keyof ActionMap<PagePayload>];
