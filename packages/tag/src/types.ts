import { HTMLAttributes, HtmlHTMLAttributes } from 'react';
import { TGirth, TTone } from '@tidy-ui/commons';
import { IBaseProps, IClosable } from '@tidy-ui/types';

/**
 * TagGirth
 */
type TagGirth = Extract<TGirth, 'sm' | 'md' | 'lg'>;

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
   * The girth of the component
   *
   * @type {?TagGirth}
   * @default 'md'
   */
  girth?: TagGirth;

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
  isFilled?: boolean;

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
   * The girth of the component
   *
   * @type {?TagGirth}
   * @default 'md'
   */
  girth?: TagGirth;

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
   * The girth of the component
   *
   * @type {?TagGirth}
   * @default 'md'
   */
  girth?: TagGirth;
  /**
   * Color variant of the add new tag button
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
}
