import { HTMLAttributes } from 'react';

/**
 * PanelContext props
 */
export interface IPanelContext {
  /**
   * If `true`, sets the panel expanded
   *
   * @default false
   */
  expanded?: boolean;

  /**
   * Toggle expand/close of the panel
   */
  toggle: () => void;
}

/**
 * PanelProps
 */
export interface IPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, set the panel expanded
   *
   * @default false
   */
  expanded?: boolean;
}

export type IPanelHeaderProps = HTMLAttributes<HTMLDivElement>;

/**
 * PanelBody props
 */
export interface IPanelBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, set the body visible
   *
   * @default false
   */
  visible?: boolean;
}

export type IPanelGroupProps = HTMLAttributes<HTMLDivElement>;
