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
 * @typedef {TType}
 * @public
 */
export type TType = 'primary' | 'outlined' | 'hero' | 'basic' | 'simple';

/**
 * Button props
 *
 * @typedef {IButtonProps}
 * @interface IButtonProps
 * @augments {HTMLAttributes<HTMLButtonElement>}
 * @public
 */
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button is disabled
   *
   * @type {?boolean}
   * @default false
   */
  isDisabled?: boolean;

  /**
   * If `true`, the button is disabled, blocked for actions and a loader is added
   *
   * @type {?boolean}
   * @default false
   */
  isLoading?: boolean;

  /**
   * If `true`, the button is stretched to full width
   *
   * @type {?boolean}
   * @default false
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
   * @type {?TColor}
   * @default 'major'
   */
  withColor?: TColor;

  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  withSize?: TSize;

  /**
   * The type of the component
   *
   * @type {?TType}
   * @default 'basic'
   */
  withType?: TType;
}

/**
 * Anchor props
 *
 * @typedef {IAnchorProps}
 * @interface IAnchorProps
 * @augments {AnchorHTMLAttributes<HTMLAnchorElement>}
 * @public
 */
export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the anchor is disabled
   *
   * @type {?boolean}
   * @default false
   */
  isDisabled?: boolean;

  /**
   * If `true`, the anchor launches the associated link in a new tab
   *
   * @type {?boolean}
   * @default false
   */
  isLaunch?: boolean;
}

/**
 * IconButton props
 *
 * @typedef {IIconButtonProps}
 * @interface IIconButtonProps
 * @augments {HTMLAttributes<HTMLButtonElement>}
 * @public
 */
export interface IIconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * if `true`, the button is disabled
   *
   * @type {?boolean}
   * @default false
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
   * @type {?TColor}
   * @default 'major'
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
   * @type {?('left' | 'right')}
   * @default 'left'
   */
  withPlacement?: 'left' | 'right';

  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  withSize?: TSize;

  /**
   * The type of the component
   *
   * @type {?TType}
   * @default 'primary'
   */
  withType?: 'primary' | 'outlined';
}

/**
 * ButtonGroup props
 *
 * @typedef {IButtonGroupProps}
 * @interface IButtonGroupProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the component is disabled
   *
   * @type {?boolean}
   * @default false
   */
  isDisabled?: boolean;

  /**
   * If `true`, the component is stretched to full width, equally distributing the buttons width
   *
   * @type {?boolean}
   * @default false
   */
  isStretched?: boolean;

  /**
   * If `true`, buttons inside the group are unified and seen as single component.
   * Can see significant change in outlined type button group
   *
   * @type {?boolean}
   * @default false
   */
  isUnified?: boolean;

  /**
   * If `true`, aligns the button group vertically
   *
   * @type {?boolean}
   * @default false
   */
  isVertical?: boolean;
}

/**
 * ButtonToolbar props
 *
 * @typedef {IButtonToolbarProps}
 * @interface IButtonToolbarProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, disables the toolbar
   *
   * @type {?boolean}
   * @default false
   */
  isDisabled?: boolean;
}
