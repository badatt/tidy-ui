import { HTMLAttributes } from 'react';
import { TGirth, TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Chip props
 */
export interface IChipProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the component
   *
   * @type {?TGirth}
   * @default 'md'
   */
  girth?: TGirth;
  /**
   * Icon to embed inside the chip
   *
   * @type {?JSX.Element}
   */
  icon?: JSX.Element;
  /**
   * If `true`, enables click actions
   *
   * @default false
   */
  isClickable?: boolean;

  /**
   * If `true`, set the chip filled variant
   *
   * @default false
   */
  isFilled?: boolean;
  /**
   * Placement of the icon inside the chip
   *
   * @type {?('left' | 'right')}
   */
  placement?: 'left' | 'right';

  /**
   * The color of the component
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
}
