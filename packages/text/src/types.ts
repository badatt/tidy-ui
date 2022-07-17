import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

export interface ITextProps extends HTMLAttributes<HTMLDivElement> {
  as?:
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
  color?: TColor;
  b?: boolean;
  u?: boolean;
  i?: boolean;
  uc?: boolean;
  lc?: boolean;
  cc?: boolean;
  disable?: boolean;
  stretch?: boolean;
  center?: boolean;
  truncate?: boolean;
}

export interface IDataFieldProps extends HTMLAttributes<HTMLDListElement> {
  color?: TColor;
  accent?: TColor;
  icon?: JSX.Element;
  b?: boolean;
  u?: boolean;
  i?: boolean;
  label?: string;
  value?: string;
  disable?: boolean;
}
