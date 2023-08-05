import { HTMLAttributes } from 'react';
import { IBaseProps, IClosable } from '@tidy-ui/types';

/**
 * Modal props
 */
export interface IModalProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * Callback (if any) when the backdrop clicked
   *
   * @type {function}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onBackdropClick?: (e?: any) => void;
}
