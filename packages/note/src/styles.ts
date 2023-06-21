import { color, css, hsla } from '@tidy-ui/commons';
import { INoteProps } from './types';

const baseStyles = css<INoteProps>`
  ${({ theme: { isDark } }) => css`
    border-left: 4px solid ${isDark ? hsla(color.yellow[800]) : hsla(color.yellow[500])};
    background-color: ${isDark ? hsla(color.yellow[700], 0.2) : hsla(color.yellow[400], 0.2)};
  `}
`;

const realStyles = css<INoteProps>`
  ${({ theme: { isDark } }) => css`
    ${isDark
      ? css`
          box-shadow: rgb(164 164 200 / 25%) 0px 13px 27px -5px, rgb(147 147 147 / 15%) 0px 8px 16px -8px;
        `
      : css`
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        `}
  `}
`;

export { baseStyles, realStyles };
