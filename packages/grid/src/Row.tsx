import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IRowProps } from './types';

const RowRoot = styled.div<IRowProps>`
  box-sizing: border-box;
  margin: auto;
  ${({ gutter }) => css`
    ${gutter &&
    css`
      margin-left: ${Math.ceil(gutter) / -2}px;
      margin-right: ${Math.floor(gutter) / -2}px;
      & > * {
        padding-left: ${Math.ceil(gutter) / 2}px;
        padding-right: ${Math.floor(gutter) / 2}px;
        padding-top: ${Math.ceil(gutter) / 2}px;
        padding-bottom: ${Math.floor(gutter) / 2}px;
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
 * Row components encloses all Col blocks horizontally
 */
const Row = forwardRef<HTMLDivElement, IRowProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <RowRoot ref={ref} role="row" {...rest}>
      {children}
    </RowRoot>
  );
});

Row.defaultProps = {};

export { Row };
