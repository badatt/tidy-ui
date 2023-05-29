import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { TGirth, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Radio props
 */
export interface IRadioProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, aligns the options are aligned vertically
   *
   * @type {?boolean}
   * @default false
   */
  isVertical?: boolean;

  /**
   * Value for the option
   */
  value?: string;
}

/**
 * RadioOption props
 */
export interface IRadioOptionProps extends IBaseProps, InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the component
   *
   * @type {?TGirth}
   * @default 'md'
   */
  girth?: Exclude<TGirth, 'xxs' | 'xs' | 'sm'>;

  /**
   * Color variant of the component, typically used to classify the
   * information based on its level
   *
   * @type {?TStatus}
   */
  status?: TStatus;

  /**
   * Value for the option
   */
  value: string;
}
