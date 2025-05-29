import { AppActionTypes } from '../actions';
import pageReducer from '../reducers/page.reducer';
import rootReducer from '../reducers/root.reducer';
import { ITidyUITheme, orchidDark, orchidLight } from '../theme';
import { storage } from '../utils';
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
};

/**
 * Create initial state
 *
 * @param {ITidyUITheme} theme creates initial state
 * @returns {IState} initial state
 */
const createInitialState = (theme?: ITidyUITheme): IState => {
  const themeName = storage.get('tidyui-theme');
  let baseTheme: ITidyUITheme;
  if (themeName) {
    switch (themeName) {
      case orchidLight.name:
        baseTheme = orchidLight;
        break;
      case orchidDark.name:
        baseTheme = orchidDark;
        break;
      default:
        baseTheme = theme ?? orchidLight; // Default to orchidLight if no theme matches
    }
  } else {
    baseTheme = theme ?? orchidLight; // Default to orchidLight if no theme is provided
  }
  return {
    ...initialState,
    pageState: {
      theme: baseTheme,
    },
  };
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

export { createInitialState, initializer, initialState, mainReducer };
