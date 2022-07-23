import { css, hsla } from '@tidy-ui/theme';
import { ITagGroupProps, ITagProps } from './types';

export const sizeStyles = {
  sm: {
    padding: '0.125rem 0.25rem',
    borderRadius: '0.25rem',
    fontSize: '.625rem',
    lineHeight: '.875rem',
    iconSize: '.625rem',
    addNewIconSize: '1rem',
    addNewTagInputWidth: '3rem',
  },
  md: {
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '.75rem',
    lineHeight: '1rem',
    iconSize: '.75rem',
    addNewIconSize: '1.5rem',
    addNewTagInputWidth: '4rem',
  },
  lg: {
    padding: '0.25rem 0.625rem',
    borderRadius: '0.25rem',
    fontSize: '.875rem',
    lineHeight: '1.25rem',
    iconSize: '.875rem',
    addNewIconSize: '2rem',
    addNewTagInputWidth: '5rem',
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
