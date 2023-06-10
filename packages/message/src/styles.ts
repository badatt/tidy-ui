import { css, hsla } from '@tidy-ui/commons';
import { IMessageProps } from './types';

/**
 * Filled label styles
 *
 * @internal
 */
const filledLabel = css<IMessageProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    background-color: ${isDark ? hsla(palette[tone!].shades[800], 0.5) : hsla(palette[tone!].shades[800], 1)};
    color: ${palette[tone!][50]};
  `}
`;

/**
 * Outlined label styles
 *
 * @internal
 */
const outlinedLabel = css<IMessageProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][300] : palette[tone!][700]};
    border: 1px solid ${isDark ? hsla(palette[tone!].shades[900], 0.7) : palette[tone!][400]};
    background-color: ${isDark ? hsla(palette[tone!].shades[700], 0.1) : hsla(palette[tone!].shades[200], 0.4)};
    border-bottom: 0;
  `}
`;

/**
 * Filled content styles
 *
 * @internal
 */
const filledContent = css<IMessageProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${palette[tone!][50]};
    background-color: ${isDark ? hsla(palette[tone!].shades[700], 0.5) : hsla(palette[tone!].shades[700], 0.9)};
  `}
`;

/**
 * Outlined content styles
 *
 * @internal
 */
const outlinedContent = css<IMessageProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][300] : palette[tone!][700]};
    border: 1px solid ${isDark ? hsla(palette[tone!].shades[900], 0.7) : palette[tone!][400]};
    background-color: ${isDark ? hsla(palette[tone!].shades[700], 0.1) : hsla(palette[tone!].shades[200], 0.4)};
  `}
`;

export { filledContent, filledLabel, outlinedContent, outlinedLabel };
