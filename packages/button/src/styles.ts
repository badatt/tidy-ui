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
    color: ${isDark ? palette[tone!][400] : palette[tone!][800]};
    background-color: transparent;
    border: none;
    ${!disabled &&
    css`
      &:hover {
        background-color: ${isDark ? palette[tone!][900] : palette[tone!][200]};
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
    font-weight: 600;
    color: ${palette[tone!][50]};
    background-color: ${palette[tone!][700]};
    border: 1px solid ${hsla(palette[tone!].shades[900], 0.4)};
    ${!isDark &&
    css`
      box-shadow: 0px 1px 0px ${palette[tone!][100]};
    `}
    ${!disabled &&
    css`
      &:hover {
        background-color: ${palette[tone!][800]};
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
    color: ${isDark ? palette[tone!][100] : palette[tone!][900]};
    border: 1px solid ${isDark ? palette[tone!][700] : palette[tone!][400]};
    ${!disabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[tone!].shades[800], 0.2) : palette[tone!][100]};
        border: 1px solid ${isDark ? palette[tone!][400] : palette[tone!][900]};
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
  ${({ theme: { palette, isDark }, tone, disabled, isGradient }) => css`
    padding: 1rem 1.5rem;
    font-size: 3rem;
    line-height: 3rem;
    color: ${palette[tone!][50]};
    border: none;
    width: 100%;
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
    `}
    ${isGradient
      ? css`
          background: linear-gradient(90deg, ${palette['major'][700]} 0%, ${palette['minor'][700]} 100%);
          &:hover {
            background: linear-gradient(90deg, ${palette['major'][800]} 0%, ${palette['minor'][800]} 100%);
          }
        `
      : css`
          background-color: ${palette[tone!][700]};
          &:hover {
            background-color: ${palette[tone!][800]};
          }
        `}
  `}
`;

const iconOnly = css<IButtonProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][400] : palette[tone!][800]};
  `}
`;

const focusVisibility = css<IButtonProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    &:focus-visible {
      outline: 1px solid ${isDark ? palette[tone!][400] : palette[tone!][800]};
      outline-offset: 1px;
    }
  `}
`;

export { focusVisibility, hero, iconOnly, outlined, primary, simple, sizeStyles };
