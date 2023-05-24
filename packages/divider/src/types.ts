import { HTMLAttributes } from 'react';
import { TBorder, TShade, TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Density
 */
export enum Density {
  'thin',
  'medium',
  'thick',
}

/**
 * Divider density props
 */
export type TDensity = keyof typeof Density;

/**
 * Justify
 */
export enum Position {
  'center',
  'start',
  'end',
}

/**
 * Justify props
 */
export type TPosition = keyof typeof Position;

/**
 * Divider props
 */
export interface IDividerProps extends IBaseProps, HTMLAttributes<HTMLHRElement> {
  /**
   * Vertical alignment
   *
   * @default 'center'
   */
  align?: TPosition;
  /**
   * Thickness of the divider
   *
   * @default 'thin'
   */
  density?: TDensity;

  /**
   * If `true`, set the divider vertically
   *
   * @default false
   */
  isVertical?: boolean;

  /**
   * Width for vertically aligned, h for vertically aligned divider
   */
  length?: string;
  /**
   * Shade of the color of the divider, 50 being low, 900 being high
   *
   * @type {?TShade}
   * @default 500
   */
  shade?: TShade;

  /**
   * The color of the divider
   *
   * @type {?TTone}
   * @default 'neutral'
   */
  tone?: TTone;

  /**
   * Divider variant
   *
   * @default 'solid'
   */
  variant?: TBorder;
}

/**
 * DividerEnhanced props
 */
export interface IEnhancedDividerProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Thickness of the divider
   *
   * @default 'thin'
   */
  density?: TDensity;
  /**
   * css `justify-content` equivalent
   *
   * @default 'center'
   */
  justify?: TPosition;

  /**
   * Shade of the color of the divider, 50 being low, 900 being high
   *
   * @type {?TShade}
   * @default 500
   */
  shade?: TShade;
  /**
   * The color of the divider
   *
   * @type {?TTone}
   * @default 'neutral'
   */
  tone?: TTone;
  /**
   * Divider variant
   *
   * @default 'solid'
   */
  variant?: TBorder;
}
