import { InputHTMLAttributes } from 'react';
import { TGirth, TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * SwitchProps
 */
export interface ISwitchProps extends IBaseProps, InputHTMLAttributes<HTMLInputElement> {
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
}
