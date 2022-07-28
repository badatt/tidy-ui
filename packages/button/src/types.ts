import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { TColor, TSize } from '@tidy-ui/types';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isLoading?: boolean;
  isStretched?: boolean;
  isUppercase?: boolean;
  withColor?: TColor;
  withIcon?: JSX.Element;
  withSize?: TSize;
  withText?: string;
  withType?: 'primary' | 'outlined' | 'hero' | 'basic' | 'simple';
}

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isDisabled?: boolean;
  isLaunch?: boolean;
  withSize?: TSize;
}
