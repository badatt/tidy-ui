import { ITidyUITheme } from '@tidy-ui/types';
import { ActionMap } from './types';

export enum PageActions {
  SetTheme = 'SET_THEME',
  SetTitle = 'SET_TITLE',
}

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

export type PageActionTypes = ActionMap<PagePayload>[keyof ActionMap<PagePayload>];
