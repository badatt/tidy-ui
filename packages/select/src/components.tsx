import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { IOptionProps, ISelectProps } from './types';

/** @internal */
const getBorderColor = (isDark: boolean): number => (isDark ? 600 : 300);

const sizeScale = {
  lg: 1.5,
  md: 1,
  sm: 0.85,
  xl: 2,
  xs: 0.7,
  xxl: 2.5,
  xxs: 0.5,
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
    border-radius: 0.375em;
    padding-inline-start: 0.5em;
    padding-inline-end: 0.5em;
    border-color: ${status ? palette[status][getBorderColor(isDark)] : hsla(color.slate[getBorderColor(isDark)])};
    padding-top: 0.2em;
    padding-bottom: 0.2em;
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
