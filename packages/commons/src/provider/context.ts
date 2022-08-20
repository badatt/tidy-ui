import { createContext } from 'react';
import { IState, ITidyUiContextProps } from './types';

const initialState: IState = {
  pageState: {},
  rootState: {},
};

const TidyUiContext = createContext<ITidyUiContextProps>({
  /**
   * Dispatcher
   *
   * @returns {null} nothing
   */
  dispatch: (): null => null,
  state: initialState,
});

export { initialState, TidyUiContext };
