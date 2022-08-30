import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Align items props
 */
export type TAlign = 'stretch' | 'baseline' | 'flex-start' | 'flex-end' | 'center';

/**
 * Justify content props
 */
export type TJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';

/**
 * Order props
 */
export type TOrder = 'row' | 'row-reverse' | 'column' | 'column-reverse';

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
   * Direction to arrange the elements inside the Stack
   *
   * @default 'row'
   */
  order?: TOrder;
}
