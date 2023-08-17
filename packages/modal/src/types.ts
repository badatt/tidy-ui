import { HTMLAttributes } from 'react';
import { IBaseProps, IClosable } from '@tidy-ui/types';

/**
 * The IModalProps interface equipping you with a robust set of properties to create dynamic and user-friendly modal components.
 * Whether you're displaying additional information, capturing user input, or providing context, the properties offered by
 * IModalProps will help you design modals that enhance user experience.
 *
 * @interface IModalProps
 * @type {IModalProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IModalProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * Define a callback function that triggers when the backdrop of the modal is clicked. This allows you to implement custom behavior when the user interacts with the backdrop area.
   *
   * @type {Function}
   * @public
   * @since 0.47.0
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onBackdropClick?: (e?: any) => void;
}
