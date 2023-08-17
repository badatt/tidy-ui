import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { IBaseProps, TButtonVariant, TGirth, TTone } from '@tidy-ui/types';

/**
 * Interface defining properties for configuring a Button component.
 *
 * @interface IButtonProps
 * @type {IButtonProps}
 * @augments {ButtonHTMLAttributes<HTMLButtonElement>}
 * @public
 * @since 0.47.0
 */
export interface IButtonProps extends IBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An optional property that determines the size of the button.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * An optional property allowing embedding an icon within the button.
   *
   * @type {JSX.Element}
   * @public
   * @since 0.47.0
   */
  icon?: JSX.Element;

  /**
   * An optional property specifying whether the button should have a gradient tone.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isGradient?: boolean;

  /**
   * An optional property determining whether the button is disabled, blocked for actions, and shows a loader.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isLoading?: boolean;

  /**
   * An optional property specifying whether the button stretches to full width.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isStretched?: boolean;

  /**
   * An optional property specifying whether the text content inside the button is displayed in uppercase.
   *
   * @type {?boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isUppercase?: boolean;

  /**
   * An optional property specifying the color tone of the button.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * An optional property specifying the variant style of the button.
   *
   * `primary` -> For most significant actions in a page. If at all, only one recommended in a page
   * <br />
   * `outlined` -> Second most significant actions, can be multiple
   * <br />
   * `hero` -> Like a banner on a page, use this if you want to standout the action you want
   * the user to take
   * <br />
   * `basic` -> All other actions
   * <br />
   * `simple` -> For ghost actions, use this if you don't want to let user notice that it exists
   * <br />
   *
   * @type {TButtonVariant}
   * @default outlined
   * @public
   * @since 0.47.0
   */
  variant?: TButtonVariant;
}

/**
 * Interface defining properties for configuring an Anchor component.
 *
 * @interface IAnchorProps
 * @type {IAnchorProps}
 * @augments {AnchorHTMLAttributes<HTMLAnchorElement>}
 * @public
 * @since 0.47.0
 */
export interface IAnchorProps extends IBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * An optional property that determines whether the anchor should open the associated link in a new tab.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  canLaunch?: boolean;

  /**
   * An optional property that determines the size of the anchor component.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * An optional property that specifies the color tone of the anchor component.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}

/**
 * Interface defining properties for configuring an IconButton component.
 *
 * @interface IIconButtonProps
 * @type {IIconButtonProps}
 * @augments {ButtonHTMLAttributes<HTMLButtonElement>}
 * @public
 * @since 0.47.0
 */
export interface IIconButtonProps extends IBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An optional property that determines the size of the icon button component.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * A required property representing the mandatory icon embedded inside the button.
   *
   * @type {JSX.Element}
   * @public
   * @since 0.47.0
   */
  icon: JSX.Element;

  /**
   * An optional property that specifies whether the button is circular and contains only an icon.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isIconOnly?: boolean;

  /**
   * An optional property that specifies the placement of the icon inside the button.
   *
   * @type {'left' | 'right'}
   * @default left
   * @public
   * @since 0.47.0
   */
  placement?: 'left' | 'right';

  /**
   * An optional property that specifies the color tone of the icon button component.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * An optional property that specifies the variant style of the icon button component.
   *
   * @type {'primary' | 'outlined'}
   * @default outlined
   * @public
   * @since 0.47.0
   */
  variant?: 'primary' | 'outlined';
}

/**
 * Interface defining properties for configuring a ButtonGroup component.
 *
 * @interface IButtonGroupProps
 * @type {IButtonGroupProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IButtonGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * An optional property that determines whether the button group component stretches to full width, evenly distributing the width of the buttons.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isStretched?: boolean;

  /**
   * An optional property that specifies whether buttons inside the group are visually unified, presenting them as a single component. This can have a significant impact, especially in the case of an outlined button group.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isUnified?: boolean;

  /**
   * An optional property that determines whether the button group is vertically aligned.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isVertical?: boolean;
}

/**
 * Interface defining properties for configuring a ButtonCluster component.
 *
 * @interface IButtonClusterProps
 * @type {IButtonClusterProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IButtonClusterProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * An optional property that determines whether the button cluster component stretches to full width, evenly distributing the width of the buttons.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isStretched?: boolean;
}
