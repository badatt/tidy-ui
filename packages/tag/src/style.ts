import { css, hsla } from '@tidy-ui/theme';
import { ITagProps } from './types';

/**
 * Tag size variants
 *
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
 */
export const filledContent = css<ITagProps>`
  ${({ theme: { palette }, withColor }) => css`
    background-color: ${palette[withColor!][500]};
    color: ${palette[withColor!][50]};
  `}
`;

/**
 * Outlined Tag style
 *
 */
export const outlinedContent = css<ITagProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][100]};
    border: 1px solid ${isDark ? palette[withColor!][600] : palette[withColor!][300]};
  `}
`;
