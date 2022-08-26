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
   * Maxwidth of the container
   */
  maxWidth?: TScreen;

  /**
   * If `true`, creates a container without left and right padding
   *
   * @default false
   */
  noGutters?: boolean;
}
