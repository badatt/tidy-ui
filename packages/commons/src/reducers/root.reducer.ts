import { AppActionTypes } from '../actions';
import { RootActions } from '../actions/root.actions';

/**
 * Root state props
 */
export interface IRootState {
  /**
   * Version
   */
  version?: string;
}

const initialState: IRootState = {
  version: '',
};

/**
 * Root reducer
 *
 * @param {IRootState} prevState previous root state
 * @param {AppActionTypes} action root actions
 * @returns {IRootState} mutated root state
 */
const reducer = (prevState: IRootState, action: AppActionTypes): IRootState => {
  switch (action.type) {
    case RootActions.Reset:
      return initialState;
    case RootActions.SetVersion:
      return { ...initialState, version: action.payload?.version };
    default:
      return prevState;
  }
};

export default reducer;

export { initialState };
