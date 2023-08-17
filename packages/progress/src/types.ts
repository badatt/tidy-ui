import { HTMLAttributes } from 'react';
import { IBaseProps, TGirth, TTone } from '@tidy-ui/types';

/**
 * he IProgressProps interface helps providing you with a powerful set of properties to create informative and visually appealing progress indicators.
 * Whether you're displaying loading states, completion percentages, or dynamic data updates, the properties offered by IProgressProps will
 * help you craft progress indicators that enhance the user experience of your application.
 *
 * @interface IProgressProps
 * @type {IProgressProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IProgressProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Determine the thickness or girth of the progress indicator.
   * The girth enhances the visual presence of the progress indicator, allowing you to adjust its width according to your design preferences.
   *
   * @type {TGirth}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * Assign a tone to the progress indicator, indicating its significance or status.
   * The tone provides a visual cue that helps users quickly identify the nature of the progress being displayed.
   *
   * @type {TTone}
   * @default info
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * Specify the percentage value of the progress indicator.
   * This property allows you to convey the completion level of a task or process,
   * providing users with real-time feedback on the progress status.
   *
   * @type {number}
   * @public
   * @since 0.47.0
   */
  value?: number;

  /**
   * Choose a variant for the progress indicator, defining its visual style and animation.
   * The variant options include solid, striped, and indeterminate, each offering a distinct appearance and behavior.
   *
   * @type {'solid' | 'striped' | 'indeterminate'}
   * @default solid
   * @public
   * @since 0.47.0
   */
  variant?: 'solid' | 'striped' | 'indeterminate';
}
