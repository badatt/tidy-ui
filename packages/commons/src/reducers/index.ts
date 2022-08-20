import { AppActionTypes } from '../actions';
import { IState } from '../provider/types';
import pageReducer from '../reducers/page.reducer';
import rootReducer from '../reducers/root.reducer';

/**
 * State initializer
 *
 * @param {IState} initState init state
 * @returns {IState} initial state
 */
const initializer = (initState: IState): IState => {
  return { ...initState };
};

/**
 * Main reducer
 *
 * @param {IState} state application state
 * @param {AppActionTypes} actions all application actions
 * @returns {IState} mutated state
 */
const mainReducer = (state: IState, actions: AppActionTypes): IState => {
  const { pageState, rootState } = state;
  return {
    pageState: pageReducer(pageState, actions),
    rootState: rootReducer(rootState, actions),
  };
};

export { initializer, mainReducer };
