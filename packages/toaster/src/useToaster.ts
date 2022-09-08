import React from 'react';
import { Actions, TidyUiContext } from '@tidy-ui/commons';

/**
 * Toast item typ
 */
type ToastItemType = string | JSX.Element | React.ReactNode;

/**
 * Toaster actions
 */
interface IToaster {
  /**
   * Clears all items
   */
  clear(): void;
  /**
   * Removes the last item
   */
  pop(): void;
  /**
   * Adds an item
   */
  push(item?: ToastItemType): string;
  /**
   * Removes specific item
   */
  remove(id?: string): void;
}

/**
 * useToaster return
 */
interface IUseToasterFnReturn {
  /**
   * toaster methods
   */
  toaster: IToaster;
}

/**
 * Hook to add/remove toasts
 *
 * @returns {IUseToasterFnReturn} toaster methods
 */
const useToaster = (): IUseToasterFnReturn => {
  const { dispatch } = React.useContext(TidyUiContext);
  const toaster: IToaster = {
    /**
     * Clears all toasts
     *
     * @returns {void}
     */
    clear: (): void => dispatch({ type: Actions.Toaster.ClearAll }),
    /**
     * Pops the last toast
     *
     * @returns {void}
     */
    pop: (): void => dispatch({ type: Actions.Toaster.PopToast }),
    /**
     * Adds a toast
     *
     * @param {ToastItemType} item toast item
     * @returns {void}
     */
    push: (item: ToastItemType): string => {
      const id = Date.now().toString();
      dispatch({ payload: { id, item }, type: Actions.Toaster.AddToast });
      return id;
    },
    /**
     * Removes a specific toast
     *
     * @param {string} id toast id
     * @returns {void}
     */
    remove: (id: string): void => dispatch({ payload: { id }, type: Actions.Toaster.RemoveToast }),
  };

  return { toaster };
};

export default useToaster;
