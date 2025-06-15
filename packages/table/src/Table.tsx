import React from 'react';
import { TableCaption, TableRoot } from './components';
import { ITableProps } from './types';

const Table = React.forwardRef<HTMLDivElement, ITableProps>((props, ref) => {
  const { children, caption, ...rest } = props;
  return (
    <>
      <TableRoot data-tui-name="Table" ref={ref} {...rest}>
        {children}
      </TableRoot>
      {caption && <TableCaption data-tui-name="TableCaption">{caption}</TableCaption>}
    </>
  );
});

Table.defaultProps = {
  girth: 'md',
  isStriped: false,
};

Table.displayName = 'Table';

export { Table };
