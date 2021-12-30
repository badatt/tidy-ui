export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: 'info' | 'success' | 'warning' | 'danger';
  rounded?: boolean;
}

export interface ICardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

export interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}
