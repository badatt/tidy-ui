import { HTMLAttributes } from 'react';

export interface IPanelContext {
  isExpanded?: boolean;
  toggle: () => void;
}

export interface IPanelProps extends HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean;
}

export type IPanelHeaderProps = HTMLAttributes<HTMLDivElement>;
export interface IPanelBodyProps extends HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
}

export type IPanelGroupProps = HTMLAttributes<HTMLDivElement>;
