import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Paper props
 *
 * @typedef {IPaperProps}
 * @interface IPaperProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IPaperProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the paper
   */
  ele?: JSX.Element;
  /**
   * If `true`, the component is created with sharp edges
   *
   * @type {?boolean}
   * @default false
   */
  isSharp?: boolean;
}
