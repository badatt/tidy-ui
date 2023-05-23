import { InputHTMLAttributes } from 'react';
import { TGirth, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Checkbox props
 */
export interface ICheckboxProps extends IBaseProps, InputHTMLAttributes<HTMLDivElement> {
  /**
   * The size of the component
   *
   * @type {?TGirth}
   * @default 'md'
   */
  girth?: Exclude<TGirth, 'xxs' | 'xs' | 'sm'>;

  /**
   * If `true`, the component is filled
   *
   * @type {?boolean}
   * @default false
   */
  isFilled?: boolean;

  /**
   * If `true`, the component is in indeterminate state, for example
   * partially checked child checkboxes
   *
   * @type {?boolean}
   * @default false
   */
  isIndeterminate?: boolean;

  /**
   * Color variant of the component, typically used to classify the
   * information based on its level
   *
   * @type {?TStatus}
   */
  status?: TStatus;
}
