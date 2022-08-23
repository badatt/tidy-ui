/* istanbul ignore file */
import { createContext } from 'react';
import { initialState } from '../reducers';
import { ITidyUiContextProps } from './types';

const TidyUiContext = createContext<ITidyUiContextProps>({
  /**
   * Dispatcher
   *
   * @returns {null} nothing
   */
  dispatch: (): null => null, // NOSONAR
  state: initialState,
});

export { TidyUiContext };
