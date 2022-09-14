import React from 'react';
import { ToasterActionTypes } from '../actions';
import { IToasterState } from '../reducers/types';

/**
 * TidyUiContext props
 */
export interface IToasterContext {
  /**
   * Action dispatcher
   */
  dispatch: React.Dispatch<ToasterActionTypes>;
  /**
   * State of the application
   */
  state: IToasterState;
}
