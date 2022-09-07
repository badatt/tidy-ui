import { AppActionTypes } from '../actions';
import pageReducer from '../reducers/page.reducer';
import rootReducer from '../reducers/root.reducer';
import toasterReducer from '../reducers/toaster.reducer';
import { IState } from './types';

/**
 * State initializer
 *
 * @param {IState} initState init state
 * @returns {IState} initial state
 */
const initializer = (initState: IState): IState => {
  return { ...initState };
};

const initialState: IState = {
  pageState: {},
  rootState: {},
  toasterState: {
    toasts: [],
  },
};

/**
 * Main reducer
 *
 * @param {IState} state application state
 * @param {AppActionTypes} actions all application actions
 * @returns {IState} mutated state
 */
const mainReducer = (state: IState, actions: AppActionTypes): IState => {
  const { pageState, rootState, toasterState } = state;
  return {
    pageState: pageReducer(pageState, actions),
    rootState: rootReducer(rootState, actions),
    toasterState: toasterReducer(toasterState, actions),
  };
};

export { initializer, initialState, mainReducer };
