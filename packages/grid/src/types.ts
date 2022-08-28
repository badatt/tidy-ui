import { HTMLAttributes } from 'react';
import { IBaseProps, TCreateArrayWithLengthX, TNumericRange } from '@tidy-ui/types';

/**
 * Grid props
 */
export interface IGridProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, creates a responsive grid that changes width based on device breakpoints
   */
  fixed?: boolean;

  /**
   * Creates a grid with left and right padding
   *
   * @default '0.25rem'
   */
  gutter?: string;
}

/**
 * Row props
 */
export interface IRowProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Adds half the value as negative left & right margins (in px) to Row. Also, adds half
   * the value as padding to each Col
   */
  gutter?: number;
}

/**
 * Col props
 */
export interface IColProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Spanning for desktops
   */
  lg?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Spanning for laptops
   */
  md?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Spanning for tablets
   */
  sm?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Spanning for TVs
   */
  xl?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;

  /**
   * Spanning for mobile devices
   */
  xs?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;
}
