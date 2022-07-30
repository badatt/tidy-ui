import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { TColor, TSize } from '@tidy-ui/types';

export type TType = 'primary' | 'outlined' | 'hero' | 'basic' | 'simple';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isLoading?: boolean;
  isStretched?: boolean;
  isUppercase?: boolean;
  withColor?: TColor;
  withSize?: TSize;
  withType?: TType;
}

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isDisabled?: boolean;
  isLaunch?: boolean;
}

export interface IIconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isIconOnly?: boolean;
  withColor?: TColor;
  withIcon?: JSX.Element;
  withPlacement?: 'left' | 'right';
  withSize?: TSize;
  withType?: 'primary' | 'outlined';
}

export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean;
  isStretched?: boolean;
  isUnified?: boolean;
  isVertical?: boolean;
}

export interface IButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean;
}
