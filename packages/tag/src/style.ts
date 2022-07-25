import { css, hsla } from '@tidy-ui/theme';
import { ITagGroupProps, ITagProps } from './types';

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

export const filledContent = css<ITagProps>`
  ${({ theme: { palette }, color }) => css`
    background-color: ${palette[color!][500]};
    color: ${palette[color!][50]};
  `}
`;

export const outlinedContent = css<ITagProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[900], 0.3) : palette[color!][100]};
    border: 1px solid ${isDark ? palette[color!][600] : palette[color!][300]};
  `}
`;
