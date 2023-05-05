import { color, css, hsla, styled } from '@tidy-ui/commons';
import { ICheckboxProps } from './types';

const sizeScale = {
  lg: 1.5,
  md: 1,
  xl: 2,
  xxl: 2.5,
};

const CheckboxRoot = styled.label<ICheckboxProps>`
  display: flex;
  align-items: center;
  gap: 0.5em;
  vertical-align: middle;
  cursor: pointer;
  ${({ disabled }) => css`
    ${disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.6;
      transition: none;
    `}
  `}
`;

const HiddenCheckboxInput = styled.input<ICheckboxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const TickIcon = styled.svg`
  fill: none;
  stroke-width: 3px;
`;

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

const outlinedCheckboxStyles = css<ICheckboxProps>`
  ${({ theme: { palette, isDark }, status, checked }) => css`
    border: 1px solid ${checked ? palette[status!][500] : hsla(color.slate[outlinedCheckboxShade(isDark)])};
  `}
`;

const outlinedTickStyles = css<ICheckboxProps>`
  ${({ theme: { palette }, status, checked }) => css`
    stroke: ${checked ? palette[status!][500] : undefined};
  `}
`;

const StyledCheckboxInput = styled.div<ICheckboxProps>`
  display: inline-block;
  border-radius: 0.2em;
  transition: all 150ms;

  ${({ filled, sz }) => css`
    ${filled ? filledCheckboxStyles : outlinedCheckboxStyles}
    border-radius: calc(0.2em * ${sizeScale[sz!]});
    width: calc(1em * ${sizeScale[sz!]});
    height: calc(1em * ${sizeScale[sz!]});
  `}

  ${TickIcon} {
    ${({ filled, checked }) => css`
      visibility: ${checked ? 'visible' : 'hidden'};
      ${filled ? filledTickStyles : outlinedTickStyles}
    `}
  }
`;

export { CheckboxRoot, HiddenCheckboxInput, StyledCheckboxInput, TickIcon };
