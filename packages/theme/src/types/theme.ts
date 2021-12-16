import { ITidyUIBaseTheme } from './base';

export interface ITidyUITheme extends ITidyUIBaseTheme {
  name: string;
  palette: IPalette;
}

interface IPalette {
  primary: IColor;
  secondary: IColor;
  neutral: IColor;
  info: IColor;
  success: IColor;
  warning: IColor;
  danger: IColor;
  text: ITextColor;
  background: IBackgroundColor;
  divider: string;
}

interface IBackgroundColor {
  paper: string;
  card: string;
  default: string;
}

interface ITextColor {
  primary: string;
  secondary: string;
  disabled: string;
}

interface IColor {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}
