import { Dispatch } from 'react';
import { ToasterActionTypes } from '../actions';
import { IToasterState } from '../reducers/types';

/**
 * TidyUiContext props
 */
export interface IToasterContext {
  /**
   * Action dispatcher
   */
  dispatch: Dispatch<ToasterActionTypes>;
  /**
   * State of the application
   */
  state: IToasterState;
}
