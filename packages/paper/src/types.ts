import { HTMLAttributes } from 'react';

/**
 * Paper props
 *
 * @public
 * @interface IPaperProps
 * @typedef {IPaperProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 */
export interface IPaperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the component is created with sharp edges
   *
   * @default false
   * @type {?boolean}
   */
  isSharp?: boolean;
}
