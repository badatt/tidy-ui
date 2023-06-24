import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { IOptionProps, ISelectProps } from './types';

/** @internal */
const getBorderColor = (isDark: boolean): number => (isDark ? 600 : 300);

const sizeScale = {
  lg: 1.2,
  md: 1,
  sm: 0.9,
  xl: 1.4,
  xs: 0.85,
  xxl: 1.6,
  xxs: 0.75,
};

const SelectRoot = styled.select<ISelectProps>`
  cursor: pointer;
  min-width: 0px;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  border-width: 1px;
  border-image: initial;
  background: inherit;
  color: inherit;
  border-style: solid;

  ${({ theme: { palette, isDark }, status, girth }) => css`
    border-radius: calc(0.375rem * ${sizeScale[girth!]});
    padding-inline-start: calc(1rem * ${sizeScale[girth!]});
    padding-inline-end: calc(1rem * ${sizeScale[girth!]});
    border-color: ${status ? palette[status][getBorderColor(isDark)] : hsla(color.slate[getBorderColor(isDark)])};
    height: calc(2.5em * ${sizeScale[girth!]});
    font-size: calc(1rem * ${sizeScale[girth!]});
    ::placeholder {
      color: ${hsla(color.slate[500])};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${hsla(color.slate[500])};
    }

    ::-ms-input-placeholder {
      color: ${hsla(color.slate[500])};
    }
    :hover {
      border-color: ${status ? palette[status][500] : hsla(color.slate[400])};
    }
  `}

  ${applyStandardOverrideStyles}
`;

const OptionRoot = styled.option<IOptionProps>`
  cursor: pointer;
  text-shadow: none;
  ${({ theme: { isDark } }) => css`
    background-color: ${isDark ? hsla(color.slate[800]) : hsla(color.slate[200])};
  `}
  ${applyStandardOverrideStyles}
`;

export { OptionRoot, SelectRoot };
