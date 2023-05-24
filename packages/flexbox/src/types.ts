import { HTMLAttributes } from 'react';
import { IBaseProps, TCreateArrayWithLengthX, TNumericRange } from '@tidy-ui/types';

/**
 * css `flex-direction`
 */
export enum FlexDirection {
  'row',
  'row-reverse',
  'column',
  'column-reverse',
}

/**
 * `flex-direction` props
 */
export type TFlexDirection = keyof typeof FlexDirection;

/**
 * css `align-content`
 */
export enum AlignContent {
  'normal',
  'baseline',
  'first baseline',
  'last baseline',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'unsafe',
  'safe',
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
}

/**
 * `align-content` props
 */
export type TAlignContent = keyof typeof AlignContent;

/**
 * css `align-items`
 */
export enum AlignItems {
  'normal',
  'stretch',
  'baseline',
  'first baseline',
  'last baseline',
  'safe',
  'unsafe',
  'flex-start',
  'flex-end',
  'center',
  'start',
  'end',
  'self-start',
  'self-end',
}

/**
 * `align-items` props
 */
export type TAlignItems = keyof typeof AlignItems;

/**
 * css `align-self`
 */
export enum AlignSelf {
  'auto',
  'normal',
  'stretch',
  'baseline',
  'first baseline',
  'last baseline',
  'unsafe',
  'safe',
  'center',
  'start',
  'end',
  'self-start',
  'self-end',
  'flex-start',
  'flex-end',
}

/**
 * `align-self` props
 */
export type TAlignSelf = keyof typeof AlignSelf;

/**
 * css `justify-content`
 */
export enum JustifyContent {
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'left',
  'right',
  'normal',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'safe',
  'unsafe',
}
/**
 * `justify-content` props
 */
export type TJustifyContent = keyof typeof JustifyContent;

/**
 * FlexBox props
 */
export interface IFlexBoxProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * css `align-content` equivalent
   *
   * @default 'flex-start'
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
   *
   * @default false
   */
  ctr?: boolean;

  /**
   * css `flex-direction` equivalent
   *
   * @default 'row'
   */
  fld?: TFlexDirection;

  /**
   * css `flow` equivalent
   */
  flow?: string;

  /**
   * If `true`, set the FlexBox full height
   *
   * @default false
   */
  fuh?: boolean;

  /**
   * css `gap` equivalent
   */
  gap?: string;

  /**
   * css `justify-content` equivalent
   *
   * @default 'flex-start'
   */
  jsc?: TJustifyContent;

  /**
   * If `true`, sets `flex-wrap: nowrap` the items
   *
   * @default false
   */
  nowrap?: boolean;

  /**
   * css `row-gap` equivalent
   */
  rgp?: string;
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
   * css `flex-shrink` equivalent
   */
  fsk?: number;

  /**
   * If `true`, set the FlexItem full width
   *
   * @default false
   */
  fuw?: boolean;

  /**
   * css `order` equivalent
   */
  ord?: number;

  /**
   * spanning inside a FlexBox, 24 spans to 100% width, 1 spans to 1/24th percent width
   */
  span?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;
}
