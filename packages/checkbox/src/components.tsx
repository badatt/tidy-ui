import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import { filledCheckboxStyles, filledTickStyles, outlinedCheckboxStyles, outlinedTickStyles } from './styles';
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
  ${applyStandardOverrideStyles}
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

const StyledCheckboxInput = styled.div<ICheckboxProps>`
  display: inline-block;
  transition: all 150ms;

  ${({ isFilled, girth }) => css`
    ${isFilled ? filledCheckboxStyles : outlinedCheckboxStyles}
    border-radius: calc(0.2em * ${sizeScale[girth!]});
    width: calc(1em * ${sizeScale[girth!]});
    height: calc(1em * ${sizeScale[girth!]});
  `}

  ${TickIcon} {
    ${({ isFilled, checked }) => css`
      visibility: ${checked ? 'visible' : 'hidden'};
      ${isFilled ? filledTickStyles : outlinedTickStyles}
    `}
  }
`;

export { CheckboxRoot, HiddenCheckboxInput, StyledCheckboxInput, TickIcon };
