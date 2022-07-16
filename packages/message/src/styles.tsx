import { css, hsla } from '@tidy-ui/theme';
import { IMessageProps } from './types';

const filledLabel = css<IMessageProps>`
  ${({ theme: { palette }, color }) => css`
    background-color: ${palette[color!][600]};
    color: ${palette[color!][50]};
  `}
`;

const outlinedLabel = css<IMessageProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[800], 0.8) : palette[color!][100]};
    border: 1px solid ${isDark ? palette[color!][600] : palette[color!][300]};
    border-bottom: 0;
  `}
`;

const filledContent = css<IMessageProps>`
  ${({ theme: { palette }, color }) => css`
    background-color: ${palette[color!][500]};
    color: ${palette[color!][50]};
  `}
`;

const outlinedContent = css<IMessageProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[900], 0.3) : palette[color!][50]};
    border: 1px solid ${isDark ? palette[color!][600] : palette[color!][300]};
  `}
`;

export { filledLabel, outlinedLabel, filledContent, outlinedContent };
