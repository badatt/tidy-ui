import { HTMLAttributes } from 'react';
import { TColor, TShade } from '@tidy-ui/types';

/**
 *
 */
export interface IDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   *
   */
  withColor?: TColor;
  /**
   *
   */
  withDensity?: 'thin' | 'medium' | 'thick';
  /**
   *
   */
  withShade?: TShade;

  /**
   *
   */
  withStyle?: 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'ridge' | 'solid';
}
