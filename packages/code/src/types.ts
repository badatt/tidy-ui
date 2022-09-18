import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Code props
 */
export interface ICodeProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * css `margin` equivalent
   */
  margin?: string;

  /**
   * If `true`, component won't provide copy-to-clipboard button
   */
  noCopy?: boolean;
}
