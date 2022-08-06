import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Size variants of the tag component
 *
 * @typedef {TSize}
 * @public
 */
export type TSize = 'sm' | 'md' | 'lg';

/**
 * Tag properties
 *
 * @typedef {ITagProps}
 * @interface ITagProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the tag is disabled
   *
   * @type {?boolean}
   * @default false
   */
  isDisabled?: boolean;

  /**
   * If `true`, creates outlined tag widget, it won't fill
   *
   * @type {?boolean}
   * @default false
   */
  isOutlined?: boolean;

  /**
   * Callback (if any) after the tag widget is closed
   *
   * @type {?((e?: any | undefined) => void)}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose?: (e?: any | undefined) => void;

  /**
   * Color variant of the tag widget, typically used to classify the
   * information based on its level
   *
   * @type {?TColor}
   * @default 'major'
   */
  withColor?: TColor;

  /**
   * Icon to be added to the tag
   *
   * @type {?JSX.Element}
   * @default null
   */
  withIcon?: JSX.Element;

  /**
   * The size of the component
   *
   * default 'md'
   *
   * @type {?TSize}
   */
  withSize?: TSize;
}

/**
 * TagGroup properties
 *
 * @typedef {ITagGroupProps}
 * @interface ITagGroupProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ITagGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * On add callback
   *
   * @type {?() => void}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onAddNewTag?: (v: any) => void;

  /**
   * Color variant of the add new tag button
   *
   * @type {?TColor}
   * @default 'major'
   */
  withColor?: TColor;

  /**
   * The size of the add new tag button
   *
   * default 'md'
   *
   * @type {?TSize}
   */
  withSize?: TSize;
}
