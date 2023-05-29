import { HTMLAttributes } from 'react';
import { TDirection, TGirth, TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Tooltip props
 */
export interface ITooltipProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Wraps lengthy content
   *
   * @default false
   */
  canWrap?: boolean;
  /**
   * Direction of the tooltip
   *
   * @type {?TDirection}
   */
  direction?: TDirection;
  /**
   * Size of the tooltip
   *
   * @type {?TGirth}
   */
  girth?: TGirth;

  /**
   * Tone of the tooltip
   *
   * @type {?TTone}
   */
  tone?: TTone;
}
