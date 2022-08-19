import { AriaRole, CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

/**
 * Base props for Tidy UI components
 */
export interface IStandardProps {
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Unique identifier
   */
  id?: string;
  /**
   * Aria role
   */
  role?: AriaRole;
  /**
   * Inline styles
   */
  style?: CSSProperties;
}

/**
 * Props with `as`
 */
export interface IBaseProps<A extends ElementType | string = ElementType> extends IStandardProps {
  /**
   * `as` a html tag component
   */
  as?: A;
}

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
