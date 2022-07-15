import { HTMLAttributes } from 'react';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  rounded?: boolean;
  href?: string;
}

export interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

export interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
  href?: string;
}
