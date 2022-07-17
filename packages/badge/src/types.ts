import { TColor } from '@tidy-ui/types';
import { HTMLAttributes } from 'react';

export interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  content?: JSX.Element | number | string;
  color?: TColor;
  variant?: 'dot' | 'standard';
  showZero?: boolean;
  invisible?: boolean;
  max?: number;
}
