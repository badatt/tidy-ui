import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { IBaseProps, TGirth, TStatus } from '@tidy-ui/types';

/**
 * The ISelectProps interface equips providing you with a powerful set of properties to create customizable and user-friendly select components.
 * Whether you're designing dropdown menus, data filters, or user preference selectors, the properties offered by ISelectProps will
 * assist you in crafting select components that seamlessly integrate into your application's user interface.
 *
 * @interface ISelectProps
 * @type {ISelectProps}
 * @public
 * @since 0.47.0
 */
export interface ISelectProps extends IBaseProps, SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Define the size or girth of the select component, influencing its visual prominence and impact.
   * Choose from a range of sizes to tailor the select component's appearance to match your design preferences.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * Assign a color variant to the select component, allowing you to categorize information based on its importance or level of significance.
   * The status color provides a visual cue that helps users quickly identify the nature of the select component's content.
   *
   * @type {?TStatus}
   * @public
   * @since 0.47.0
   */
  status?: TStatus;
}

/**
 * @private
 */
export interface IOptionProps extends IBaseProps, OptionHTMLAttributes<HTMLOptionElement> {}
