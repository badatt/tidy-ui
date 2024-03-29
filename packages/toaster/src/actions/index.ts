import { ActionMap } from '@tidy-ui/commons';
import { TToastItem } from '../types';

/**
 * Toaster actions
 */
export enum ToasterActions {
  AddToast = 'ADD_TOAST',
  Clear = 'CLEAR',
  QueueToast = 'QUEUE_TOAST',
  RemoveToast = 'REMOVE_TOAST',
}

/**
 * Toaster actions payloads
 */
type ToasterPayLoad = {
  /**
   * Add toast
   */
  [ToasterActions.AddToast]: {
    /**
     * Item to add
     */
    item?: TToastItem;
  };
  /**
   * Clears all toasts
   */
  [ToasterActions.Clear]: null;
  /**
   * Add toast
   */
  [ToasterActions.QueueToast]: {
    /**
     * Item to add
     */
    item?: TToastItem;
  };
  /**
   * Removes toast
   */
  [ToasterActions.RemoveToast]: {
    /**
     * Toast id
     */
    id?: string;
  };
};

/**
 * Toaster action types
 */
export type ToasterActionTypes = ActionMap<ToasterPayLoad>[keyof ActionMap<ToasterPayLoad>];
