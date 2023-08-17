import { HTMLAttributes } from 'react';
import { IBaseProps, TScreen } from '@tidy-ui/types';

/**
 * The IContainerProps interface empowers you to customize the behavior and appearance of Containers within your user interface.
 * These Containers serve as versatile wrappers for your content, helping you achieve consistent and visually pleasing layouts.
 *
 * @interface IContainerProps
 * @type {IContainerProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IContainerProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The gutter property allows you to establish a comfortable breathing space around your container content. By defining a string value, you can determine the left and right padding, ensuring your content remains nicely spaced and easy on the eyes.
   *
   * @type {string}
   * @default '1.5rem'
   * @public
   * @since 0.47.0
   */
  gutter?: string;

  /**
   * The isFixed property introduces responsiveness to your containers. When set to `true`, your container's maximum width will automatically adjust according to different device breakpoints. This ensures a seamless experience across various screen sizes.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFixed?: boolean;

  /**
   * The maxWidth property enables you to define the maximum width of your container explicitly. By utilizing the `TScreen` type, you can ensure that your container maintains a consistent width while catering to your specific layout requirements.
   *
   * @type {TScreen}
   * @public
   * @since 0.47.0
   */
  maxWidth?: TScreen;
}
