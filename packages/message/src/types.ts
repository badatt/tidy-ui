import { TColor } from '@tidy-ui/types';
import { HTMLAttributes, ReactNode } from 'react';

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Creates a closable message widget with a close button at top right corner
   * @default false
   * */
  closable?: boolean;

  /** Color variant of the message, typically used to classify the
   * information based on its level
   * @default 'info'
   * */
  color?: TColor;

  /** Delay timer to remove the message widget.
   *  When set to 0, the message is not removed automatically
   * (in milliseconds)
   * @default 0
   * */
  duration?: number;

  /** Title of the message widget
   * @default ''
   * */
  header?: ReactNode;

  /** Whether to show label for the widget.
   * Label includes the message classification
   * @default false
   * */
  noLabel?: boolean;

  /** Callback (if any) after the message widget is closed */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose?: (e?: any | undefined) => void;

  /** Creates outlined message widget, won't fill
   * @default false
   * */
  outlined?: boolean;

  /** Creates sharp corners for the message widget
   * @default true
   * */
  sharp?: boolean;

  /** Stretches the message widget to full width of the parent container
   * @default false
   * */
  stretch?: boolean;
}
