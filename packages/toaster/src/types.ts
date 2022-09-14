import React from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Closable
 */
interface IClosable {
  /**
   * Callback (if any) after the message widget is closed
   *
   * @type {?((e?: any | undefined) => void)}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose?: (e?: any | undefined) => void;
}

/**
 * ToastItem
 */
export type TToastItem = React.ReactElement<IClosable>;

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
