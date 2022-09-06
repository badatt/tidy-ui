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
   * css `height` equivalent
   */
  h?: string;
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
  /**
   * css `weight` equivalent
   */
  w?: string;
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

/**
 * Creates array with length
 */
export type TCreateArrayWithLengthX<L extends number, A extends unknown[] = []> = A['length'] extends L
  ? A
  : TCreateArrayWithLengthX<L, [...A, 1]>;

/**
 * Numeric range type
 */
export type TNumericRange<S extends number[], E extends number, A extends number = never> = S['length'] extends E
  ? A | E
  : TNumericRange<[...S, 1], E, A | S['length']>;
