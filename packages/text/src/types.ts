import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

export type TAs =
  | 'hero'
  | 'title1'
  | 'title2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'body1'
  | 'body2'
  | 'code'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export interface ITextProps extends HTMLAttributes<HTMLDivElement> {
  as?: TAs;
  bld?: boolean;
  cc?: boolean;
  clr?: TColor;
  ctr?: boolean;
  dsb?: boolean;
  exd?: boolean;
  itl?: boolean;
  lc?: boolean;
  tnc?: boolean;
  uc?: boolean;
  udl?: boolean;
}

export interface IDataFieldProps extends HTMLAttributes<HTMLDivElement> {
  acc?: TColor;
  bld?: boolean;
  clr?: TColor;
  dsb?: boolean;
  ico?: JSX.Element;
  itl?: boolean;
  lbl?: string;
  udl?: boolean;
  val?: string | number;
}
