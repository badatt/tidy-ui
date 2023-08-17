import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * The IDrawerProps interface empowers you to design drawers that gracefully slide into view, offering convenient access to supplementary content or actions. Whether you're looking to enhance user experience or provide additional information, the IDrawerProps interface has you covered.
 *
 * @interface IDrawerProps
 * @type {IDrawerProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IDrawerProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The anchor property allows you to dictate the direction from which the drawer emerges – whether it's from the 'right' or the 'left'.
   * This flexibility ensures your drawer seamlessly integrates with your layout and user interaction preferences.
   *
   * @type {'right' | 'left'}
   * @default 'left'
   */
  anchor?: 'right' | 'left';

  /**
   * The isOpen property is your gatekeeper to the drawer's visibility. Set it to true, and behold as the drawer gracefully reveals its contents.
   * A value of false ensures a clutter-free interface, neatly concealing the drawer.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isOpen: boolean;

  /**
   * The onClose property lets you define a callback function that springs into action when users bid farewell to the drawer.
   * This interactive feature enhances usability, making the drawer an intuitive and seamless part of your application.
   *
   * @type {Function}
   * @public
   * @since 0.47.0
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose: (e?: any) => void;
}
