import { HTMLAttributes } from 'react';
import { IBaseProps, TCreateArrayWithLengthX, TNumericRange } from '@tidy-ui/types';

/**
 * The IGridProps interface provides you with powerful tools to create dynamic and visually appealing grids in your projects. Whether you're designing complex layouts or simple grids, the properties offered by IGridProps will help you achieve your desired look and functionality.
 *
 * @interface IGridProps
 * @type {IGridProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IGridProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * This property adds half the specified value as negative left and right margins to the grid's rows. Additionally, it adds half the value as padding to each item within the grid.
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  gap?: number;

  /**
   * Customize the left and right padding of the entire grid.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  gutter?: string;

  /**
   * Set this property to 'true' if you want to create a responsive grid that adjusts its width based on device breakpoints.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFixed?: boolean;
}

/**
 * The IItemProps interface is offering you a wide range of tools to craft engaging and flexible grid items. Whether you're designing for large desktop screens or tiny mobile devices, the properties provided by IItemProps will help you seamlessly adjust the spanning of your grid items.
 *
 * @interface IItemProps
 * @type {IItemProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IItemProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Set the spanning of the grid item for desktop screens.
   *
   * @type {number}
   * @default 4
   * @public
   * @since 0.47.0
   */
  lg?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Adjust the spanning of the grid item for laptops.
   *
   * @type {number}
   * @default 6
   * @public
   * @since 0.47.0
   */
  md?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Define the spanning of the grid item for tablets.
   *
   * @type {number}
   * @default 8
   * @public
   * @since 0.47.0
   */
  sm?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Specify the spanning of the grid item for TVs.
   *
   * @type {number}
   * @default 2
   * @public
   * @since 0.47.0
   */
  xl?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Set the spanning of the grid item for mobile devices.
   *
   * @type {number}
   * @default 12
   * @public
   * @since 0.47.0
   */
  xs?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;
}
