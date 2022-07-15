import { HTMLAttributes, ReactNode } from 'react';

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Color variant of the message
   * @default 'info'
   * */
  color?: 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

  /** Creates a closable message box with a close button at top right corner
   * @default false
   * */
  closable?: boolean;

  /** Creates sharp corners for the message
   * @default true
   * */
  sharp?: boolean;

  /** Creates outlined message box, won't fill
   * @default false
   * */
  outlined?: boolean;

  /** Delay timer to remove the message.
   *  When set to 0, the message is not removed automatically
   * (in milliseconds)
   * @default 2000
   * */
  duration?: number;

  /** Title of the message
   * @default ''
   * */
  header?: ReactNode;

  /** Whether to show label
   * @default false
   * */
  noLabel?: boolean;

  /** Stretches the message box to full width of the parent container
   * @default false
   * */
  stretch?: boolean;
}
