import * as React from 'react';
import { HTMLAttributes } from 'react';
import { IBaseProps, IClosable, TTone } from '@tidy-ui/types';

/**
 * The IMessageProps interface provides you with a powerful toolbox to design dynamic and informative message widgets.
 * Whether you're displaying notifications, alerts, or conveying important information, the properties offered by IMessageProps will help you craft message components that effectively communicate with your users.
 */
export interface IMessageProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * Control the presence of a label within the message widget. When set to false, the label is omitted.
   *
   * @type {boolean}
   * @default true
   * @public
   * @since 0.47.0
   */
  hasLabel?: boolean;

  /**
   * Create a filled message widget by setting this property to true, altering the visual appearance.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFilled?: boolean;

  /**
   * Achieve sharp corners for the message widget with this property set to true, offering a distinct visual style.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isSharp?: boolean;

  /**
   * Stretch the message widget to occupy the full width of its parent container by setting this property to true.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isStretched?: boolean;

  /**
   * Provide a custom label within the message widget, offering tailored context or additional information.
   *
   * @type {React.ReactNode}
   * @default false
   * @public
   * @since 0.47.0
   */
  label?: React.ReactNode;

  /**
   * Assign a color variant to the message, typically indicating the information level or importance.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}
