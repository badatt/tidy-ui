import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { TSize, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Radio props
 */
export interface IRadioProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Value for the option
   */
  value?: string;

  /**
   * If `true`, aligns the options are aligned vertically
   *
   * @type {?boolean}
   * @default false
   */
  vertical?: boolean;
}

/**
 * RadioOption props
 */
export interface IRadioOptionProps extends IBaseProps, InputHTMLAttributes<HTMLInputElement> {
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
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  sz?: Exclude<TSize, 'xxs' | 'xs' | 'sm'>;

  /**
   * Value for the option
   */
  value: string;
}
