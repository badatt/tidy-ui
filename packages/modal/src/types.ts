import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Modal props
 */
export interface IModalProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, opens the modal
   *
   * @default false
   */
  isOpen?: boolean;

  /**
   * Callback (if any) when the backdrop clicked
   *
   * @type {?((e?: any) => void)}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onBackdropClick?: (e?: any) => void;
}
