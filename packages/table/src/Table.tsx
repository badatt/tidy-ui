import React from 'react';
import { TableCaption, TableContainer, TableRoot } from './components';
import { ITableProps } from './types';

const Table = React.forwardRef<HTMLDivElement, ITableProps>((props, ref) => {
  const { children, caption, ...rest } = props;
  return (
    <TableContainer>
      <TableRoot ref={ref} role="table" {...rest}>
        {children}
      </TableRoot>
      {caption && <TableCaption>{caption}</TableCaption>}
    </TableContainer>
  );
});

Table.defaultProps = {
  girth: 'md',
  isStriped: false,
};

Table.displayName = 'Table';

export { Table };
