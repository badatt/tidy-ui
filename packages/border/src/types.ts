import { HTMLAttributes } from 'react';
import { IBaseProps, TBorderStyle, TPositioning, TShade, TTone } from '@tidy-ui/types';

/**
 * Interface defining properties for configuring a Border component.
 *
 * @interface IBorderProps
 * @type {IBorderProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IBorderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * An optional property used to adjust the content placement within the border, supporting both positive and negative values.
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  align?: number;

  /**
   * An optional JSX element that resides within the border.
   *
   * @type {JSX.Element}
   * @public
   * @since 0.47.0
   */
  content?: JSX.Element;

  /**
   * An optional property specifying the border width.
   *
   * @type {string}
   * @default '1px'
   * @public
   * @since 0.47.0
   */
  density?: string;

  /**
   * An optional property that determines whether sharp borders should be created.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isSharp?: boolean;

  /**
   * An optional property specifying the positioning of the `content` within the border.
   *
   * @type {TPositioning}
   * @default 'top-left'
   * @public
   * @since 0.47.0
   */
  positioning?: TPositioning;

  /**
   * An optional property defining the shade of the border.
   *
   * @type {TShade}
   * @default 500
   * @public
   * @since 0.47.0
   */
  shade?: TShade;

  /**
   * An optional property specifying the color tone of the border.
   *
   * @type {TTone}
   * @default 'neutral'
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * An optional property defining the border style.
   *
   * @type {TBorderStyle}
   * @default 'solid'
   * @public
   * @since 0.47.0
   */
  variant?: TBorderStyle;
}
