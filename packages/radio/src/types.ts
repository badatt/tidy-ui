import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { IBaseProps, TGirth, TStatus } from '@tidy-ui/types';

/**
 * The IRadioProps interface is equipping you with a versatile set of properties to create radio button components that facilitate user choices and selections.
 * Whether you're designing dynamic forms, intuitive surveys, or interactive preference settings, the properties offered by IRadioProps will assist
 * you in crafting radio button components that enhance user interaction and data management within your application.
 *
 * @interface IRadioProps
 * @type {IRadioProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IRadioProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Tailor the layout of the radio button options to align vertically, optimizing space utilization and readability.
   * When set to true, the radio button options are stacked vertically, making it effortless for users to assess and choose from the available selections.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isVertical?: boolean;

  /**
   * Assign a value to each radio button option, establishing a meaningful identifier for the selected choice.
   * This value is invaluable for data processing, submission, or programmatic interactions based on user selections.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  value?: string;
}

/**
 * The IRadioOptionProps interface helps providing you with a versatile set of properties to create individual radio button option components.
 * Whether you're building complex forms, interactive surveys, or dynamic preference settings,
 * the properties offered by IRadioOptionProps will help you craft radio button options that enhance user interaction and data collection in your application.
 *
 * @interface IRadioOptionProps
 * @type {IRadioOptionProps}
 * @public
 * @since 0.47.0
 */
export interface IRadioOptionProps extends IBaseProps, InputHTMLAttributes<HTMLInputElement> {
  /**
   * Determine the size or girth of the radio option component, enhancing its visual prominence and impact.
   * Choose from a variety of sizes such as 'md', 'lg', 'xl', or 'xxl' to tailor the radio option's appearance to match your application's design aesthetic.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * Assign a color variant to the radio option component, allowing you to classify information based on its importance or level of significance.
   * The status color provides a visual cue that helps users quickly identify the nature of the radio option.
   *
   * @type {TStatus}
   * @public
   * @since 0.47.0
   */
  status?: TStatus;

  /**
   * Set a unique value for the radio option, establishing its identity within a group of options.
   * This value is essential for data processing, capturing user selections, and enabling seamless interaction with the radio option component.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  value: string;
}
