import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { IBaseProps, TGirth, TInputVariant, TStatus } from '@tidy-ui/types';

/**
 * The ITextInputProps interface is providing you with a wide array of features to create interactive and visually appealing text input components. Whether you're designing simple form fields or complex data entry points, the properties offered by ITextInputProps will help you craft user-friendly and functional inputs.
 *
 * @interface ITextInputProps
 * @type {ITextInputProps}
 * @public
 * @since 0.47.0
 */
export interface ITextInputProps extends IBaseProps, InputHTMLAttributes<HTMLInputElement> {
  /**
   * Add a descriptive caption below the text input component to provide additional context or guidance to users.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  caption?: string;

  /**
   * Determine the girth (thickness) of the text input component, influencing its visual appearance and prominence.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * If set to true, the text input component will stretch to occupy the full width of its container.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isStretched?: boolean;

  /**
   * Assign a color variant to the text input component, typically used to convey different levels of information or status.
   *
   * @type {TStatus}
   * @public
   * @since 0.47.0
   */
  status?: TStatus;

  /**
   * Specify the visual variant of the text input component, influencing its appearance, such as whether it's outlined or filled etc.
   *
   * @type {TInputVariant}
   * @default outlined
   * @public
   * @since 0.47.0
   */
  variant?: TInputVariant;
}

/**
 * The IInputGroupProps interface is offering you a variety of properties to create well-structured and cohesive input group components. Whether you're designing a complex form or a simple input arrangement, the properties provided by IInputGroupProps will help you achieve a seamless and organized user experience.
 *
 * @interface IInputGroupProps
 * @type {IInputGroupProps}
 * @public
 * @since 0.47.0
 */
export interface IInputGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Determine the girth (thickness) of the input group component, influencing its visual appearance and prominence.
   *
   * @type {TGirth}
   * @default 'md'
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * Set this property to true if you want the elements within the input group to blend harmoniously, creating a cohesive and integrated look.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isBlend?: boolean;
}

/**
 * The IInputElementProps interface equips you with a range of properties to craft interactive and visually appealing input elements. Whether you're creating buttons, icons, or other interactive components, the properties offered by IInputElementProps will empower you to seamlessly integrate dynamic elements into your projects.
 *
 * @interface IInputElementProps
 * @type {IInputElementProps}
 * @public
 * @since 0.47.0
 */
export interface IInputElementProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Define the girth (thickness) of the input element, influencing its visual appearance and prominence.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * When set to true, elements within the input component blend harmoniously, creating a cohesive and integrated look.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isBlend?: boolean;

  /**
   * Set this property to true to make the element clickable, allowing user interaction.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isClickable?: boolean;
}
