import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { TSize, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Input variants
 */
export enum Variant {
  'outlined',
  'filled',
  'underline',
  'simple',
}

/**
 * Input variants
 *
 * `outlined` -> Input with an outline box
 * <br />
 * `filled` -> Filled input without any outline but shaded fill color
 * <br />
 * `underline` -> Input with just an underline
 * <br />
 * `simple` -> No styled input
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
   * Color variant of the component, typically used to classify the
   * information based on its level
   *
   * @type {?TStatus}
   */
  status?: TStatus;

  /**
   * If `true`, the component is stretched to full width
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
   * If `true`, elements blend inside Input component
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
   * If `true`, elements blend inside Input component
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
   * Node enclosed in the element
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
