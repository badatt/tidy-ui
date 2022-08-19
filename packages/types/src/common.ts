import { HTMLAttributes } from 'react';

/**
 * Common props for Icon components
 *
 * @typedef {IIconProps}
 * @interface IIconProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IIconProps extends HTMLAttributes<SVGElement> {
  /**
   * If `true`, creates an outlined icon
   *
   * @default false
   */
  isOutlined?: boolean;
}
