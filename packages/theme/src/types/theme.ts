import { ITidyUIBaseTheme } from './base';

export interface ITidyUITheme extends ITidyUIBaseTheme {
  name: string;
  palette: IPalette;
}

interface IPalette {
  major: IColor;
  minor: IColor;
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

export interface IColor {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IHsla {
  hue: number;
  saturation: number;
  luminosity: number;
  alpha: number;
}
