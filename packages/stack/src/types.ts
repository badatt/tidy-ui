import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Align
 */
export enum Align {
  'stretch',
  'baseline',
  'flex-start',
  'flex-end',
  'center',
}

/**
 * Align items props
 */
export type TAlign = keyof typeof Align;

/**
 * Justify
 */
export enum Justify {
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
}

/**
 * Justify content props
 */
export type TJustify = keyof typeof Justify;

/**
 * Order
 */
export enum Order {
  'row',
  'row-reverse',
  'column',
  'column-reverse',
}

/**
 * Order props
 */
export type TOrder = keyof typeof Order;

/**
 * Stack props
 */
export interface IStackProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Align items, equivalent to css `align-items`
   *
   * @default 'flex-start'
   */
  align?: TAlign;

  /**
   * Stack item separator
   */
  divider?: React.ReactNode;

  /**
   * If `true`, wraps the elements. css `wrap` equivalent
   *
   * @default false
   */
  fold?: boolean;

  /**
   * css `gap` equivalent
   */
  gap?: string;

  /**
   * Justifies content, equivalent to css `justify-content`
   *
   * @default 'flex-start'
   */
  justify?: TJustify;

  /**
   * Margin, css `margin` equivalent
   */
  margin?: string;

  /**
   * Direction to arrange the elements inside the Stack
   *
   * @default 'row'
   */
  order?: TOrder;
}
