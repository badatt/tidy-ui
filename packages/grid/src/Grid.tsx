import React from 'react';
import { css, devices, styled } from '@tidy-ui/commons';
import { Item } from './Item';
import { IGridProps } from './types';

const GridRoot = styled.div<IGridProps>`
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  ${({
    theme: {
      layout: { screens },
    },
    fixed,
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
`;

/** @internal */
interface GridComponent extends React.ForwardRefExoticComponent<IGridProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Item: typeof Item;
}

/**
 * Grid component provides 24 sections horizontally with mobile first responsive layout.
 * Shouldn't be confused with css grid, but a good replacement for it
 */
const Grid = React.forwardRef<HTMLDivElement, IGridProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <GridRoot ref={ref} role="grid" {...rest}>
      {children}
    </GridRoot>
  );
}) as GridComponent;

Grid.defaultProps = {
  fixed: false,
};

Grid.Item = Item;

export { Grid };
