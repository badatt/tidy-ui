import { HTMLAttributes } from 'react';
import { IBaseProps, TBorder, TPositioning, TShade, TTone } from '@tidy-ui/types';

/**
 * Border props
 */
export interface IBorderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Offset to push the content into the border, can take
   * both positive and negative values
   */
  align?: number;
  /**
   * Element to be enclosed with border
   */
  content?: JSX.Element;
  /**
   * Border width in
   *
   * @default '1px'
   */
  density?: string;

  /**
   * css `margin`, equivalent
   */
  margin?: string;
  /**
   * css `padding`, equivalent
   */
  padding?: string;

  /**
   * Content positioning
   *
   * @type {?TPositioning}
   * @default 'top-left'
   */
  positioning?: TPositioning;

  /**
   * Shade of the border
   *
   * @type {?TShade}
   * @default 500
   */
  shade?: TShade;

  /**
   * If `true`, creates sharp borders
   */
  sharp?: boolean;

  /**
   * The color of the divider
   *
   * @type {?TTone}
   * @default 'neutral'
   */
  tone?: TTone;

  /**
   * Border style
   *
   * @type {?TBorder}
   * @default 'solid'
   */
  variant?: TBorder;
}
