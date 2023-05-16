import { HTMLAttributes } from 'react';
import { TScreen } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Container props
 */
export interface IContainerProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Creates a container with left and right padding
   *
   * @default '1.5rem'
   */
  gutter?: string;

  /**
   * If `true`, creates a responsive container that changes maximum width based on device breakpoints
   *
   * @default false
   */
  isFixed?: boolean;

  /**
   * Maximum width of the container
   */
  maxWidth?: TScreen;
}
