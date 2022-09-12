import React, { HTMLAttributes } from 'react';
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
export interface IToasterProps {
  /**
   * Timeout for toasts, in seconds
   *
   * @default 5000
   */
  timeout?: number | 'infinite';
}

/**
 * ToastItem props
 */
export interface IToastItemProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * css `margin` equivalent
   */
  margin?: string;
}
