import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { IBaseProps, TSize, TTone } from '@tidy-ui/types';

/**
 * Variant
 */
export enum Variant {
  'hero',
  'outlined',
  'primary',
  'simple',
}

/**
 * Button variants
 *
 * `primary` -> For most significant actions in a page. If at all, only one recommended in a page
 * <br />
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
 * @typedef {TVariant}
 * @public
 */
export type TVariant = keyof typeof Variant;

/**
 * Button props
 *
 * @typedef {IButtonProps}
 * @interface IButtonProps
 * @augments {HTMLAttributes<HTMLButtonElement>}
 * @public
 */
export interface IButtonProps extends IBaseProps, HTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, tone of the button will be a gradient of major and minor tones
   *
   * @default false
   */
  gradient?: boolean;

  /**
   * If `true`, the button is disabled, blocked for actions and a loader is added
   *
   * @type {?boolean}
   * @default false
   */
  loading?: boolean;

  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  size?: TSize;

  /**
   * If `true`, the button is stretched to full width
   *
   * @type {?boolean}
   * @default false
   */
  stretched?: boolean;

  /**
   * The color of the component
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;

  /**
   * If `true`, the text content inside the button is changed to uppercase
   *
   * @type {?boolean}
   */
  uppercase?: boolean;

  /**
   * The variant of the component
   *
   * @type {?TVariant}
   * @default 'basic'
   */
  variant?: TVariant;
}

/**
 * Anchor props
 *
 * @typedef {IAnchorProps}
 * @interface IAnchorProps
 * @augments {AnchorHTMLAttributes<HTMLAnchorElement>}
 * @public
 */
export interface IAnchorProps extends IBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the anchor is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the anchor launches the associated link in a new tab
   *
   * @type {?boolean}
   * @default false
   */
  launch?: boolean;
}

/**
 * IconButton props
 *
 * @typedef {IIconButtonProps}
 * @interface IIconButtonProps
 * @augments {HTMLAttributes<HTMLButtonElement>}
 * @public
 */
export interface IIconButtonProps extends IBaseProps, HTMLAttributes<HTMLButtonElement> {
  /**
   * if `true`, the button is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * Mandatory icon to embed inside the button
   *
   * @type {?JSX.Element}
   */
  icon?: JSX.Element;

  /**
   * If `true`, creates a circular button with icon inside
   *
   * @type {?boolean}
   */
  iconOnly?: boolean;

  /**
   * Placement of the icon inside the button
   *
   * @type {?('left' | 'right')}
   * @default 'left'
   */
  placement?: 'left' | 'right';

  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  size?: TSize;

  /**
   * The color of the component
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;

  /**
   * The variant of the component
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'outlined';
}

/**
 * ButtonGroup props
 *
 * @typedef {IButtonGroupProps}
 * @interface IButtonGroupProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IButtonGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the component is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the component is stretched to full width, equally distributing the buttons width
   *
   * @type {?boolean}
   * @default false
   */
  stretched?: boolean;

  /**
   * If `true`, buttons inside the group are unified and seen as single component.
   * Can see significant change in outlined type button group
   *
   * @type {?boolean}
   * @default false
   */
  unified?: boolean;

  /**
   * If `true`, aligns the button group vertically
   *
   * @type {?boolean}
   * @default false
   */
  vertical?: boolean;
}

/**
 * ButtonToolbar props
 *
 * @typedef {IButtonToolbarProps}
 * @interface IButtonToolbarProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IButtonToolbarProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, disables the toolbar
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;
}
