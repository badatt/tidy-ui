import { css, hsla } from '@tidy-ui/commons';
import { ITagProps } from './types';

/**
 * Tag size variants
 *
 * @internal
 */
export const sizeStyles = {
  lg: {
    addNewIconSize: '2rem',
    addNewTagInputWidth: '5rem',
    borderRadius: '0.25rem',
    fontSize: '.875rem',
    iconSize: '.875rem',
    lineHeight: '1.25rem',
    padding: '0.25rem 0.625rem',
  },
  md: {
    addNewIconSize: '1.5rem',
    addNewTagInputWidth: '4rem',
    borderRadius: '0.25rem',
    fontSize: '.75rem',
    iconSize: '.75rem',
    lineHeight: '1rem',
    padding: '0.25rem 0.5rem',
  },
  sm: {
    addNewIconSize: '1rem',
    addNewTagInputWidth: '3rem',
    borderRadius: '0.25rem',
    fontSize: '.625rem',
    iconSize: '.625rem',
    lineHeight: '.875rem',
    padding: '0.125rem 0.25rem',
  },
};

/**
 * Filled Tag style
 *
 * @internal
 */
export const filledContent = css<ITagProps>`
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
export const outlinedContent = css<ITagProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.3) : palette[tone!][100]};
    border: 1px solid ${isDark ? palette[tone!][600] : palette[tone!][300]};
  `}
`;
