import React from 'react';
import { ItemRoot } from './components';
import { IItemProps } from './types';

const Item = React.forwardRef<HTMLDivElement, IItemProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <ItemRoot ref={ref} role="gridcell" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </ItemRoot>
  );
});

Item.defaultProps = {
  lg: 4,
  md: 6,
  sm: 8,
  xl: 2,
  xs: 12,
};

Item.displayName = 'GridItem';

export { Item };
