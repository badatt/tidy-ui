import { AppActionTypes } from '../actions';
import { ToasterActions } from '../actions/toaster.actions';

/**
 * Toast props
 */
export interface IToast {
  /**
   * Id of the toast item
   */
  id?: string;
  /**
   * Toast item
   */
  item?: string | JSX.Element | React.ReactNode;
}

/**
 * Toaster state
 */
export interface IToasterState {
  /**
   * All toasts
   */
  toasts?: IToast[];
}

/**
 * Toaster reducer
 *
 * @param {IToasterState} prevState previous toaster state
 * @param {AppActionTypes} action all action types
 * @returns {IToasterState} mutated toaster state
 */
const reducer = (prevState: IToasterState, action: AppActionTypes): IToasterState => {
  switch (action.type) {
    case ToasterActions.AddToast: {
      const toasts = prevState.toasts;
      toasts?.push({ id: action.payload.id, item: action.payload.item });
      return { ...prevState, toasts };
    }
    case ToasterActions.RemoveToast: {
      const toasts = prevState.toasts?.filter((t) => t.id !== action.payload.id);
      return { ...prevState, toasts };
    }
    case ToasterActions.ClearAll:
      return { ...prevState, toasts: [] };
    default:
      return { ...prevState };
  }
};

export default reducer;
