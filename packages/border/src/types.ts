import { HTMLAttributes } from 'react';
import { TBorderStyle, TPositioning, TShade, TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

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
   * If `true`, creates sharp borders
   */
  isSharp?: boolean;

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
   * The color of the divider
   *
   * @type {?TTone}
   * @default 'neutral'
   */
  tone?: TTone;

  /**
   * Border style
   *
   * @type {?TBorderStyle}
   * @default 'solid'
   */
  variant?: TBorderStyle;
}
