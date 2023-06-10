import { HTMLAttributes } from 'react';
import { TTone } from '@tidy-ui/commons';
import { IBaseProps, IClosable } from '@tidy-ui/types';

/**
 * Message props
 */
export interface IMessageProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * If `false`, label wont be added to the message widget
   *
   * @type {?boolean}
   * @default false
   */
  hasLabel?: boolean;

  /**
   * If `true`, creates filled message widget
   *
   * @type {?boolean}
   * @default false
   */
  isFilled?: boolean;

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
   * Custom label
   */
  label?: React.ReactNode;

  /**
   * Color variant of the message, typically used to classify the
   * information based on its level
   *
   * @type {?TTone}
   */
  tone?: TTone;
}
