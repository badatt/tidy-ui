import { HTMLAttributes } from 'react';
import { TShade, TTone } from '@tidy-ui/types';

/**
 * Divider props
 */
export interface IDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Thickness of the divider
   *
   * @default 'thin'
   */
  density?: 'thin' | 'medium' | 'thick';
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
  variant?: 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'ridge' | 'solid';
}
