import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Frame variants
 */
export enum FrameVariant {
  'circle',
  'line',
}

/**
 * FrameVariant type
 */
export type TFrameVAriant = keyof typeof FrameVariant;

/**
 * FrameProps
 */
export interface IFrameProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, indicates content is loaded and ready to render, so that
   * frame can disappear
   */
  isLoaded?: boolean;

  /**
   * If `true`, creates sharp edged frames
   */
  isSharp?: boolean;

  /**
   * If `true`, the child items are wrapped inside the frame's dimensions
   */
  isWrapped?: boolean;

  /**
   * Size (radius) for circular variants
   */
  size?: string;

  /**
   * Frame variants
   */
  variant?: TFrameVAriant;
}
