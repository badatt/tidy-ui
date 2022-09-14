import * as React from 'react';
import ToasterContext from './provider/ToasterContext';
import { ToasterActions } from './actions';
import { TToastItem } from './types';

/**
 * Toaster
 */
export interface IToaster {
  /**
   * Clears all toasts
   */
  clear: () => void;

  /**
   * Pushes toast
   */
  push: (item: TToastItem) => void;
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

  const push = React.useCallback(
    (item: TToastItem) => dispatch({ payload: { item }, type: ToasterActions.QueueToast }),
    [],
  );

  const clear = React.useCallback(() => dispatch({ type: ToasterActions.Clear }), []);

  const toaster: IToaster = {
    clear,
    push,
  };

  return { toaster };
};

export default useToaster;
