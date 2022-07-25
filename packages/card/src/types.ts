import { HTMLAttributes } from 'react';

import { TColor } from '@tidy-ui/types';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: TColor;
  href?: string;
  rounded?: boolean;
}

export interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

export interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  href?: string;
  separated?: boolean;
}
