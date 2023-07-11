import { HTMLAttributes } from 'react';
import { TGirth } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Loader variants
 */
export enum Variants {
  'circle',
  'ellipses',
  'pulse',
}

/**
 * Variant types
 */
export type TVariant = keyof typeof Variants;

/**
 * LoaderProps
 */
export interface ILoaderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the loader
   *
   * @default `md`
   */
  girth?: TGirth;

  /**
   * Variant of the loader
   *
   * @default `circle`
   */
  variant?: TVariant;
}
