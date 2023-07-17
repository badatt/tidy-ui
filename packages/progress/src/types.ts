import { HTMLAttributes } from 'react';
import { TGirth, TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Progress variant
 */
export enum Variant {
  'solid',
  'striped',
  'indeterminate',
}

/**
 * Variant props
 */
export type TVariant = keyof typeof Variant;

/**
 * ProgressProps
 */
export interface IProgressProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Girth of the progress
   *
   * @default `md`
   */
  girth?: TGirth;
  /**
   * Tone of the progress
   *
   * @default `neutral`
   */
  tone?: TTone;
  /**
   * Percentage value of the progress indicator
   */
  value?: number;
  /**
   * Variant of the progress
   *
   * @default `solid`
   */
  variant?: TVariant;
}
