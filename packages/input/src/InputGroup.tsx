import React from 'react';
import { InputGroupRoot } from './components';
import { IInputGroupProps } from './types';

/**
 * InputGroup can be used to group an Input with InputElements.
 * This cannot be used to group two or more Inputs, only one Input type should
 * be used inside this.
 */
const InputGroup = React.forwardRef<HTMLDivElement, IInputGroupProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <InputGroupRoot role="group" ref={ref} {...rest}>
      {React.Children.map(children, (c) => {
        const child = c as React.ReactElement;
        return React.cloneElement(child, { ...rest });
      })}
    </InputGroupRoot>
  );
});

InputGroup.defaultProps = {
  blend: false,
  disabled: false,
  sz: 'md',
};

InputGroup.displayName = 'InputGroup';

export { InputGroup };
