import { HTMLAttributes } from 'react';
import { IBaseProps, TScreen } from '@tidy-ui/types';

/**
 * Container props
 */
export interface IContainerProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, creates a full width container,
   * spanning the entire width of the viewport
   *
   * @default false
   */
  fixed?: boolean;

  /**
   * Creates a container with left and right padding
   *
   * @default '1.5rem'
   */
  gutter?: string;

  /**
   * Maximum width of the container
   */
  maxWidth?: TScreen;
}
