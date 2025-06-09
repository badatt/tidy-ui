import React, { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Props for the Menu component.
 *
 * The Menu component provides a container for menu items with customizable styling
 * and trigger elements. It extends base props and HTML menu element attributes.
 *
 * @interface IMenuProps
 */
export interface IMenuProps extends IBaseProps, HTMLAttributes<HTMLMenuElement> {
  /**
   * Controls whether the menu has sharp (squared) corners or rounded corners.
   * When true, the menu will display with sharp corners instead of the default rounded appearance.
   *
   * @type {boolean}
   * @default false
   */
  isSharp?: boolean;

  /**
   * The trigger element that will open/close the menu when interacted with.
   * This should be a React element that can receive HTML attributes (like buttons, divs, etc.).
   * The trigger element will typically handle click events to show/hide the menu.
   *
   * @type {React.ReactElement}
   * @example
   * ```tsx
   * <Menu trigger={<button>Open Menu</button>}>
   *   // menu items
   * </Menu>
   * ```
   */
  trigger: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}

/**
 * Props for the MenuPopup component.
 *
 * The MenuPopup extends the base Menu component with additional positioning
 * and visibility controls. It handles the popup behavior and positioning
 * of the menu relative to its trigger element.
 *
 * @interface IMenuPopupProps
 */
export interface IMenuPopupProps extends IMenuProps {
  /**
   * Controls the horizontal alignment of the menu popup relative to its trigger element.
   * - 'left': Aligns the menu to the left edge of the trigger
   * - 'right': Aligns the menu to the right edge of the trigger
   *
   * @type {'left' | 'right'}
   */
  ali: 'left' | 'right';

  /**
   * Controls the visibility state of the menu popup.
   * When true, the menu is displayed; when false, it's hidden.
   * This is typically controlled by the parent component's state.
   *
   * @type {boolean}
   */
  isVisible: boolean;

  /**
   * Controls the vertical positioning of the menu popup relative to its trigger element.
   * - 'top': Positions the menu above the trigger element
   * - 'bottom': Positions the menu below the trigger element
   *
   * @type {'top' | 'bottom'}
   */
  pos: 'top' | 'bottom';
}

/**
 * Props for individual MenuItem components.
 *
 * The MenuItem component represents a single selectable item within a menu.
 * It extends base props and HTML list item attributes since menu items
 * are typically rendered as list items for semantic correctness.
 *
 * @interface IMenuItemProps
 */
export interface IMenuItemProps extends IBaseProps, HTMLAttributes<HTMLLIElement> {
  /**
   * Optional icon element to display alongside the menu item text.
   * The icon will typically be positioned to the left of the text content.
   * Can be any JSX element, commonly an icon component or SVG.
   *
   * @type {JSX.Element}
   * @example
   * ```tsx
   * <MenuItem icon={<HomeIcon />}>Home</MenuItem>
   * <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
   * ```
   */
  icon?: JSX.Element;

  /**
   * Controls whether the menu item has sharp (squared) corners or rounded corners.
   * When true, the menu item will display with sharp corners instead of the default rounded appearance.
   * This should typically match the parent menu's isSharp setting for visual consistency.
   *
   * @type {boolean}
   * @default false
   */
  isSharp?: boolean;
}
