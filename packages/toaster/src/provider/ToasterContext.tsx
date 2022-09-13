import * as React from 'react';
import { initialState } from '../reducers';
import { IToasterContext } from './types';

const ToasterContext = React.createContext<IToasterContext>({
  /**
   * Dispatcher
   *
   * @returns {null} nothing
   */
  dispatch: (): null => null, // NOSONAR
  state: initialState,
});

export default ToasterContext;
