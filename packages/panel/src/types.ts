import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

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
  /**
   * Margin, css `margin` equivalent
   */
  margin?: string;
}

/**
 * PanelHeader props
 */
export interface IPanelHeaderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the header
   */
  ele?: JSX.Element;
}

/**
 * PanelBody props
 */
export interface IPanelBodyProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the body
   */
  ele?: JSX.Element;
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
export interface IPanelGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Margin, css `margin` equivalent
   */
  margin?: string;
}
