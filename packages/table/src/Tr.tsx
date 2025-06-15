import React from 'react';
import { TrRoot } from './components';
import { ITrProps } from './types';

const Tr = React.forwardRef<HTMLTableRowElement, ITrProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <TrRoot ref={ref} data-tui-name="Tr" {...rest}>
      {children}
    </TrRoot>
  );
});

Tr.defaultProps = {};

Tr.displayName = 'Tr';

export { Tr };
