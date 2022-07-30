import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { TColor, TSize } from '@tidy-ui/types';

/**
 * Button types
 *
 * `primary` -> For most significant actions in a page. If at all, only one recommended in a page
 *  <br />
 * `outlined` -> Second most significant actions, can be multiple
 * <br />
 * `hero` -> Like a banner on a page, use this if you want to standout the action you want
 * the user to take
 * <br />
 * `basic` -> default actions
 * <br />
 * `simple` -> For ghost actions, use this if you don't want to let user notice that it exists
 * <br />
 *
 * @export
 * @typedef {TType}
 */
export type TType = 'primary' | 'outlined' | 'hero' | 'basic' | 'simple';

/**
 * Button props
 *
 * @export
 * @interface IButtonProps
 * @typedef {IButtonProps}
 * @extends {HTMLAttributes<HTMLButtonElement>}
 */
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button is disabled
   *
   * @default false
   * @type {?boolean}
   */
  isDisabled?: boolean;

  /**
   * If `true`, the button is disabled, blocked for actions and a loader is added
   *
   * @default false
   * @type {?boolean}
   */
  isLoading?: boolean;

  /**
   * If `true`, the button is stretched to full width
   *
   * @default false
   * @type {?boolean}
   */
  isStretched?: boolean;

  /**
   * If `true`, the text content inside the button is changed to uppercase
   *
   * @type {?boolean}
   */
  isUppercase?: boolean;

  /**
   * The color of the component
   *
   * @default 'major'
   * @type {?TColor}
   */
  withColor?: TColor;

  /**
   * The size of the component
   *
   * @default 'md'
   * @type {?TSize}
   */
  withSize?: TSize;

  /**
   * The type of the component
   *
   * @default 'basic'
   * @type {?TType}
   */
  withType?: TType;
}

/**
 * Anchor props
 *
 * @export
 * @interface IAnchorProps
 * @typedef {IAnchorProps}
 * @extends {AnchorHTMLAttributes<HTMLAnchorElement>}
 */
export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the anchor is disabled
   *
   * @default false
   * @type {?boolean}
   */
  isDisabled?: boolean;

  /**
   * If `true`, the anchor launches the associated link in a new tab
   *
   * @default false
   * @type {?boolean}
   */
  isLaunch?: boolean;
}

/**
 * IconButton props
 *
 * @export
 * @interface IIconButtonProps
 * @typedef {IIconButtonProps}
 * @extends {HTMLAttributes<HTMLButtonElement>}
 */
export interface IIconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * if `true`, the button is disabled
   *
   * @default false
   * @type {?boolean}
   */
  isDisabled?: boolean;

  /**
   * If `true`, creates a circular button with icon inside
   *
   * @type {?boolean}
   */
  isIconOnly?: boolean;

  /**
   * The color of the component
   *
   * @default 'major'
   * @type {?TColor}
   */
  withColor?: TColor;

  /**
   * Mandatory icon to embed inside the button
   *
   * @type {?JSX.Element}
   */
  withIcon?: JSX.Element;

  /**
   * Placement of the icon inside the button
   *
   * @default 'left'
   * @type {?('left' | 'right')}
   */
  withPlacement?: 'left' | 'right';

  /**
   * The size of the component
   *
   * @default 'md'
   * @type {?TSize}
   */
  withSize?: TSize;

  /**
   * The type of the component
   *
   * @default 'primary'
   * @type {?TType}
   */
  withType?: 'primary' | 'outlined';
}

/**
 * ButtonGroup props
 *
 * @export
 * @interface IButtonGroupProps
 * @typedef {IButtonGroupProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the component is disabled
   *
   * @default false
   * @type {?boolean}
   */
  isDisabled?: boolean;

  /**
   * If `true`, the component is stretched to full width, equally distributing the buttons width
   *
   * @default false
   * @type {?boolean}
   */
  isStretched?: boolean;

  /**
   * If `true`, buttons inside the group are unified and seen as single component.
   * Can see significant change in outlined type button group
   *
   * @default false
   * @type {?boolean}
   */
  isUnified?: boolean;

  /**
   * If `true`, aligns the button group vertically
   *
   * @default false
   * @type {?boolean}
   */
  isVertical?: boolean;
}

/**
 * ButtonToolbar props
 *
 * @export
 * @interface IButtonToolbarProps
 * @typedef {IButtonToolbarProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface IButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, disables the toolbar
   *
   * @default false
   * @type {?boolean}
   */
  isDisabled?: boolean;
}
