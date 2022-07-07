import React from "react";

type IColor = 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface ITextProps extends React.HTMLAttributes<HTMLDivElement> {
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
  color?: IColor;
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

export interface IDataFieldProps extends React.HTMLAttributes<HTMLDListElement> {
  color?: IColor;
  accent?: IColor;
  icon?: JSX.Element;
  b?: boolean;
  u?: boolean;
  i?: boolean;
  label?: string;
  value?: string;
  disable?: boolean;
}
