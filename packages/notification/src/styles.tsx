import { css, hsla } from '@tidy-ui/commons';
import { INotificationProps } from './types';

/**
 * Filled content styles
 *
 * @internal
 */
const filledContent = css<INotificationProps>`
  ${({ theme: { palette }, tone }) => css`
    background-color: ${palette[tone!][500]};
    color: ${palette[tone!][50]};
  `}
`;

/**
 * Outlined content styles
 *
 * @internal
 */
const outlinedContent = css<INotificationProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${palette.text.primary};
    background-color: ${isDark ? hsla(palette[tone!].shades[900]) : palette[tone!][50]};
    border: 1px solid ${isDark ? palette[tone!][600] : palette[tone!][300]};
  `}
`;

/**
 * Filled label styles
 *
 * @internal
 */
const filledLabel = css<INotificationProps>`
  ${({ theme: { palette }, tone }) => css`
    color: ${palette[tone!][50]};
  `}
`;

/**
 * Outlined label styles
 *
 * @internal
 */
const outlinedLabel = css<INotificationProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
  `}
`;

export { filledContent, filledLabel, outlinedContent, outlinedLabel };
