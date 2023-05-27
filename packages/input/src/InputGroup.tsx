import React from 'react';
import { InputGroupRoot } from './components';
import { IInputGroupProps } from './types';

/**
 * InputGroup can be used to group an Input with InputElements.
 * This cannot be used to group two or more Inputs, only one Input type should
 * be used inside this.
 */
const InputGroup = React.forwardRef<HTMLDivElement, IInputGroupProps>((props, ref) => {
  const { children, disabled, girth, isBlend } = props;

  return (
    <InputGroupRoot role="group" ref={ref} {...{ disabled, girth, isBlend }}>
      {React.Children.map(children, (c) => {
        const child = c as React.ReactElement;
        return React.cloneElement(child, { ...child.props, disabled, girth, isBlend });
      })}
    </InputGroupRoot>
  );
});

InputGroup.defaultProps = {
  girth: 'md',
};

InputGroup.displayName = 'InputGroup';

export { InputGroup };
