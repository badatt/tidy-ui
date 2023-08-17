import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * The IFrameProps interface offers a versatile framework for creating visually appealing frames that encapsulate your content. Whether you're aiming for sharp edges, circular elegance, or streamlined wrapping, this interface provides the tools you need to achieve your design objectives.
 *
 * @interface IFrameProps
 * @type {IFrameProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IFrameProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Indicate that the content is loaded and ready to be rendered, allowing the frame to gracefully transition or disappear.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isLoaded?: boolean;

  /**
   * Craft frames with sharp edges, adding a touch of modern aesthetics to your design.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isSharp?: boolean;

  /**
   * Opt to wrap child items neatly within the dimensions of the frame, ensuring a visually polished presentation.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isWrapped?: boolean;

  /**
   * Define the size (radius) of circular variants, enabling you to tailor the frame's appearance to your desired specifications.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  size?: string;

  /**
   * Select the frame variant that suits your design vision. Choose between a circular variant ('circle') or a sleek line variant ('line').
   * If not supplied anything, it creates a rectangle box frame with given dimensions.
   *
   * @type {'circle' | 'line'}
   * @public
   * @since 0.47.0
   */
  variant?: 'circle' | 'line';
}
