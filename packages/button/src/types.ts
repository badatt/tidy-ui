export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  kind?: 'primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  appearance?: 'filled' | 'outlined' | 'hero' | 'basic';
  disabled?: boolean;
  loading?: boolean;
  text?: string;
  icon?: JSX.Element;
  fullWidth?: boolean;
  uppercase?: boolean;
}
