import React, { HTMLAttributes } from 'react';
import { IBaseProps, TStackAlign, TStackJustify, TStackOrder } from '@tidy-ui/types';

/**
 * Interface for configuring props for the Stack component.
 *
 * @interface IStackProps
 * @type {IStackProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IStackProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Determines how the items are aligned along the cross-axis of the stack. This property is equivalent to the CSS `align-items` property.
   *
   * @type {TStackAlign}
   * @default flex-start
   * @public
   * @since 0.47.0
   */
  align?: TStackAlign;

  /**
   * Controls whether the stack can wrap its items to the next line. This property is equivalent to the CSS `flex-wrap` property.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  canFold?: boolean;

  /**
   * Specifies a React node that will be used as a separator between stack items. This can be any valid React element.
   *
   * @type {React.ReactNode}
   * @public
   * @since 0.47.0
   */
  divider?: React.ReactNode;

  /**
   * Sets the gap (spacing) between stack items. This property is equivalent to the CSS `gap` property and determines the spacing between adjacent items in the stack.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  gap?: string;

  /**
   * Determines how the items are justified along the main axis of the stack. This property is equivalent to the CSS `justify-content` property.
   *
   * @type {TStackJustify}
   * @default flex-start
   * @public
   * @since 0.47.0
   */
  justify?: TStackJustify;

  /**
   * Specifies the direction in which the elements are arranged inside the stack.
   * This property controls the order of items and is particularly useful for responsive layouts.
   *
   * @type {TStackOrder}
   * @default row
   * @public
   * @since 0.47.0
   */
  order?: TStackOrder;
}
