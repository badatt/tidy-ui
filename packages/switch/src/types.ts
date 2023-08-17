import { InputHTMLAttributes } from 'react';
import { IBaseProps, TStatus } from '@tidy-ui/types';

/**
 * Interface for configuring props for the Switch component.
 *
 * @interface ISwitchProps
 * @type {ISwitchProps}
 * @public
 * @since 0.47.0
 */
export interface ISwitchProps extends IBaseProps, InputHTMLAttributes<HTMLInputElement> {
  /**
   * Specifies the size of the Switch component. The girth property controls the overall dimensions of the component.
   *
   * @type {'md' | 'lg' | 'xl' | 'xxl'}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * Defines the color variant of the Switch component. This property is typically used to visually classify the information based on its level or status.
   * You can use predefined status values (e.g., 'success', 'warning', 'error', etc.) to convey the state of the switch in a meaningful way.
   *
   * @type {TStatus}
   * @default info
   * @public
   * @since 0.47.0
   */
  status?: TStatus;
}
