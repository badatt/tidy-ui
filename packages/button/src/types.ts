import { AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { TColor, TSize } from '@tidy-ui/types';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'outlined' | 'hero' | 'basic' | 'simple';
  color?: TColor;
  disable?: boolean;
  icon?: JSX.Element;
  loading?: boolean;
  size?: TSize;
  stretch?: boolean;
  text?: string;
  uppercase?: boolean;
}

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disable?: boolean;
  newTab?: boolean;
  size?: TSize;
}
