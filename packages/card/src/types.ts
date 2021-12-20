import { Status } from '@tidy-ui/types';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: Status;
  rounded?: boolean;
}

export interface ICardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

export interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}
