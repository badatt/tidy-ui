import { ToasterActions, ToasterActionTypes } from '../actions';
import { IToasterState } from './types';

/**
 * Initial state
 */
const initialState: IToasterState = {
  toasts: [],
};

/**
 * State initializer
 *
 * @param {IToasterState} initState init state
 * @returns {IToasterState} initial state
 */
const initializer = (initState: IToasterState): IToasterState => {
  return { ...initState };
};

/**
 * Toaster reducer
 *
 * @param {IToasterState} prevState previous toaster state
 * @param {ToasterActionTypes} action toaster actions
 * @returns {IToasterState} mutated toaster state
 */
const reducer = (prevState: IToasterState, action: ToasterActionTypes): IToasterState => {
  switch (action.type) {
    case ToasterActions.AddToast: {
      const toasts = prevState.toasts;
      toasts?.push({ id: Date.now().toString(), item: action.payload?.item });
      return { ...prevState, toasts };
    }
    case ToasterActions.Clear: {
      return { ...prevState, toasts: [] };
    }
    case ToasterActions.RemoveToast: {
      const isExists = prevState.toasts?.some((t) => t.id === action.payload?.id);
      if (isExists) {
        const toasts = prevState.toasts?.filter((t) => t.id !== action.payload?.id);
        return { ...prevState, toasts };
      }
      return prevState;
    }
    default:
      return prevState;
  }
};

export { initializer, initialState, reducer };
