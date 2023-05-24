import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import { IFlexBoxProps, IFlexItemProps } from './types';

const FlexBoxRoot = styled.div<IFlexBoxProps>`
  ${({ fuh, alc, ali, cgp, fld, flow, gap, jsc, rgp, nowrap }) => css`
    display: flex;
    flex-direction: ${fld};
    justify-content: ${jsc};
    flex-wrap: ${nowrap ? 'nowrap' : 'wrap'};
    ${ali &&
    css`
      align-items: ${ali};
    `}
    ${!ali &&
    alc &&
    css`
      align-content: ${alc};
    `}
    ${fuh &&
    css`
      height: 100%;
    `}
    ${gap &&
    css`
      gap: ${gap};
    `}
    ${cgp &&
    css`
      column-gap: ${cgp};
    `}
    ${rgp &&
    css`
      row-gap: ${rgp};
    `}
    ${flow &&
    css`
      flex-flow: ${flow};
    `}
  `}
  ${applyStandardOverrideStyles}
`;

const FlexItemRoot = styled.div<IFlexItemProps>`
  position: relative;
  display: block;
  min-height: 1px;
  ${({ als, fbs, fgo, flx, fsk, fuw, ord, span }) => css`
    ${als &&
    css`
      align-self: ${als};
    `}
    ${fbs &&
    css`
      flex-basis: ${fbs};
    `}
    ${fgo &&
    css`
      flex-grow: ${fgo};
    `}
    ${flx &&
    css`
      flex: ${flx};
    `}
    ${fsk &&
    css`
      flex-shrink: ${fsk};
    `}
    ${ord &&
    css`
      order: ${ord};
    `}
    ${span &&
    span > 0 &&
    !fuw &&
    css`
      width: ${() => (span / 24) * 100}%;
    `}
    ${fuw &&
    css`
      width: 100%;
    `}
  `}
  ${applyStandardOverrideStyles}
`;

export { FlexBoxRoot, FlexItemRoot };
