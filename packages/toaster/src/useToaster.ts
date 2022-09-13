import * as React from 'react';
import ToasterContext from './provider/ToasterContext';
import { ToasterActions } from './actions';
import { TToastItem } from './types';

/**
 * Toaster
 */
export interface IToaster {
  /**
   * Add toast
   */
  add: (item: TToastItem) => void;

  /**
   * Clears all toasts
   */
  clear: () => void;

  /**
   * Removes toast
   */
  remove: (id?: string) => void;
}

/**
 * useToaster return
 */
export interface IUseToasterFnReturn {
  /**
   * Toaster
   */
  toaster: IToaster;
}

/**
 * useToaster
 *
 * @returns {IUseToasterFnReturn} useToaster return
 */
const useToaster = (): IUseToasterFnReturn => {
  const { dispatch } = React.useContext(ToasterContext);

  const add = React.useCallback(
    (item: TToastItem) => dispatch({ payload: { item }, type: ToasterActions.AddToast }),
    [],
  );

  const clear = React.useCallback(() => dispatch({ type: ToasterActions.Clear }), []);
  const remove = React.useCallback(
    (id?: string) => dispatch({ payload: { id }, type: ToasterActions.RemoveToast }),
    [],
  );

  const toaster: IToaster = {
    add,
    clear,
    remove,
  };

  return { toaster };
};

export default useToaster;
