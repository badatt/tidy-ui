import { css, hsla } from '@tidy-ui/commons';
import { IMessageProps } from './types';

/**
 * Filled label styles
 *
 * @internal
 */
const filledLabel = css<IMessageProps>`
  ${({ theme: { palette }, tone }) => css`
    background-color: ${palette[tone!][800]};
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
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.4) : hsla(palette[tone!].shades[100], 0.4)};
    border: 1px solid ${isDark ? palette[tone!][500] : palette[tone!][400]};
    border-bottom: 0;
  `}
`;

/**
 * Filled content styles
 *
 * @internal
 */
const filledContent = css<IMessageProps>`
  ${({ theme: { palette }, tone }) => css`
    color: ${palette[tone!][50]};
    background-color: ${palette[tone!][700]};
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
    border: 1px solid ${isDark ? palette[tone!][500] : palette[tone!][400]};
  `}
`;

export { filledContent, filledLabel, outlinedContent, outlinedLabel };
