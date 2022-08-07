import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Message props
 */
export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * It `true`, creates a closable message widget with a close button at top right corner
   *
   * @type {?boolean}
   * @default false
   */
  isClosable?: boolean;

  /**
   * If `true`, creates outlined message widget, won't fill
   *
   * @type {?boolean}
   * @default false
   */
  isOutlined?: boolean;

  /**
   * If `true`, creates sharp corners for the message widget
   *
   * @type {?boolean}
   * @default false
   */
  isSharp?: boolean;

  /**
   * If `true`, stretches the message widget to full width of the parent container
   *
   * @type {?boolean}
   * @default false
   */
  isStretched?: boolean;

  /**
   * Callback (if any) after the message widget is closed
   *
   * @type {?((e?: any | undefined) => void)}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose?: (e?: any | undefined) => void;

  /**
   * Color variant of the message, typically used to classify the
   * information based on its level
   *
   * @type {?TColor}
   */
  withColor?: TColor;

  /**
   * Delay timer to remove the message widget.
   *  When set to 0, the message is not removed automatically
   * (in milliseconds)
   *
   * @type {?number}
   * @default 0
   */
  withDuration?: number;

  /**
   * Title of the message widget
   *
   * @type {?(JSX.Element | string)}
   */
  withHeader?: JSX.Element | string;

  /**
   * If `true`, label wont be added to the message widget
   *
   * @type {?boolean}
   * @default false
   */
  withoutLabel?: boolean;
}
