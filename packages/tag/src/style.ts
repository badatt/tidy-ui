import { css, hsla } from '@tidy-ui/commons';
import { ITagProps } from './types';

/**
 * Tag size variants
 *
 * @internal
 */
const sizeStyles = {
  lg: {
    addNewTagInputWidth: '5rem',
    fontSize: '.875rem',
    lineHeight: '1.25rem',
    padding: '0.25rem 0.625rem',
  },
  md: {
    addNewTagInputWidth: '4rem',
    fontSize: '.75rem',
    lineHeight: '1rem',
    padding: '0.25rem 0.5rem',
  },
  sm: {
    addNewTagInputWidth: '3rem',
    fontSize: '.625rem',
    lineHeight: '.875rem',
    padding: '0.125rem 0.25rem',
  },
};

/**
 * Filled Tag style
 *
 * @internal
 */
const filledContent = css<ITagProps>`
  ${({ theme: { palette }, tone }) => css`
    background-color: ${palette[tone!][500]};
    color: ${palette[tone!][50]};
  `}
`;

/**
 * Outlined Tag style
 *
 * @internal
 */
const outlinedContent = css<ITagProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.3) : palette[tone!][100]};
    border: 1px solid ${isDark ? palette[tone!][600] : palette[tone!][300]};
  `}
`;

export { filledContent, outlinedContent, sizeStyles };
