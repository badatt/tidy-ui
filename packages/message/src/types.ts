import { HTMLAttributes, ReactNode } from 'react';

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Color variant of the message, typically used to classify the
   * information based on its level
   * @default 'info'
   * */
  color?: 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

  /** Creates a closable message widget with a close button at top right corner
   * @default false
   * */
  closable?: boolean;

  /** Creates sharp corners for the message widget
   * @default true
   * */
  sharp?: boolean;

  /** Creates outlined message widget, won't fill
   * @default false
   * */
  outlined?: boolean;

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

  /** Stretches the message widget to full width of the parent container
   * @default false
   * */
  stretch?: boolean;

  /** Callback (if any) after the message widget is closed */
  onClose?: (e?: any | undefined) => void;
}
