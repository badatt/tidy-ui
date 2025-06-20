import { applyStandardOverrideStyles, color, createFontStyle, css, hsla, styled } from '@tidy-ui/commons';
import { ITableProps, ITdProps, IThProps, ITrProps } from './types';

const sizeScale = {
  lg: 1.8,
  md: 1,
  sm: 0.5,
};

const TableRoot = styled.table<ITableProps>`
  border: none;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ${({ theme: { isDark }, girth, isStriped, isStretched }) => css`
    ${isStriped &&
    css`
      tr:nth-child(even) td {
        background-color: ${isDark ? hsla(color.gray[900], 0.4) : hsla(color.gray[100], 0.8)};
      }
      tr:nth-child(odd) td {
        background-color: ${isDark ? hsla(color.gray[900], 0.7) : hsla(color.gray[200], 0.8)};
      }
    `}
    ${isStretched &&
    css`
      width: 100%;
    `}
    td, th {
      padding: calc(0.8em * ${sizeScale[girth!]}) 1em;
    }
  `}
  ${applyStandardOverrideStyles}
`;

const TrRoot = styled.tr<ITrProps>`
  border: none;
  & > :first-child {
    border-left: none;
  }
  & > :last-child {
    border-right: none;
  }
  ${applyStandardOverrideStyles}
`;

const ThRoot = styled.th<IThProps>`
  border-top: none;
  border-bottom: none;
  padding: 0;
  text-align: left;
  position: relative;
  ${({ theme: { font }, align }) => css`
    font-weight: ${font.regular};
    text-align: ${align};
  `}
  ${applyStandardOverrideStyles}
`;

const TdRoot = styled.td<ITdProps>`
  border: none;
  padding: 0;
  text-align: left;
  ${({ theme: { isDark }, align }) => css`
    border-bottom: 1px solid ${isDark ? hsla(color.slate[700], 0.5) : hsla(color.slate[200])};
    text-align: ${align};
  `}
  ${applyStandardOverrideStyles}
`;

const Resizer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  cursor: col-resize;
  user-select: none;
  height: 100%;
  ${({ theme: { palette } }) => css`
    :hover,
    &.resizing {
      background-color: ${palette.minor[500]};
    }
  `}
`;

const Thead = styled.thead`
  ${applyStandardOverrideStyles}
`;

const Tbody = styled.tbody`
  ${applyStandardOverrideStyles}
`;

const Tfoot = styled.tfoot`
  ${applyStandardOverrideStyles}
`;

/** @internal */
const TableCaption = styled.div<{
  /** @internal */
  isStretched?: boolean;
}>`
  ${createFontStyle('caption')}
  flex-shrink:0;
  width: 100%;
  ${({ isStretched }) => css`
    width: ${isStretched ? '100%' : 'auto'};
  `}
  text-align: center;
  padding: 1rem 2rem;
`;

export { Resizer, TableCaption, TableRoot, Tbody, TdRoot, Tfoot, Thead, ThRoot, TrRoot };
