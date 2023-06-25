import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { ITableProps, ITdProps, IThProps, ITrProps } from './types';

const sizeScale = {
  lg: 1.8,
  md: 1,
  sm: 0.5,
};

const TableRoot = styled.table<ITableProps>`
  border: none;
  white-space: nowrap;
  ${({ theme: { isDark }, girth, isStriped }) => css`
    ${isStriped &&
    css`
      tr:nth-child(even) td {
        background-color: ${isDark ? hsla(color.gray[900], 0.4) : hsla(color.gray[100], 0.8)};
      }
      tr:nth-child(odd) td {
        background-color: ${isDark ? hsla(color.gray[900], 0.7) : hsla(color.gray[200], 0.8)};
      }
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
  ${({ theme: { font } }) => css`
    font-weight: ${font.regular};
  `}
  ${applyStandardOverrideStyles}
`;

const TdRoot = styled.td<ITdProps>`
  border: none;
  padding: 0;
  text-align: left;
  ${({ theme: { isDark } }) => css`
    border-bottom: 1px solid ${isDark ? hsla(color.slate[700], 0.5) : hsla(color.slate[200])};
  `}
  ${applyStandardOverrideStyles}
`;

const Resizer = styled.div``;

export { Resizer, TableRoot, TdRoot, ThRoot, TrRoot };
