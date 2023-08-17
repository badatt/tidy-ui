import { HTMLAttributes } from 'react';
import { IBaseProps, IClosable, TTone } from '@tidy-ui/types';

/**
 * The INotificationProps interface provides you with a robust set of properties to design dynamic and user-centric notification components.
 * Whether you're delivering alerts, updates, or important messages, the properties offered by INotificationProps will help you design notifications that effectively engage your users.
 *
 * @interface INotificationProps
 * @type {INotificationProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface INotificationProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * Control whether a label is added to the notification widget. When set to false, the label is omitted.
   *
   * @type {boolean}
   * @default true
   * @public
   * @since 0.47.0
   */
  hasLabel?: boolean;

  /**
   * Provide a custom icon to enhance the visual representation of the notification.
   */
  icon?: JSX.Element;

  /**
   * Create a filled notification widget by setting this property to true, altering its visual appearance.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFilled?: boolean;

  /**
   * Achieve sharp corners for the notification widget by setting this property to true, offering a distinct visual style.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isSharp?: boolean;

  /**
   * Provide a custom label within the notification, offering tailored context or additional information.
   */
  label?: JSX.Element;

  /**
   * Assign a color variant to the notification, typically indicating the information level or importance.
   *
   * @type {TTone}
   * @default info
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}
