import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  isSharp?: boolean;
  withAccent?: TColor;
  withHref?: string;
}

export interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  isDivided?: boolean;
}

export interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  isDivided?: boolean;
  withHref?: string;
}
