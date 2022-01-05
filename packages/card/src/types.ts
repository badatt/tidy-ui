export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  rounded?: boolean;
}

export interface ICardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

export interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}
