import React from 'react';
import { ActionMap } from './types';

/**
 * Toaster actions
 */
export enum ToasterActions {
  AddToast = 'ADD_TOAST',
  ClearAll = 'CLEAR_ALL',
  RemoveToast = 'REMOVE_TOAST',
}

/**
 * Toaster payload
 */
type ToasterPayload = {
  /**
   * Adds a toast to the toast container
   */
  [ToasterActions.AddToast]: {
    /**
     * Id of the toast
     */
    id?: string;
    /**
     * element/node to toast
     */
    item?: string | JSX.Element | React.ReactNode;
  };
  /**
   * Clears toast container
   */
  [ToasterActions.ClearAll]: null;
  /**
   * Removes the toast from toast container
   */
  [ToasterActions.RemoveToast]: {
    /**
     * Id of the toast
     */
    id?: string;
  };
};

/**
 * Toaster action types
 */
export type ToasterActionTypes = ActionMap<ToasterPayload>[keyof ActionMap<ToasterPayload>];
