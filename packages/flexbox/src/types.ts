import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

export type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type TFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type TAlignContent =
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'unsafe'
  | 'safe'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end';

export type TAlignItems =
  | 'normal'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe'
  | 'unsafe'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end';

export type TAlignSelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'unsafe'
  | 'safe'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end';

export type TJustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe'
  | 'unsafe';

/**
 *
 */
export interface IFlexBoxProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   *
   */
  alc?: TAlignContent;

  /**
   *
   */
  ali?: TAlignItems;

  /**
   *
   */
  cgp?: string;
  /**
   *
   */
  ctr?: boolean;

  /**
   *
   */
  fld?: TFlexDirection;

  /**
   *
   */
  flow?: string;

  /**
   *
   */
  fuh?: boolean;

  /**
   *
   */
  fwp?: TFlexWrap;

  /**
   *
   */
  gap?: string;
  /**
   *
   */
  h?: string;

  /**
   *
   */
  jsc?: TJustifyContent;

  /**
   *
   */
  rgp?: string;

  /**
   *
   */
  w?: string;
}

/**
 *
 */
export interface IFlexItemProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   *
   */
  als?: TAlignSelf;
  /**
   *
   */
  fbs?: string;
  /**
   *
   */
  fgo?: number;
  /**
   *
   */
  flx?: string;
  /**
   *
   */
  fsk?: number;
  /**
   *
   */
  ord?: number;
}
