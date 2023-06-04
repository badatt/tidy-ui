import { HTMLAttributes } from 'react';
import { TGirth } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * AvatarProps
 */
export interface IAvatarProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Border color for the avatar
   */
  accent?: string;
  /**
   * Girth (size)
   */
  girth?: TGirth;
  /**
   * Icon to render inside incase src is not given
   */
  icon?: JSX.Element;
  /**
   * Name of the avatar
   */
  name?: string;

  /**
   * Image source for the avatar
   */
  src?: string;
}

/**
 * AvatarBadgeProps
 */
export interface IAvatarBadgeProps {
  /**
   * Border color for the avatar
   */
  accent?: string;
  /**
   * Tone of the AvatarBadge
   */
  tone?: string;
}

/**
 * AvatarGroup props
 */
export interface IAvatarGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Girth (size)
   */
  girth?: TGirth;
  /**
   * Maximum number of avatars to be allowed
   */
  max?: number;
}
