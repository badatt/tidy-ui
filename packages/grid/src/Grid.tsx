import React from 'react';
import { GridRoot } from './components';
import { IGridProps } from './types';

const Grid = React.forwardRef<HTMLDivElement, IGridProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <GridRoot ref={ref} role="grid" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </GridRoot>
  );
});

Grid.defaultProps = {
  isFixed: false,
};

Grid.displayName = 'Grid';

export { Grid };
