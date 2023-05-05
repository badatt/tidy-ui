import { HTMLAttributes } from 'react';
import { TSize, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Checkbox props
 */
export interface ICheckboxProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the checkbox is checked
   *
   * @default false
   */
  checked?: boolean;

  /**
   * If `true`, the component is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the component is filled
   *
   * @type {?boolean}
   * @default false
   */
  filled?: boolean;

  /**
   * If `true`, the component is in indeterminate state, for example
   * partially checked child checkboxes
   *
   * @type {?boolean}
   * @default false
   */
  indeterminate?: boolean;

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
}
