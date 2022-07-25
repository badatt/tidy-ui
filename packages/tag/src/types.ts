import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Tag properties
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface ITagProps
 * @typedef {ITagProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  /** Color variant of the tag widget, typically used to classify the
   * information based on its level
   * @default 'major'
   * */
  color?: TColor;

  /** Creates outlined tag widget, won't fill
   * @default false
   * */
  outlined?: boolean;

  /**
   * Desired size of the tag
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {?('sm' | 'md' | 'lg')}
   * @default 'md'
   */
  magnitude?: 'sm' | 'md' | 'lg';

  /**
   * Whether to disable the tag
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {?boolean}
   * @default false
   */
  disable?: boolean;

  /**
   * Icon to be added to the tag
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {?JSX.Element}
   * @default null
   */
  icon?: JSX.Element;

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  /**
   * Callback (if any) after the tag widget is closed
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {?((e?: any | undefined) => void)}
   */
  onClose?: (e?: any | undefined) => void;
}

/**
 * TagGroup properties
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface ITagGroupProps
 * @typedef {ITagGroupProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface ITagGroupProps extends HTMLAttributes<HTMLDivElement> {
  color?: TColor;
  /**
   * On add callback
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {?() => void}
   */
  onAddNewTag?: (v: any) => void;

  magnitude?: 'sm' | 'md' | 'lg';
}
