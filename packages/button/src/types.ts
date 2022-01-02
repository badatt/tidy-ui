export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  color?: 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  appearance?: 'primary' | 'outlined' | 'hero' | 'basic' | 'simple';
  disable?: boolean;
  loading?: boolean;
  text?: string;
  icon?: JSX.Element;
  stretch?: boolean;
  uppercase?: boolean;
}

export interface IAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  newTab?: boolean;
  disable?: boolean;
}
