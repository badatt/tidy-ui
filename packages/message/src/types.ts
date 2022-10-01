import { HTMLAttributes } from 'react';
import { TTone } from '@tidy-ui/commons';
import { IBaseProps, IClosable } from '@tidy-ui/types';

/**
 * Message props
 */
export interface IMessageProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the message
   */
  ele?: JSX.Element;

  /**
   * Margin, css `margin` equivalent
   */
  margin?: string;

  /**
   * If `true`, creates outlined message widget, won't fill
   *
   * @type {?boolean}
   * @default false
   */
  outlined?: boolean;

  /**
   * If `true`, creates sharp corners for the message widget
   *
   * @type {?boolean}
   * @default false
   */
  sharp?: boolean;

  /**
   * If `true`, stretches the message widget to full width of the parent container
   *
   * @type {?boolean}
   * @default false
   */
  stretched?: boolean;

  /**
   * Color variant of the message, typically used to classify the
   * information based on its level
   *
   * @type {?TTone}
   */
  tone?: TTone;

  /**
   * If `true`, label wont be added to the message widget
   *
   * @type {?boolean}
   * @default false
   */
  withoutLabel?: boolean;
}
