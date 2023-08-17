import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * The ICodeProps interface is designed to provide you with fine-grained control over the appearance and behavior of a code snippet component.
 *
 * @interface ICodeProps
 * @type {ICodeProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ICodeProps extends IBaseProps, HTMLAttributes<HTMLPreElement> {
  /**
   * The canCopy property enables you to control the presence of a convenient copy-to-clipboard button within the code snippet component.
   * When canCopy is set to true (the default), users can easily copy the code snippet to their clipboard with a single click.
   * However, if you wish to restrict this functionality, you can set canCopy to false.
   *
   * @type {boolean}
   * @default true
   * @public
   * @since 0.47.0
   */
  canCopy?: boolean;
}
