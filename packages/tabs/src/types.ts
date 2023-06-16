import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * PanelContext props
 */
export interface ITabsContext {
  /**
   * Active Tab index
   */
  activeTabIndex?: number;
  /**
   * On Tab change
   */
  onTabChange: (tabIndex?: number) => void;
}

/**
 * WhenTabChange
 */
export interface IWhenTabChangeProps {
  /**
   * Active Tab index
   */
  activeTabIndex?: number;
}

/**
 * TabsGroupProps
 */
export interface ITabsGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Active Tab index
   */
  activeTabIndex?: number;
}
/**
 * TabsProps
 */
export interface ITabsProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, Tabs justifies to full width of the screen
   */
  canJustify?: boolean;

  /**
   * If `true`, Tabs are highlighted on active
   */
  hasDefaultStyle?: boolean;

  /**
   * If `true`, Tabs occupy full width of the screen
   */
  hasFullWidth?: boolean;

  /**
   * Call back on Tab change
   *
   * @param {IWhenTabChangeProps} e tab index
   * @returns {void}
   */
  whenTabChange?: (e?: IWhenTabChangeProps) => void;
}
/**
 * TabProps
 */
export interface ITabProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {}
/**
 * TabPanelsProps
 */
export interface ITabPanelsProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, loads TabPanels on-demand
   */
  isLazy?: boolean;
}
/**
 * TabPanelProps
 */
export interface ITabPanelProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {}
