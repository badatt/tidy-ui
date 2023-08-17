import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * The INoteProps interface is providing you with a versatile toolkit to create engaging and visually appealing note components.
 * Whether you're highlighting key information, adding a touch of realism, or simply conveying a message,
 * the properties offered by INoteProps will help you craft note components that stand out.
 *
 * @interface INoteProps
 * @type {INoteProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface INoteProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Enhance the note's visual impact by applying reality effects. When set to true, the note acquires a realistic appearance that engages users
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isReal?: boolean;
}
