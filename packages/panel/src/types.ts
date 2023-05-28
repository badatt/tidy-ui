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
  isExpanded?: boolean;

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
  isExpanded?: boolean;
}

/**
 * PanelHeader props
 */
export interface IPanelHeaderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, shows a toggle button on the panel header
   */
  isToggleVisible?: boolean;
}

/**
 * PanelBody props
 */
export interface IPanelBodyProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, set the body visible
   *
   * @default false
   */
  isVisible?: boolean;
}

/**
 * PanelGroup props
 */
export interface IPanelGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, adds a separator between panels
   */
  hasSeparator?: boolean;
}
