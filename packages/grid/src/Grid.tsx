import React, { forwardRef } from 'react';
import { css, devices, styled } from '@tidy-ui/commons';
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
  }) => css`
    ${gutter &&
    css`
      padding: 0 ${gutter};
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

/**
 * Grid component provides 24 sections horizontally with mobile first responsive layout.
 * Shouldn't be confused with css grid, but a good replacement for it
 */
const Grid = forwardRef<HTMLDivElement, IGridProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <GridRoot ref={ref} role="grid" {...rest}>
      {children}
    </GridRoot>
  );
});

Grid.defaultProps = {
  fixed: false,
  gutter: '0.25rem',
};

export { Grid };
