import React from 'react';
import { TdRoot } from './components';
import { ITdProps } from './types';

const Td = React.forwardRef<HTMLTableCellElement, ITdProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <TdRoot ref={ref} role="cell" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </TdRoot>
  );
});

Td.defaultProps = {};

Td.displayName = 'Td';

export { Td };
