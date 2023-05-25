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

Grid.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    const allowed = ['GridItem'];
    const errorMessage = `${componentName} accepts only ${allowed} as children`;
    const childrenNames = React.Children.map(props[propName], (c) => c.type.displayName);
    if (childrenNames.length == 0 || !childrenNames.every((c) => allowed.includes(c))) {
      return new Error(`Invalid nodes. ${errorMessage}`);
    }
    return null;
  },
};

Grid.Item = Item;

export { Grid };
