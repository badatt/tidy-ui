import { ActionMap } from './types';

export enum PageActions {
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
};

export type PageActionTypes = ActionMap<PagePayload>[keyof ActionMap<PagePayload>];
