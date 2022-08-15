import { HTMLAttributes } from 'react';
import { TColor, TShade } from '@tidy-ui/types';

/**
 * Divider props
 */
export interface IDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * The color of the divider
   *
   * @type {?TColor}
   * @default 'neutral'
   */
  withColor?: TColor;
  /**
   * Thickness of the divider
   *
   * @default 'thin'
   */
  withDensity?: 'thin' | 'medium' | 'thick';
  /**
   * Shade of the color of the divider, 50 being low, 900 being high
   *
   * @type {?TShade}
   * @default 500
   */
  withShade?: TShade;

  /**
   * Divider style
   *
   * @default 'solid'
   */
  withStyle?: 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'ridge' | 'solid';
}
