import { HTMLAttributes } from 'react';
import { IBaseProps } from 'packages/types/dist/src';

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
 * Panel props
 */
export interface IPanelProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, set the panel expanded
   *
   * @default false
   */
  expanded?: boolean;
}

/**
 * PanelHeader props
 */
export type IPanelHeaderProps = IBaseProps | HTMLAttributes<HTMLDivElement>;

/**
 * PanelBody props
 */
export interface IPanelBodyProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, set the body visible
   *
   * @default false
   */
  visible?: boolean;
}

/**
 * PanelGroup props
 */
export type IPanelGroupProps = IBaseProps | HTMLAttributes<HTMLDivElement>;
