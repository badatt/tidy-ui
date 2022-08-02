import { css, hsla } from '@tidy-ui/theme';
import { IMessageProps } from './types';

/**
 * Filled label styles
 *
 * @internal
 */
const filledLabel = css<IMessageProps>`
  ${({ theme: { palette }, withColor }) => css`
    background-color: ${palette[withColor!][600]};
    color: ${palette[withColor!][50]};
  `}
`;

/**
 * Outlined label styles
 *
 * @internal
 */
const outlinedLabel = css<IMessageProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[800], 0.8) : palette[withColor!][100]};
    border: 1px solid ${isDark ? palette[withColor!][600] : palette[withColor!][300]};
    border-bottom: 0;
  `}
`;

/**
 * Filled content styles
 *
 * @internal
 */
const filledContent = css<IMessageProps>`
  ${({ theme: { palette }, withColor }) => css`
    background-color: ${palette[withColor!][500]};
    color: ${palette[withColor!][50]};
  `}
`;

/**
 * Outlined content styles
 *
 * @internal
 */
const outlinedContent = css<IMessageProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][50]};
    border: 1px solid ${isDark ? palette[withColor!][600] : palette[withColor!][300]};
  `}
`;

export { filledContent, filledLabel, outlinedContent, outlinedLabel };
