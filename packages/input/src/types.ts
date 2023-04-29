import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { TSize, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Variant
 */
export enum Variant {
  'outlined',
  'filled',
  'underline',
  'simple',
}

/**
 * Button variants
 *
 * `primary` -> For most significant actions in a page. If at all, only one recommended in a page
 * <br />
 * `outlined` -> Second most significant actions, can be multiple
 * <br />
 * `hero` -> Like a banner on a page, use this if you want to standout the action you want
 * the user to take
 * <br />
 * `basic` -> default actions
 * <br />
 * `simple` -> For ghost actions, use this if you don't want to let user notice that it exists
 * <br />
 *
 * @typedef {TVariant}
 * @public
 */
export type TVariant = keyof typeof Variant;

/**
 * Input props
 */
export interface ITextInputProps extends IBaseProps, InputHTMLAttributes<HTMLInputElement> {
  /**
   * Caption for the component
   *
   * @type {?string}
   */
  caption?: string;

  /**
   * If `true`, the component is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * Color variant of the Alert, typically used to classify the
   * information based on its level
   *
   * @type {?TStatus}
   */
  status?: TStatus;

  /**
   * If `true`, the button is stretched to full width
   *
   * @type {?boolean}
   * @default false
   */
  stretched?: boolean;

  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  sz?: TSize;

  /**
   * The variant of the component
   *
   * @type {?TVariant}
   * @default 'outlined'
   */
  variant?: TVariant;
}

/**
 * InputGroup props
 */
export interface IInputGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the component
   *
   * @type {?boolean}
   * @default false
   */
  blend?: boolean;

  /**
   * If `true`, the component is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  sz?: TSize;
}

/**
 * InputBlend props
 */
export interface IInputElementProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the component
   *
   * @type {?boolean}
   * @default false
   */
  blend?: boolean;
  /**
   * If `true`, the element is clickable
   *
   * @type {?boolean}
   * @default false
   */
  clickable?: boolean;
  /**
   * If `true`, the component is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;
  /**
   * Node
   */
  node: ReactNode;

  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  sz?: TSize;
}
