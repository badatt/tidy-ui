import { css, hsla } from '@tidy-ui/commons';
import { IMessageProps } from './types';

/**
 * Filled label styles
 *
 * @internal
 */
const filledLabel = css<IMessageProps>`
  ${({ theme: { palette }, tone }) => css`
    background-color: ${palette[tone!][600]};
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
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    background-color: ${isDark ? hsla(palette[tone!].shades[800], 0.8) : palette[tone!][100]};
    border: 1px solid ${isDark ? palette[tone!][600] : palette[tone!][300]};
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
    background-color: ${palette[tone!][500]};
    color: ${palette[tone!][50]};
  `}
`;

/**
 * Outlined content styles
 *
 * @internal
 */
const outlinedContent = css<IMessageProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.3) : palette[tone!][50]};
    border: 1px solid ${isDark ? palette[tone!][600] : palette[tone!][300]};
  `}
`;

export { filledContent, filledLabel, outlinedContent, outlinedLabel };
