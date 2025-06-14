import { css, hsla } from '@tidy-ui/commons';
import { IMenuItemProps } from './types';

const simple = css<IMenuItemProps>`
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

const primary = css<IMenuItemProps>`
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

const outlined = css<IMenuItemProps>`
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

export { outlined, primary, simple };
