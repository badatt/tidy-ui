import { HTMLAttributes } from 'react';
import { IBaseProps, TSize, TTone } from '@tidy-ui/types';

/**
 * Chip props
 */
export interface IChipProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, enables click actions
   *
   * @default false
   */
  clickable?: boolean;
  /**
   * If `true`, the button is disabled
   *
   * @type {?boolean}
   * @default false
   */
  disabled?: boolean;
  /**
   * Icon to embed inside the chip
   *
   * @type {?JSX.Element}
   */
  icon?: JSX.Element;
  /**
   * If `true`, set the chip outlined variant
   *
   * @default false
   */
  outlined?: boolean;

  /**
   * Placement of the icon inside the chip
   *
   * @type {?('left' | 'right')}
   */
  placement?: 'left' | 'right';
  /**
   * The size of the component
   *
   * @type {?TSize}
   * @default 'md'
   */
  size?: TSize;

  /**
   * The color of the component
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
}
