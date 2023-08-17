import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * The IPaperProps interface aims providing you with a robust set of properties to create stylish and functional paper-like components.
 * Whether you're designing cards, sections, or containers, the properties offered by IPaperProps will help you craft paper components
 * that enhance the overall visual and user experience of your application.
 *
 * @interface IPaperProps
 * @type {IPaperProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IPaperProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Create a paper component with sharp edges, giving it a distinctive visual appearance.
   * When set to true, the paper component's corners are sharp, contributing to a more angular and modern design.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isSharp?: boolean;
}
