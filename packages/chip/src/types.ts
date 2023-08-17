import { HTMLAttributes } from 'react';
import { IBaseProps, TGirth, TTone } from '@tidy-ui/types';

/**
 * The IChipProps interface provides a comprehensive set of properties that can be utilized to customize and control the behavior of the Chip component.
 * The Chip is a versatile UI element designed to display compact pieces of information or actions, often used for tags, labels, or interactive items.
 *
 * @interface IChipProps
 * @type {IChipProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IChipProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The girth property controls the size of the chip component. You can use predefined size values, such as 'sm', 'md', 'lg', etc., to adjust the visual dimensions of the chip.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * The icon property allows you to embed an icon element inside the chip. This icon can enhance the visual representation of the chip and provide additional context or visual cues.
   *
   * @type {JSX.Element}
   * @public
   * @since 0.47.0
   */
  icon?: JSX.Element;

  /**
   * When set to true, the isClickable property enables click actions on the chip component. This means that users can interact with the chip by clicking on it, triggering any associated actions or behaviors.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isClickable?: boolean;

  /**
   * The isFilled property determines whether the chip should have a filled variant. When isFilled is set to true, the chip will have a visually distinct filled appearance, which can help emphasize its presence or state.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFilled?: boolean;

  /**
   * The placement property controls the positioning of the icon element inside the chip. You can choose between 'left' and 'right' to specify whether the icon should be displayed to the left or right of the chip's content.
   *
   * @type {'left' | 'right'}
   * @default left
   * @public
   * @since 0.47.0
   */
  placement?: 'left' | 'right';

  /**
   * The tone property defines the color tone of the chip component. You can use predefined tone values like 'major', 'minor', etc., to apply different color schemes to the chip. The default tone is 'neutral'.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}
