import { HTMLAttributes } from 'react';
import { IBaseProps, TShade, TTone } from '@tidy-ui/types';

/**
 * Divider props
 */
export interface IDividerProps extends IBaseProps, HTMLAttributes<HTMLHRElement> {
  /**
   * Thickness of the divider
   *
   * @default 'thin'
   */
  density?: 'thin' | 'medium' | 'thick';
  /**
   * Top and bottom margins
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
  variant?: 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'ridge' | 'solid';

  /**
   * If `true`, set the divider vertically
   */
  vertical?: boolean;
}
