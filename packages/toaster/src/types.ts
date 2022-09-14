import React from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * ToastItem
 */
export type TToastItem = string | JSX.Element | React.ReactNode;

/**
 * Toast
 */
export interface IToast {
  /**
   * Id
   */
  id?: string;
  /**
   * Item
   */
  item?: TToastItem;
}

/**
 * Toaster props
 */
export interface IToasterProps extends IBaseProps {
  /**
   * Maximum number of toasts that a toaster can toss at any instant
   */
  limit?: number;
  /**
   * Timeout for toasts, in milliseconds
   *
   * @default 5000
   */
  timeout?: number | 'infinite';
}
