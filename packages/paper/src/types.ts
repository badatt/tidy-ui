import { HTMLAttributes } from 'react';

/**
 * Paper props
 *
 * @export
 * @interface IPaperProps
 * @typedef {IPaperProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
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
