import { css, hsla } from '@tidy-ui/theme';
import { IButtonProps } from './types';

const sizeStyles = {
  lg: {
    borderRadius: '0.45rem',
    fontSize: '1.125rem',
    iconSize: '1.75rem',
    lineHeight: '1.75rem',
    padding: '0.375rem 0.75rem',
  },
  md: {
    borderRadius: '0.375rem',
    fontSize: '.875rem',
    iconSize: '1.25rem',
    lineHeight: '1.25rem',
    padding: '0.25rem 0.625rem',
  },
  sm: {
    borderRadius: '0.3rem',
    fontSize: '.75rem',
    iconSize: '1rem',
    lineHeight: '1rem',
    padding: '0.25rem 0.5rem',
  },
  xl: {
    borderRadius: '0.475rem',
    fontSize: '1.5rem',
    iconSize: '2rem',
    lineHeight: '2rem',
    padding: '0.5rem 1rem',
  },
  xs: {
    borderRadius: '0.25rem',
    fontSize: '.625rem',
    iconSize: '0.875rem',
    lineHeight: '.875rem',
    padding: '0.125rem 0.25rem',
  },
  xxl: {
    borderRadius: '0.625rem',
    fontSize: '2rem',
    iconSize: '2.125rem',
    lineHeight: '2.125rem',
    padding: '0.75rem 1.125rem',
  },
  xxs: {
    borderRadius: '0.2rem',
    fontSize: '0.5rem',
    iconSize: '0.5rem',
    lineHeight: '',
    padding: '0.125rem 0.125rem',
  },
};

const simple = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: transparent;
    border: none;
    ${!isDisabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.4) : palette[withColor!][100]};
      }
    `}
  `}
`;

const basic = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][200]};
    border: 1px solid transparent;
    ${!isDisabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.4) : palette[withColor!][200]};
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          ${isDark ? hsla(palette[withColor!].shades[900], 0.7) : palette[withColor!][300]} 0px 10px 15px -3px,
          ${isDark ? hsla(palette[withColor!].shades[900], 0.7) : palette[withColor!][300]} 0px 4px 6px -4px;
      }
    `}
  `}
`;

const primary = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${palette[withColor!][100]};
    background-color: ${palette[withColor!][600]};
    border: 1px solid transparent;
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

const outlined = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor, isDisabled }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][50]};
    border: 1px solid ${isDark ? palette[withColor!][600] : palette[withColor!][300]};
    ${!isDisabled &&
    css`
      &:hover {
        background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.5) : palette[withColor!][100]};
      }
    `}
  `}
`;

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
    `}
  `}
`;

export { basic, hero, outlined, primary, simple, sizeStyles };
