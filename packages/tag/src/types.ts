import { HTMLAttributes, HtmlHTMLAttributes } from 'react';
import { IBaseProps, IClosable, TTone } from '@tidy-ui/types';

/**
 * Size
 */
export enum Size {
  'sm',
  'md',
  'lg',
}

/**
 * Size variants of the tag component
 *
 * @typedef {TSize}
 * @public
 */
export type TSize = keyof typeof Size;

/**
 * Tag properties
 *
 * @typedef {ITagProps}
 * @interface ITagProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ITagProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
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
   * If `true`, creates outlined tag widget, it won't fill
   *
   * @type {?boolean}
   * @default false
   */
  outlined?: boolean;

  /**
   * The size of the component
   *
   *
   * @type {?TSize}
   * @default 'md'
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
export interface ITagGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Margin, css `margin` equivalent
   */
  margin?: string;

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
   * @type {?TSize}
   * @default 'md'
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
 * New Tag input box props
 */
export interface INewTagInput extends IBaseProps, HtmlHTMLAttributes<HTMLInputElement> {
  /**
   * Color variant of the add new tag button
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
  /**
   * The size of the add new tag input
   *
   * @type {?TSize}
   * @default 'md'
   */
  withSize?: TSize;
}
