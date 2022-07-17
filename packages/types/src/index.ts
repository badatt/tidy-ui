import { HTMLAttributes } from 'react';
import { ITidyUIBaseTheme as IITidyUIBaseTheme } from './theme/base';
export * from './theme/base';
export type ITidyUIBaseTheme = IITidyUIBaseTheme;

import { ITidyUITheme as IITidyUITheme } from './theme/theme';
export * from './theme/theme';
export type ITidyUITheme = IITidyUITheme;

export type TColor = 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export type TSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TAccent = 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
  outlined?: boolean;
}
