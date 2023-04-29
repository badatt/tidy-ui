import React from 'react';
import { InputElementRoot } from './components';
import { IInputElementProps } from './types';

const InputElement = React.forwardRef<HTMLDivElement, Omit<IInputElementProps, 'children'>>((props, ref) => {
  const { node, ...rest } = props;

  return (
    <InputElementRoot ref={ref} {...rest}>
      {node}
    </InputElementRoot>
  );
});

InputElement.defaultProps = {
  clickable: false,
};

InputElement.displayName = 'InputElement';

export { InputElement };
