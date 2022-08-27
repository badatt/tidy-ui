import { ITidyUITheme } from '@tidy-ui/types';

/** @internal */
interface IDeviceThemeProps {
  /** *@internal */
  theme: ITidyUITheme;
}

/**
 * Devices
 *
 * @param {ITidyUITheme} props theme object
 * @returns {any} devices
 */
const devices = {
  /**
   * Monitor device
   *
   * @param {IDeviceThemeProps} device with theme
   * @returns {string} media query string
   */
  desktop: ({
    theme: {
      layout: {
        screens: { lg },
      },
    },
  }: IDeviceThemeProps): string => `@media only screen and (min-width: ${lg.breakpoint}px)`,
  /**
   * Laptop device
   *
   * @param {IDeviceThemeProps} device with theme
   * @returns {string} media query string
   */
  laptop: ({
    theme: {
      layout: {
        screens: { md },
      },
    },
  }: IDeviceThemeProps): string => `@media only screen and (min-width: ${md.breakpoint}px)`,
  /**
   * Mobile device
   *
   * @param {IDeviceThemeProps} device with theme
   * @returns {string} media query string
   */
  mobile: ({
    theme: {
      layout: {
        screens: { xs },
      },
    },
  }: IDeviceThemeProps): string => `@media only screen and (min-width: ${xs.breakpoint}px)`,
  /**
   * Tablet device
   *
   * @param {IDeviceThemeProps} device with theme
   * @returns {string} media query string
   */
  tablet: ({
    theme: {
      layout: {
        screens: { sm },
      },
    },
  }: IDeviceThemeProps): string => `@media only screen and (min-width: ${sm.breakpoint}px)`,
  /**
   * Tv device
   *
   * @param {IDeviceThemeProps} device with theme
   * @returns {string} media query string
   */
  tv: ({
    theme: {
      layout: {
        screens: { xl },
      },
    },
  }: IDeviceThemeProps): string => `@media only screen and (min-width: ${xl.breakpoint}px)`,
};

export { devices };
