import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Interface for configuring props to react to tab changes.
 *
 * @interface IWhenTabChangeProps
 * @type {IWhenTabChangeProps}
 * @public
 * @since 0.47.0
 */
export interface IWhenTabChangeProps {
  /**
   * Specifies the index of the active tab. This property represents the index of the currently selected tab in a tabbed interface.
   * When provided to a component, the component can react to tab changes and update its content or behavior based on the selected tab.
   * The activeTabIndex can be set to a specific tab index to indicate which tab is currently active.
   * If not provided, the tab index will be 0, indicating that the very first tab is currently active.
   *
   * @type {number}
   * @default 0
   * @public
   * @since 0.47.0
   */
  activeTabIndex?: number;
}

/**
 * Interface for configuring props for a group of tabs.
 *
 * @interface ITabsGroupProps
 * @type {ITabsGroupProps}
 * @public
 * @since 0.47.0
 */
export interface ITabsGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the index of the active tab within the group. This property determines which tab is initially
   * selected and displayed as active when the TabsGroup component is rendered.
   * The active tab index corresponds to the order of tabs within the group, with indexing starting from 0. If not provided,
   * the very first tab with index 0 will be initially selected as active.
   *
   * @type {number}
   * @default 0
   * @public
   * @since 0.47.0
   */
  activeTabIndex?: number;
}

/**
 * Interface for configuring props for the Tabs component.
 *
 * @interface ITabsProps
 * @type {ITabsProps}
 * @public
 * @since 0.47.0
 */
export interface ITabsProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Determines whether the Tabs component should justify its content to the full width of the screen.
   * When set to true, the tabs and associated content will expand to fill the available width.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  canJustify?: boolean;

  /**
   * Determines whether the Tabs component highlights the active tab with a distinct style. When set to true, the active tab will be visually highlighted.
   *
   * @type {boolean}
   * @default true
   * @public
   * @since 0.47.0
   */
  hasDefaultStyle?: boolean;

  /**
   * Determines whether the Tabs component should occupy the full width of the screen.
   * When set to true, the entire Tabs component will span the width of its parent container.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  hasFullWidth?: boolean;

  /**
   * Callback function invoked when a tab is changed. The function is passed an optional object containing the index of the active tab.
   * This allows you to respond to tab changes and update your application's state or perform other actions accordingly.
   *
   * @type {Function}
   * @param {IWhenTabChangeProps} e tab index
   * @returns {void}
   * @public
   * @since 0.47.0
   */
  whenTabChange?: (e?: IWhenTabChangeProps) => void;
}
/**
 * @private
 */
export interface ITabProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {}

/**
 * Interface for configuring props for the container of tab panels.
 *
 * @interface ITabPanelsProps
 * @type {ITabPanelsProps}
 * @public
 * @since 0.47.0
 */
export interface ITabPanelsProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Determines whether the tab panels should be loaded on-demand.
   * When set to true, the tab panels will only be loaded when their content is needed, potentially improving the initial rendering performance of the Tabs component.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isLazy?: boolean;
}

/**
 * Interface for configuring props for an individual tab panel.
 *
 * @interface ITabPanelProps
 * @type {ITabPanelProps}
 * @public
 * @since 0.47.0
 */
export interface ITabPanelProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Determines whether the tab panel should be loaded on-demand.
   * When set to true, the content of the tab panel will only be loaded when it becomes active, potentially improving the initial rendering performance of the Tabs component.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isLazy?: boolean;
}
