import { HTMLAttributes, AnchorHTMLAttributes } from 'react';
import { TColor, TSize } from '@tidy-ui/types';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: TSize;
  color?: TColor;
  appearance?: 'primary' | 'outlined' | 'hero' | 'basic' | 'simple';
  disable?: boolean;
  loading?: boolean;
  text?: string;
  icon?: JSX.Element;
  stretch?: boolean;
  uppercase?: boolean;
}

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: TSize;
  newTab?: boolean;
  disable?: boolean;
}
