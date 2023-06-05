import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Drawer props
 */
export interface IDrawerProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Direction of the tooltip
   *
   * @type {'right' | 'left'}
   * @default 'left'
   */
  anchor?: 'right' | 'left';

  /**
   * If `true`, opens the drawer
   *
   * @default false
   */
  isOpen: boolean;

  /**
   * Callback when the drawer is closed
   *
   * @type {?((e?: any | undefined) => void)}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose: (e?: any) => void;
}
