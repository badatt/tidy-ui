import { InputHTMLAttributes } from 'react';
import { IBaseProps, TStatus } from '@tidy-ui/types';

/**
 * The ICheckboxProps interface represents the properties that can be passed to a checkbox component in your application.
 *
 * @interface ICheckboxProps
 * @type {ICheckboxProps}
 * @augments {InputHTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ICheckboxProps extends IBaseProps, InputHTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the size or thickness of the checkbox.
   *
   * @type {'md' | 'lg' | 'xl' | 'xxl'}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * An optional boolean flag indicating whether the checkbox should be filled.
   * When set to `true`, the component is filled with the specified `status` tone.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFilled?: boolean;

  /**
   * Indicates whether the checkbox is in an indeterminate state. An indeterminate checkbox is neither fully selected nor empty. If true, the checkbox is rendered as indeterminate; if false or not provided, it follows the normal selected or empty state.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isIndeterminate?: boolean;

  /**
   * An optional color variant of the checkbox, typically used to classify the information based on its level (e.g., success, warning, error, etc.).
   * Default value is `info`.
   *
   * @type {TStatus}
   * @default info
   * @public
   * @since 0.47.0
   */
  status?: TStatus;
}
