import { HTMLAttributes } from 'react';
import { ITidyUIBaseTheme as IITidyUIBaseTheme } from './theme/base';
export * from './theme/base';

/**
 * Base theme contract
 *
 * @typedef {ITidyUIBaseTheme}
 * @public
 */
export type ITidyUIBaseTheme = IITidyUIBaseTheme;

import { ITidyUITheme as IITidyUITheme } from './theme/theme';
export * from './theme/theme';

/**
 * Theme contract
 *
 * @typedef {ITidyUITheme}
 * @public
 */
export type ITidyUITheme = IITidyUITheme;

/**
 * Color types for components
 *
 * @typedef {TColor}
 * @public
 */
export type TColor = 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

/**
 * Size types for components
 *
 * @typedef {TSize}
 * @public
 */
export type TSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * Accent types for components
 *
 * @typedef {TAccent}
 * @public
 */
export type TAccent = 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

/**
 * Common props for Icon components
 *
 * @typedef {IIconProps}
 * @interface IIconProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IIconProps extends HTMLAttributes<SVGElement> {
  isOutlined?: boolean;
}
