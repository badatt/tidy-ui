import { HTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * NoteProps
 */
export interface INoteProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, creates Note with reality effects
   */
  isReal?: boolean;
}
