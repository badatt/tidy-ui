import { HTMLAttributes } from 'react';
import { TGirth } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * AvatarProps
 */
export interface IAvatarProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Girth (size) of the Avatar component
   */
  girth?: TGirth;
  /**
   * Icon for the Avatar incase src is not given
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
