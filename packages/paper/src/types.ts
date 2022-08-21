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
   * If `true`, the component is created with sharp edges
   *
   * @type {?boolean}
   * @default false
   */
  sharp?: boolean;
}
