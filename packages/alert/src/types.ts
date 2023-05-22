import { HTMLAttributes } from 'react';
import { TStatus } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Alert props
 *
 * @typedef {IAlertProps}
 * @interface IAlertProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IAlertProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses Alert
   */
  ele?: JSX.Element;

  /**
   * If `true`, the component filled with status tone
   *
   * @type {?true}
   * @default false
   */
  isFilled?: boolean;

  /**
   * If `true`, the component is created with sharp edges
   *
   * @type {?true}
   * @default false
   */
  isSharp?: boolean;

  /**
   * Color variant of the Alert, typically used to classify the
   * information based on its level
   *
   * @type {?TStatus}
   */
  status?: TStatus;
}

/**
 * AlertFooter props
 *
 * @typedef {IAlertFooterProps}
 * @interface IAlertFooterProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IAlertFooterProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the footer
   */
  ele?: JSX.Element;
}

/**
 * AlertTitle props
 *
 * @typedef {IAlertTitleProps}
 * @interface IAlertTitleProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IAlertTitleProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the title
   */
  ele?: JSX.Element;
}
