import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Code props
 */
export interface ICodeProps extends IBaseProps, HTMLAttributes<HTMLPreElement> {
  /**
   * If `false`, component won't provide copy-to-clipboard button
   *
   * @default `true`
   */
  canCopy?: boolean;
}
