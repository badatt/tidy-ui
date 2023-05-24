import React from 'react';
import { FlexItemRoot } from './components';
import { IFlexItemProps } from './types';

/**
 * FlexItem to be kept under FlexBox, comes with all css props
 */
const FlexItem = React.forwardRef<HTMLDivElement, IFlexItemProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <FlexItemRoot ref={ref} role="presentation" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </FlexItemRoot>
  );
});

FlexItem.defaultProps = {
  fuw: false,
};

FlexItem.displayName = 'FlexItem';

export { FlexItem };
