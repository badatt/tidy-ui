import { HTMLAttributes } from 'react';
import { IBaseProps, IClosable, TTone } from '@tidy-ui/types';

/**
 * Notification props
 */
export interface INotificationProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the notification
   */
  ele?: JSX.Element;

  /**
   * Sets custom icon
   */
  icon?: JSX.Element;

  /**
   * Sets custom label
   */
  label?: JSX.Element;

  /**
   * Margin, css `margin` equivalent
   */
  margin?: string;

  /**
   * If `true`, creates outlined notification widget, won't fill
   *
   * @type {?boolean}
   * @default false
   */
  outlined?: boolean;

  /**
   * If `true`, creates sharp corners for the notification widget
   *
   * @type {?boolean}
   * @default false
   */
  sharp?: boolean;

  /**
   * Color variant of the notification, typically used to classify the
   * information based on its level
   *
   * @type {?TTone}
   */
  tone?: TTone;

  /**
   * If `true`, label wont be added to the notification widget
   *
   * @type {?boolean}
   * @default false
   */
  withoutLabel?: boolean;
}
