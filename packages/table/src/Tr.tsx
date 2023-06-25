import React from 'react';
import { TrRoot } from './components';
import { ITrProps } from './types';

const Tr = React.forwardRef<HTMLTableRowElement, ITrProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <TrRoot ref={ref} role="row" {...rest}>
      {children}
    </TrRoot>
  );
});

Tr.defaultProps = {};

Tr.displayName = 'Tr';

export { Tr };
