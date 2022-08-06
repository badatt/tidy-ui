import { HTMLAttributes } from 'react';

export interface IPanelContext {
  isExpanded?: boolean;
  toggle: () => void;
}

export interface IPanelProps extends HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean;
}

export interface IPanelHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface IPanelBodyProps extends HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
}

export interface IPanelGroupProps extends HTMLAttributes<HTMLDivElement> {}
