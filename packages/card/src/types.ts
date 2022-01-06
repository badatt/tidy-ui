export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  rounded?: boolean;
  href?: string;
}

export interface ICardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

export interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
  href?: string;
}
