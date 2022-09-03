import { HTMLAttributes } from 'react';
import { IBaseProps, TShade, TTone } from '@tidy-ui/types';

/**
 * Variants
 */
export enum Variant {
  'dashed',
  'dotted',
  'double',
  'groove',
  'hidden',
  'ridge',
  'solid',
}

/**
 * Divider style props
 */
export type TVariant = keyof typeof Variant;

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
   * Width for vertically aligned, Height for vertically aligned divider
   */
  length?: string;
  /**
   * Margins
   */
  margin?: string;
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
  variant?: TVariant;

  /**
   * If `true`, set the divider vertically
   *
   * @default false
   */
  vertical?: boolean;
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
   * Margins
   */
  margin?: string;

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
  variant?: TVariant;
}
