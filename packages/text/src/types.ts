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
  b?: boolean;
  cc?: boolean;
  center?: boolean;
  color?: TColor;
  disable?: boolean;
  i?: boolean;
  lc?: boolean;
  stretch?: boolean;
  truncate?: boolean;
  u?: boolean;
  uc?: boolean;
}

export interface IDataFieldProps extends HTMLAttributes<HTMLDListElement> {
  accent?: TColor;
  b?: boolean;
  color?: TColor;
  disable?: boolean;
  i?: boolean;
  icon?: JSX.Element;
  label?: string;
  u?: boolean;
  value?: string;
}
