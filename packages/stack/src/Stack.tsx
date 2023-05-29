import React from 'react';
import { StackItem, StackRoot } from './components';
import { IStackProps } from './types';

/**
 * Stack, as the name says, can be used to stack any react component, plain html
 * element or even just text nodes in an orderly fashion. Provide a divider
 * component that separate each node with in the stack. It is provided with various
 * styling options like alignment, wrap, gap etc.
 */
const Stack = React.forwardRef<HTMLDivElement, IStackProps>((props, ref) => {
  const { children, divider, ...rest } = props;
  const count = React.Children.count(children);
  return (
    <StackRoot ref={ref} role="group" {...rest}>
      {React.Children.map(children, (child, i) => {
        const childNode = <StackItem align={props.align}>{child}</StackItem>;
        return [childNode, i < count - 1 ? divider : null];
      })}
    </StackRoot>
  );
});

Stack.defaultProps = {
  align: 'flex-start',
  canFold: false,
  justify: 'flex-start',
  order: 'row',
};

Stack.displayName = 'Stack';

export { Stack };
