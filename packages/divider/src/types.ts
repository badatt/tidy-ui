import { HTMLAttributes } from 'react';
import { IBaseProps, TShade, TTone } from '@tidy-ui/types';

/**
 * Divider style props
 */
export type TVariant = 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'ridge' | 'solid';

/**
 * Divider density props
 */
export type TDensity = 'thin' | 'medium' | 'thick';

/**
 * Divider props
 */
export interface IDividerProps extends IBaseProps, HTMLAttributes<HTMLHRElement> {
  /**
   * Thickness of the divider
   *
   * @default 'thin'
   */
  density?: TDensity;
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
  justify?: 'center' | 'start' | 'end';

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
