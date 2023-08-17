import { HTMLAttributes } from 'react';
import { IBaseProps, TGirth } from '@tidy-ui/types';

/**
 * Interface defining properties for configuring an Avatar component.
 *
 * @interface IAvatarProps
 * @type {IAvatarProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IAvatarProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * An optional property that allows specifying the border color for the avatar.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  accent?: string;

  /**
   * An optional property that determines the size (girth) of the avatar.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * An optional property that provides a custom JSX icon element to be rendered within the avatar if no image source (`src`) is provided.
   *
   * @type {JSX.Element}
   * @default <Icon.Person />
   * @public
   * @since 0.47.0
   */
  icon?: JSX.Element;

  /**
   * An optional attribute employed for the generation of initials, which holds precedence over the `icon` property.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  name?: string;

  /**
   * An optional attribute that precisely designates the image source for the avatar, and it takes precedence over both the `name` and `icon` properties.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  src?: string;
}

/**
 * Interface defining properties for configuring an AvatarBadge component.
 *
 * @interface IAvatarBadgeProps
 * @type {IAvatarBadgeProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IAvatarBadgeProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * An optional attribute that enables the specification of the border color for the avatar badge.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  accent?: string;

  /**
   * An optional attribute that decisively defines the tone of the avatar badge.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  tone?: string;
}

/**
 * Interface defining properties for configuring an AvatarGroup component.
 *
 * @interface IAvatarGroupProps
 * @type {IAvatarGroupProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IAvatarGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * An optional property that determines the size (girth) of the avatar group.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * An optional property that specifies the maximum number of avatars allowed within the group.
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  max?: number;
}
