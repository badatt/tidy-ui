import { HTMLAttributes } from 'react';
import {
  IBaseProps,
  TAlignContent,
  TAlignItems,
  TAlignSelf,
  TCreateArrayWithLengthX,
  TFlexDirection,
  TJustifyContent,
  TNumericRange,
} from '@tidy-ui/types';

/**
 * The IFlexBoxProps interface opens the door to creating versatile and adaptable layouts using the power of flexbox. Whether you're aligning, justifying, or wrapping content, this interface puts the control in your hands.
 *
 * @interface IFlexBoxProps
 * @type {IFlexBoxProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IFlexBoxProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Similar to CSS 'align-content', this property aligns flex lines within the flex container when there's extra space.
   *
   * @type {TAlignContent}
   * @default flex-start
   * @public
   * @since 0.47.0
   */
  alc?: TAlignContent;

  /**
   * Similar to CSS align-items, this property aligns items along the cross axis within the flex container.
   *
   * @type {TAlignItems}
   * @public
   * @since 0.47.0
   */
  ali?: TAlignItems;

  /**
   * Equivalent to CSS column-gap, this property controls the gap between columns in a multi-column layout.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  cgp?: string;

  /**
   * If set to true, centers the items both horizontally and vertically within the flex container.
   * It also sets align-content and justify-content to center.
   * If no height is provided, it stretches to full height.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  ctr?: boolean;

  /**
   * Equivalent to CSS flex-direction, this property controls the direction in which flex items are placed within the flex container.
   *
   * @type {TFlexDirection}
   * @default 'row'
   * @public
   * @since 0.47.0
   */
  fld?: TFlexDirection;

  /**
   * Equivalent to CSS flow, this property controls the flow of content within a flex container.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  flow?: string;

  /**
   * If set to true, sets the FlexBox to full height, expanding to the entire available vertical space.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  fuh?: boolean;

  /**
   * Equivalent to CSS gap, this property controls the gap between flex items.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  gap?: string;

  /**
   * Similar to CSS justify-content, this property aligns items along the main axis within the flex container.
   *
   * @type {TJustifyContent}
   * @default flex-start
   * @public
   * @since 0.47.0
   */
  jsc?: TJustifyContent;

  /**
   * If set to true, prevents flex items from wrapping to the next line, forcing them to stay in a single line.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  nowrap?: boolean;

  /**
   * Equivalent to CSS row-gap, this property controls the gap between rows in a multi-row layout.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  rgp?: string;
}

/**
 * The IFlexItemProps interface opens the door to creating flexible and adaptive content within your layouts.
 * Whether you're fine-tuning alignment, controlling growth, or setting the order of flex items, this interface puts the control at your fingertips.
 *
 * @interface IFlexBoxProps
 * @type {IFlexBoxProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IFlexItemProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Equivalent to CSS align-self, this property allows you to customize the alignment of a specific flex item within its container.
   *
   * @type {TAlignSelf}
   * @public
   * @since 0.47.0
   */
  als?: TAlignSelf;

  /**
   * Equivalent to CSS flex-basis, this property sets the initial main size of a flex item before additional space is distributed.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  fbs?: string;

  /**
   * Equivalent to CSS flex-grow, this property controls how much a flex item grows in relation to other flex items within the same container.
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  fgo?: number;

  /**
   * Equivalent to CSS flex, this property combines the flex-grow, flex-shrink, and flex-basis properties into a single value.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  flx?: string;

  /**
   * Equivalent to CSS flex-shrink, this property controls how much a flex item shrinks in relation to other flex items within the same container.
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  fsk?: number;

  /**
   * If set to true, the FlexItem expands to full width within its container, utilizing the entire available horizontal space.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  fuw?: boolean;

  /**
   * Equivalent to CSS order, this property allows you to control the order in which flex items appear within the container.
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  ord?: number;

  /**
   * Controls the width of the flex item within a FlexBox, ranging from 1/24th to 100% width.
   * Values ranging from 1 to 24
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  span?: TNumericRange<TCreateArrayWithLengthX<1>, 24>;
}
