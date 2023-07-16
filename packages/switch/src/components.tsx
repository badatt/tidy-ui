import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { ISwitchProps } from './types';

const sizeScale = {
  lg: 1.5,
  md: 1,
  xl: 2,
  xxl: 2.5,
};

const SwitchRoot = styled.div<ISwitchProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${applyStandardOverrideStyles}
`;

/** @internal */
const getSwitchOuterBgColor = (isDark: boolean) => (isDark ? hsla(color.slate[600]) : hsla(color.slate[400]));

/** @internal */
const getSwitchButtonBgColor = (isDark: boolean) => (isDark ? hsla(color.slate[800]) : hsla(color.slate[100]));

/** @internal */
const getSwitchOuterShadow = (isDark: boolean) => (isDark ? hsla(color.slate[700]) : hsla(color.slate[500]));

const CheckboxAsSwitch = styled.input<ISwitchProps>`
  ${({ theme: { palette, isDark }, checked, girth, status }) => css`
    font-size: calc(1rem * ${sizeScale[girth!]});
    background-color: ${checked ? palette[status!][500] : getSwitchOuterBgColor(isDark)};
    ${checked
      ? css`
          box-shadow: 0.02em 0.02em 0.05em ${palette[status!][600]} inset,
            -0.02em -0.02em 0.05em ${palette[status!][600]} inset;
        `
      : css`
          box-shadow: 0.02em 0.02em 0.05em ${getSwitchOuterShadow(isDark)} inset,
            -0.02em -0.02em 0.05em ${getSwitchOuterShadow(isDark)} inset;
        `}
  `}
  position: relative;
  display: flex;
  cursor: pointer;
  width: 2em;
  height: 1.2em;
  border-radius: 9999px;
  appearance: none;
  border: 0;
  transition: all 0.2s cubic-bezier(0, 0, 0, 0.1);

  ::after {
    position: absolute;
    content: '';
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    transform: scale(80%);
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13),
      0 3px 3px hsla(0, 0%, 0%, 0.05);
    transition: left 200ms cubic-bezier(0.54, 1.6, 0.5, 1);
    ${({ theme: { isDark }, checked }) => css`
      background-color: ${getSwitchButtonBgColor(isDark)};
      ${checked
        ? css`
            left: calc(100% - 1.2em);
          `
        : css`
            left: 0;
          `}
    `}
  }
`;

export { CheckboxAsSwitch, SwitchRoot };
