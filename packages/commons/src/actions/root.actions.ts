import { ActionMap } from './types';

/**
 * Root actions
 */
export enum RootActions {
  Reset = 'RESET',
  SetVersion = 'SET_VERSION',
}

/**
 * Root payload
 */
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

/**
 * Root action types
 */
export type RootActionTypes = ActionMap<RootPayload>[keyof ActionMap<RootPayload>];
