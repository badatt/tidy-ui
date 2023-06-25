import React from 'react';
import { TableRoot } from './components';
import { ITableProps } from './types';

const Table = React.forwardRef<HTMLDivElement, ITableProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <TableRoot ref={ref} role="table" {...rest}>
      {children}
    </TableRoot>
  );
});

Table.defaultProps = {
  girth: 'md',
  isStriped: false,
};

Table.displayName = 'Table';

export { Table };
