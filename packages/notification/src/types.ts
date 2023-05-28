import { HTMLAttributes } from 'react';
import { TTone } from '@tidy-ui/commons';
import { IBaseProps, IClosable } from '@tidy-ui/types';

/**
 * Notification props
 */
export interface INotificationProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * If `false`, label wont be added to the notification widget
   *
   * @type {?boolean}
   * @default true
   */
  hasLabel?: boolean;

  /**
   * Sets custom icon
   */
  icon?: JSX.Element;

  /**
   * If `true`, creates filled notification widget
   *
   * @type {?boolean}
   * @default false
   */
  isFilled?: boolean;

  /**
   * If `true`, creates sharp corners for the notification widget
   *
   * @type {?boolean}
   * @default false
   */
  isSharp?: boolean;

  /**
   * Sets custom label
   */
  label?: JSX.Element;

  /**
   * Color variant of the notification, typically used to classify the
   * information based on its level
   *
   * @type {?TTone}
   */
  tone?: TTone;
}
