import { applyStandardOverrideStyles, css, devices, styled } from '@tidy-ui/commons';
import { IGridProps, IItemProps } from './types';

const GridRoot = styled.div<IGridProps>`
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  ${({
    theme: {
      layout: { screens },
    },
    isFixed: fixed,
    gutter,
    gap,
  }) => css`
    ${gutter &&
    css`
      padding: 0 ${gutter};
    `}
    ${gap &&
    css`
      margin-left: ${Math.ceil(gap) / -2}px;
      margin-right: ${Math.floor(gap) / -2}px;
      & > * {
        padding-left: ${Math.ceil(gap) / 2}px;
        padding-right: ${Math.floor(gap) / 2}px;
        padding-top: ${Math.ceil(gap) / 2}px;
        padding-bottom: ${Math.floor(gap) / 2}px;
      }
    `}
    ${fixed &&
    css`
      ${devices.mobile} {
        width: ${screens.xs.breakpoint}px;
      }
      ${devices.tablet} {
        width: ${screens.sm.breakpoint}px;
      }
      ${devices.laptop} {
        width: ${screens.md.breakpoint}px;
      }
      ${devices.desktop} {
        width: ${screens.lg.breakpoint}px;
      }
      ${devices.tv} {
        width: ${screens.xl.breakpoint}px;
      }
    `}
  `}
  &::before,
  &::after {
    content: '';
    clear: both;
    display: table;
  }
  ${applyStandardOverrideStyles}
`;

/** @internal */
const getWidth = (span: number) => `width: ${(span / 24) * 100}%`;

const ItemRoot = styled.div<IItemProps>`
  ${({ xs, sm, md, lg, xl }) => css`
    float: left;
    position: relative;
    min-height: 1px;
    width: 100%;
    ${devices.mobile} {
      ${xs && getWidth(xs)}
    }
    ${devices.tablet} {
      ${sm && getWidth(sm)}
    }
    ${devices.laptop} {
      ${md && getWidth(md)}
    }
    ${devices.desktop} {
      ${lg && getWidth(lg)}
    }
    ${devices.tv} {
      ${xl && getWidth(xl)}
    }
  `}
  ${applyStandardOverrideStyles}
`;

export { GridRoot, ItemRoot };
