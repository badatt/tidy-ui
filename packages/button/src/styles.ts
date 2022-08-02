import { css, hsla } from '@tidy-ui/theme';
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
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: transparent;
    border: none;
    ${!isDisabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.4) : palette[withColor!][200]};
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
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][200]};
    border: 1px solid transparent;
    ${!isDisabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.5) : palette[withColor!][300]};
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          ${isDark ? hsla(palette[withColor!].shades[900], 0.7) : palette[withColor!][400]} 0px 10px 15px -3px,
          ${isDark ? hsla(palette[withColor!].shades[900], 0.7) : palette[withColor!][400]} 0px 4px 6px -4px;
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
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${palette[withColor!][100]};
    background-color: ${palette[withColor!][600]};
    border: 1px solid transparent;
    ${!isDisabled &&
    css`
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        ${isDark ? palette[withColor!][800] : palette[withColor!][300]} 0px 10px 15px -3px,
        ${isDark ? palette[withColor!][800] : palette[withColor!][300]} 0px 4px 6px -4px;
      &:hover {
        background-color: ${palette[withColor!][700]};
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
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][50]};
    border: 1px solid ${isDark ? palette[withColor!][600] : palette[withColor!][300]};
    ${!isDisabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.5) : palette[withColor!][200]};
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
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    font-size: 3rem;
    line-height: 2.125rem;
    color: ${palette[withColor!][100]};
    background-color: ${palette[withColor!][600]};
    border: 1px solid transparent;
    width: 100%;
    text-align: center;
    justify-content: center;
    ${!isDisabled &&
    css`
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        ${isDark ? palette[withColor!][800] : palette[withColor!][200]} 0px 10px 15px -3px,
        ${isDark ? palette[withColor!][800] : palette[withColor!][200]} 0px 4px 6px -4px;
      &:hover {
        background-color: ${palette[withColor!][700]};
      }
    `}
  `}
`;

export { basic, hero, outlined, primary, simple, sizeStyles };
