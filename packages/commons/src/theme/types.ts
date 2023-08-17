import { DefaultTheme } from 'styled-components';
import { IFont, ILayout, IPalette, ITypography } from '@tidy-ui/types';

/**
 * GlobalDefault
 */
export interface ITheme {
  /**
   * theme
   */
  theme: ITidyUITheme;
}

/**
 * Contract to define a custom theme. You should define all the required properties
 * under this interface to build a custom theme
 *
 * @typedef {ITidyUITheme}
 * @interface ITidyUITheme
 * @augments {DefaultTheme}
 * @public
 */
export interface ITidyUITheme extends DefaultTheme {
  /**
   * Global font settings
   *
   * @type {IFont}
   */
  font: IFont;

  /**
   * Whether the theme is dark
   *
   * @type {boolean}
   */
  isDark: boolean;

  /**
   * Layout configuration
   *
   * @type {ILayout}
   */
  layout: ILayout;

  /**
   * An identifiable & meaningful name to the theme
   *
   * @type {string}
   */
  name: string;

  /**
   * Palette design that holds all color variants in this theme
   *
   * @type {IPalette}
   */
  palette: IPalette;

  /**
   * Typography configuration
   *
   * @type {ITypography}
   */
  typography: ITypography;
}
