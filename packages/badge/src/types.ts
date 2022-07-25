import { HTMLAttributes } from 'react';

import { TColor } from '@tidy-ui/types';

export interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: TColor;
  content?: JSX.Element | number | string;
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  variant?: 'dot' | 'standard';
}
