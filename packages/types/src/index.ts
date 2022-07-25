import { HTMLAttributes } from 'react';
import { ITidyUIBaseTheme as IITidyUIBaseTheme } from './theme/base';
export * from './theme/base';

/**
 * Base theme contract
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @typedef {ITidyUIBaseTheme}
 */
export type ITidyUIBaseTheme = IITidyUIBaseTheme;

import { ITidyUITheme as IITidyUITheme } from './theme/theme';
export * from './theme/theme';

/**
 * Theme contract
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @typedef {ITidyUITheme}
 */
export type ITidyUITheme = IITidyUITheme;

/**
 * Color types for components
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @typedef {TColor}
 */
export type TColor = 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

/**
 * Size types for components
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @typedef {TSize}
 */
export type TSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * Accent types for components
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @typedef {TAccent}
 */
export type TAccent = 'major' | 'minor' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';

/**
 * Common props for Icon components
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface IIconProps
 * @typedef {IIconProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
  outlined?: boolean;
}
