import { css, hsla } from '@tidy-ui/commons';
import { IButtonProps } from './types';

/**
 * Size styles
 *
 * @internal
 */
const sizeStyles = {
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
 * Styles for a simple type button
 *
 * @internal
 */
const simple = css<IButtonProps>`
  ${({ theme: { palette, isDark }, tone, disabled }) => css`
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    background-color: transparent;
    border: none;
    ${!disabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.4) : palette[tone!][200]};
      }
    `}
  `}
`;

/**
 * Styles for a basic type button
 *
 * @internal
 */
const basic = css<IButtonProps>`
  ${({ theme: { palette, isDark }, tone, disabled }) => css`
    color: ${isDark ? palette[tone!][300] : palette[tone!][600]};
    background-color: ${isDark ? hsla(palette[tone!].shades[600], 0.7) : palette[tone!][200]};
    border: 1px solid transparent;
    ${!disabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[tone!].shades[800], 0.8) : palette[tone!][300]};
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          ${isDark ? hsla(palette[tone!].shades[900], 0.7) : palette[tone!][400]} 0px 10px 15px -3px,
          ${isDark ? hsla(palette[tone!].shades[900], 0.7) : palette[tone!][400]} 0px 4px 6px -4px;
      }
    `}
  `}
`;

/**
 * Styles for a primary button
 *
 * @internal
 */
const primary = css<IButtonProps>`
  ${({ theme: { palette, isDark }, tone, disabled }) => css`
    color: ${palette[tone!][100]};
    background-color: ${palette[tone!][600]};
    border: 1px solid transparent;
    ${!disabled &&
    css`
      ${isDark
        ? css`
            box-shadow: 0 0 24px ${palette[tone!][800]};
          `
        : css`
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
              ${palette[tone!][300]} 0px 10px 15px -3px, ${palette[tone!][300]} 0px 4px 6px -4px;
          `}
      &:hover {
        background-color: ${palette[tone!][700]};
      }
    `}
  `}
`;

/**
 * Styles for an outline button
 *
 * @internal
 */
const outlined = css<IButtonProps>`
  ${({ theme: { palette, isDark }, tone, disabled }) => css`
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.3) : palette[tone!][50]};
    border: 1px solid ${isDark ? palette[tone!][600] : palette[tone!][300]};
    ${!disabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.5) : palette[tone!][200]};
      }
    `}
  `}
`;

/**
 * Styles for a hero type button
 *
 * @internal
 */
const hero = css<IButtonProps>`
  ${({ theme: { palette, isDark }, tone, disabled }) => css`
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    font-size: 3rem;
    line-height: 2.125rem;
    color: ${palette[tone!][100]};
    background-color: ${palette[tone!][600]};
    border: 1px solid transparent;
    width: 100%;
    text-align: center;
    justify-content: center;
    ${!disabled &&
    css`
      ${isDark
        ? css`
            box-shadow: 0 0 24px ${palette[tone!][800]};
          `
        : css`
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
              ${palette[tone!][300]} 0px 10px 15px -3px, ${palette[tone!][300]} 0px 4px 6px -4px;
          `}
      &:hover {
        background-color: ${palette[tone!][700]};
      }
    `}
  `}
`;

export { basic, hero, outlined, primary, simple, sizeStyles };
