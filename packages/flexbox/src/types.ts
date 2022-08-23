import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * `flex-direction` props
 */
export type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * `flex-wrap` props
 */
export type TFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

/**
 * `align-content` props
 */
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

/**
 * `align-items` props
 */
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

/**
 * `align-self` props
 */
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

/**
 * `justify-content` props
 */
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
 * FlexBox props
 */
export interface IFlexBoxProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * css `align-content` equivalent
   */
  alc?: TAlignContent;

  /**
   * css `align-items` equivalent
   */
  ali?: TAlignItems;

  /**
   * css `column-gap` equivalent
   */
  cgp?: string;
  /**
   * If `true`, places the items inside flexbox center both on main and cross axis.
   * Set `align-content` & `justify-content` to center. Set to full height if height is not
   * provided
   */
  ctr?: boolean;

  /**
   * css `flex-direction` equivalent
   */
  fld?: TFlexDirection;

  /**
   * css `flow` equivalent
   */
  flow?: string;

  /**
   * If `true`, set the FlexBox full height
   */
  fuh?: boolean;

  /**
   * css `flex-wrap` equivalent
   */
  fwp?: TFlexWrap;

  /**
   * css `gap` equivalent
   */
  gap?: string;
  /**
   * css `height` equivalent
   */
  h?: string;

  /**
   * css `justify-content` equivalent
   */
  jsc?: TJustifyContent;

  /**
   * css `row-gap` equivalent
   */
  rgp?: string;

  /**
   * css `width` equivalent
   */
  w?: string;
}

/**
 * FlexItem props
 */
export interface IFlexItemProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * css `align-self` equivalent
   */
  als?: TAlignSelf;
  /**
   * css `flex-basis` equivalent
   */
  fbs?: string;
  /**
   * css `flex-grow` equivalent
   */
  fgo?: number;
  /**
   * css `flex` equivalent
   */
  flx?: string;
  /**
   * css `flex=shrink` equivalent
   */
  fsk?: number;
  /**
   * css `order` equivalent
   */
  ord?: number;
}
