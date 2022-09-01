import React from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IStackProps } from './types';

const StackRoot = styled.div<IStackProps>`
  display: flex;
  ${({ order, justify, gap, fold }) => css`
    flex-direction: ${order};
    justify-content: ${justify};
    gap: ${gap};
    flex-wrap: ${fold ? 'wrap' : 'nowrap'};
  `}
`;

const StackItem = styled.div<IStackProps>`
  ${({ align }) => css`
    align-self: ${align};
  `}
`;

/**
 * Stack, as the name says, can be used to stack any react component, plain html
 * element or even just text nodes in an orderly fashion. Provide a divider
 * component that separate each node with in the stack. It is provided with various
 * styling options like alignment, wrap, gap etc.
 */
const Stack = React.forwardRef<HTMLDivElement, IStackProps>((props, ref) => {
  const { children, className, divider, ...rest } = props;
  const count = React.Children.count(children);
  return (
    <StackRoot ref={ref} role="group" className={className} {...rest}>
      {React.Children.map(children, (child, i) => {
        const childNode = <StackItem {...rest}>{child}</StackItem>;
        return [childNode, i < count - 1 ? divider : null];
      })}
    </StackRoot>
  );
});

Stack.defaultProps = {
  align: 'center',
  fold: false,
};

Stack.displayName = 'Stack';

export { Stack };
