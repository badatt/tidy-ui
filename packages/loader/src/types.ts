import { HTMLAttributes } from 'react';
import { IBaseProps, TGirth } from '@tidy-ui/types';

/**
 * The ILoaderProps interface is providing you with a powerful toolkit to design versatile and dynamic loader components. Whether you're indicating progress, waiting for data, or simply adding a touch of flair, the properties offered by ILoaderProps will help you craft loader experiences that captivate your users.
 *
 * @interface ILoaderProps
 * @type {ILoaderProps}
 * @public
 * @since 0.47.0
 */
export interface ILoaderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Control the size of the loader, influencing its visual appearance and prominence.
   *
   * @type {boolean}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: TGirth;

  /**
   * Choose from different variants to determine the loader's style. Options include a circular loader, ellipses animation, or a pulsating effect.
   *
   * @type {boolean}
   * @default circle
   * @public
   * @since 0.47.0
   */
  variant?: 'circle' | 'ellipses' | 'pulse';
}
