import { ActionMap } from './types';

export enum RootActions {
  Reset = 'RESET',
  SetVersion = 'SET_VERSION',
}

type RootPayload = {
  /**
   * Resets the state
   */
  [RootActions.Reset]: null;
  /**
   * Sets the Id
   */
  [RootActions.SetVersion]: {
    /**
     * Id
     */
    version?: string;
  };
};

export type RootActionTypes = ActionMap<RootPayload>[keyof ActionMap<RootPayload>];
