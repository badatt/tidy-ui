import { HTMLAttributes } from 'react';
import { IBaseProps, TStatus } from '@tidy-ui/types';

/**
 * Interface for configuring properties of an Alert component.
 *
 * @interface IAlertProps
 * @type {IAlertProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IAlertProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * An optional boolean flag indicating whether the alert should be filled. When set to `true`, the component is filled with the specified `status` tone.
   * Default value is `false`.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFilled?: boolean;

  /**
   * An optional boolean determining whether the alert component has `sharp` edges. Default value is `false`.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isSharp?: boolean;

  /**
   * An optional color variant of the alert, typically used to classify the information based on its level (e.g., success, warning, error, etc.).
   * Default value is `info`.
   *
   * @type {TStatus}
   * @default info
   * @public
   * @since 0.47.0
   */
  status?: TStatus;
}

/**
 * Interface for configuring properties of an AlertFooter component.
 *
 * @interface IAlertFooterProps
 * @type {IAlertFooterProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @private
 * @since 0.47.0
 */
export interface IAlertFooterProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {}

/**
 * Interface for configuring properties of an AlertTitle component.
 *
 * @interface IAlertTitleProps
 * @type {IAlertTitleProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @private
 * @since 0.47.0
 */
export interface IAlertTitleProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {}
