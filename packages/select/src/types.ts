import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { TGirth, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * SelectProps
 */
export interface ISelectProps extends IBaseProps, SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * The girth of the component
   *
   * @type {?TGirth}
   * @default 'md'
   */
  girth?: TGirth;

  /**
   * Color variant of the component, typically used to classify the
   * information based on its level
   *
   * @type {?TStatus}
   */
  status?: TStatus;
}

/**
 * OptionProps
 */
export interface IOptionProps extends IBaseProps, OptionHTMLAttributes<HTMLOptionElement> {}
