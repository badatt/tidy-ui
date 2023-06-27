import { ITheme } from '../theme/types';

/**
 * Devices
 *
 * @param {ITheme} props theme object
 * @returns {any} devices
 */
const devices = {
  /**
   * Monitor device
   *
   * @param {ITheme} device with theme
   * @returns {string} media query string
   */
  desktop: ({
    theme: {
      layout: {
        screens: { lg },
      },
    },
  }: ITheme): string => `@media only screen and (min-width: ${lg.breakpoint}px)`,
  /**
   * Laptop device
   *
   * @param {ITheme} device with theme
   * @returns {string} media query string
   */
  laptop: ({
    theme: {
      layout: {
        screens: { md },
      },
    },
  }: ITheme): string => `@media only screen and (min-width: ${md.breakpoint}px)`,
  /**
   * Mobile device
   *
   * @param {ITheme} device with theme
   * @returns {string} media query string
   */
  mobile: ({
    theme: {
      layout: {
        screens: { xs },
      },
    },
  }: ITheme): string => `@media only screen and (min-width: ${xs.breakpoint}px)`,
  /**
   * Tablet device
   *
   * @param {ITheme} device with theme
   * @returns {string} media query string
   */
  tablet: ({
    theme: {
      layout: {
        screens: { sm },
      },
    },
  }: ITheme): string => `@media only screen and (min-width: ${sm.breakpoint}px)`,
  /**
   * Tv device
   *
   * @param {ITheme} device with theme
   * @returns {string} media query string
   */
  tv: ({
    theme: {
      layout: {
        screens: { xl },
      },
    },
  }: ITheme): string => `@media only screen and (min-width: ${xl.breakpoint}px)`,
};

export { devices };
