import { HTMLAttributes } from 'react';

/**
 * Paper props
 *
 * @typedef {IPaperProps}
 * @interface IPaperProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IPaperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the component is created with sharp edges
   *
   * @type {?boolean}
   * @default false
   */
  sharp?: boolean;
}
