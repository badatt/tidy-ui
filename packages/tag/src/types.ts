import { HTMLAttributes, HtmlHTMLAttributes } from 'react';
import { TTone } from '@tidy-ui/types';

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
  disabled?: boolean;

  /**
   * Icon to be added to the tag
   *
   * @type {?JSX.Element}
   * @default null
   */
  icon?: JSX.Element;

  /**
   * Callback (if any) after the tag widget is closed
   *
   * @type {?((e?: any | undefined) => void)}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose?: (e?: any | undefined) => void;

  /**
   * If `true`, creates outlined tag widget, it won't fill
   *
   * @type {?boolean}
   * @default false
   */
  outlined?: boolean;

  /**
   * The size of the component
   *
   * default 'md'
   *
   * @type {?TSize}
   */
  size?: TSize;

  /**
   * Color variant of the tag widget, typically used to classify the
   * information based on its level
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
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
   * The size of the add new tag button
   *
   * default 'md'
   *
   * @type {?TSize}
   */
  size?: TSize;

  /**
   * Color variant of the add new tag button
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
}

/**
 *
 */
export interface INewTagInput extends HtmlHTMLAttributes<HTMLInputElement> {
  /**
   * Color variant of the add new tag button
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
  /**
   *
   */
  withSize?: TSize;
}
