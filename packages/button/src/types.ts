import { Size, Variant, Status, Appearance } from '@tidy-ui/types';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: Size;
  kind?: Variant | Status;
  appearance?: Appearance;
  disabled?: boolean;
  loading?: boolean;
  text?: string;
  icon?: JSX.Element;
  fullWidth?: boolean;
  uppercase?: boolean;
}
