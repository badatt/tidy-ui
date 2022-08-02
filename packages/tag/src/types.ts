import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Size variants of the tag component
 *
 * @public
 * @typedef {TSize}
 */
export type TSize = 'sm' | 'md' | 'lg';

/**
 * Tag properties
 *
 * @public
 * @interface ITagProps
 * @typedef {ITagProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 */
export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the tag is disabled
   *
   * @default false
   * @type {?boolean}
   */
  isDisabled?: boolean;

  /**
   * If `true`, creates outlined tag widget, it won't fill
   *
   * @default false
   * @type {?boolean}
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
   * @default 'major'
   * @type {?TColor}
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
 * @public
 * @interface ITagGroupProps
 * @typedef {ITagGroupProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
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
   * @default 'major'
   * @type {?TColor}
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
