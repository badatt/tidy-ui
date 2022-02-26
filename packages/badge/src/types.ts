export interface IBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  content?: JSX.Element | number | string;
  color?: 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  variant?: 'dot' | 'standard';
  showZero?: boolean;
  invisible?: boolean;
  max?: number;
}
