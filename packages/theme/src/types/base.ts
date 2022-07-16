import { DefaultTheme } from 'styled-components';

export interface ITidyUIBaseTheme extends DefaultTheme {
  breakpoints: IBreakpoints;
  layout: ILayout;
  typography: ITypography;
}

export interface IBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ILayout {
  radius: string;
  shadow: string;
}

export interface ITypography {
  fontSize: string;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  hero: IText;
  title1: IText;
  title2: IText;
  subtitle1: IText;
  subtitle2: IText;
  caption: IText;
  body1: IText;
  body2: IText;
  code: IText;
  span: IText;
  p: IText;
  h1: IText;
  h2: IText;
  h3: IText;
  h4: IText;
  h5: IText;
  h6: IText;
}

export interface IText {
  fontWeight: number | string;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
}
