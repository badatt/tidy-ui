import React from 'react';
import { GridRoot } from './components';
import { Item } from './Item';
import { IGridProps } from './types';

/** @internal */
interface GridComponent extends React.ForwardRefExoticComponent<IGridProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Item: typeof Item;
}

/**
 * Grid component provides 24 sections horizontally with mobile first responsive layout.
 * Shouldn't be confused with css grid, but a good replacement for it
 */
const Grid = React.forwardRef<HTMLDivElement, IGridProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <GridRoot ref={ref} role="grid" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </GridRoot>
  );
}) as GridComponent;

Grid.defaultProps = {
  isFixed: false,
};

Grid.displayName = 'Grid';

Grid.Item = Item;

export { Grid };
