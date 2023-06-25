import React from 'react';
import { ThRoot } from './components';
import { IThProps } from './types';

const Th = React.forwardRef<HTMLTableCellElement, IThProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <ThRoot ref={ref} role="cell" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </ThRoot>
  );
});

Th.defaultProps = {};

Th.displayName = 'Th';

export { Th };
