import { CSSProperties } from 'react';
import { css, hsla, TGirth } from '@tidy-ui/commons';
import { IChipProps } from './types';

/**
 * Chip size style variants
 */
const sizeStyles: Record<TGirth, CSSProperties> = {
  lg: {
    fontSize: '1.125rem',
  },
  md: {
    fontSize: '0.875rem',
  },
  sm: {
    fontSize: '0.75rem',
  },
  xl: {
    fontSize: '1.5rem',
  },
  xs: {
    fontSize: '0.625rem',
  },
  xxl: {
    fontSize: '2rem',
  },
  xxs: {
    fontSize: '0.5rem',
  },
};

/**
 * Styles for an outline button
 *
 * @internal
 */
const outlinedStyle = css<IChipProps>`
  ${({ theme: { palette, isDark }, isClickable, tone }) => css`
    color: ${isDark ? palette[tone!][300] : palette[tone!][800]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.3) : hsla(palette[tone!].shades[300], 0.2)};
    border: 1px solid ${isDark ? palette[tone!][600] : palette[tone!][300]};
    ${isClickable &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.6) : palette[tone!][200]};
      }
    `}
  `}
`;

/**
 * Styles for a primary button
 *
 * @internal
 */
const filledStyle = css<IChipProps>`
  ${({ theme: { palette }, isClickable, tone }) => css`
    color: ${palette[tone!][50]};
    background-color: ${palette[tone!][700]};
    ${isClickable &&
    css`
      &:hover {
        background-color: ${palette[tone!][800]};
      }
    `}
  `}
`;

export { filledStyle, outlinedStyle, sizeStyles };
