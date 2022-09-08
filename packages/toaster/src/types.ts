import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

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
