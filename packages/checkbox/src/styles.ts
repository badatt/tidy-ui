import { color, css, hsla } from '@tidy-ui/commons';
import { ICheckboxProps } from './types';

/** @internal */
const filledCheckboxShade = (isDark) => (isDark ? 700 : 300);

const filledCheckboxStyles = css<ICheckboxProps>`
  ${({ theme: { palette, isDark }, status, checked }) => css`
    background-color: ${checked ? palette[status!][500] : hsla(color.slate[filledCheckboxShade(isDark)])};
  `}
`;

const filledTickStyles = css<ICheckboxProps>`
  ${({ theme: { palette }, status, checked }) => css`
    stroke: ${checked ? palette[status!][100] : undefined};
  `}
`;

/** @internal */
const outlinedCheckboxShade = (isDark) => (isDark ? 600 : 400);

const outlinedTickStyles = css<ICheckboxProps>`
  ${({ theme: { palette }, status, checked }) => css`
    stroke: ${checked ? palette[status!][500] : undefined};
  `}
`;

const outlinedCheckboxStyles = css<ICheckboxProps>`
  ${({ theme: { palette, isDark }, status, checked }) => css`
    border: 1px solid ${checked ? palette[status!][500] : hsla(color.slate[outlinedCheckboxShade(isDark)])};
  `}
`;

export { filledCheckboxStyles, filledTickStyles, outlinedCheckboxStyles, outlinedTickStyles };
