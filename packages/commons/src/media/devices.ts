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
  }: IDeviceThemeProps): string =>
    `@media only screen and (min-width: ${lg.minWidth}px) and (max-width: ${lg.maxWidth}px)`,
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
  }: IDeviceThemeProps): string =>
    `@media only screen and (min-width: ${md.minWidth}px) and (max-width: ${md.maxWidth}px)`,
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
  }: IDeviceThemeProps): string =>
    `@media only screen and (min-width: ${xs.minWidth}px) and (max-width: ${xs.maxWidth}px)`,
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
  }: IDeviceThemeProps): string =>
    `@media only screen and (min-width: ${sm.minWidth}px) and (max-width: ${sm.maxWidth}px)`,
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
  }: IDeviceThemeProps): string =>
    `@media only screen and (min-width: ${xl.minWidth}px) and (max-width: ${xl.maxWidth}px)`,
};

export { devices };
