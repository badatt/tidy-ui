import React from 'react';
import { InputElementRoot } from './components';
import { IInputElementProps } from './types';

const InputElement = React.forwardRef<HTMLDivElement, IInputElementProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <InputElementRoot ref={ref} {...rest}>
      {children}
    </InputElementRoot>
  );
});

InputElement.defaultProps = {
  girth: 'md',
  isBlend: false,
  isClickable: false,
};

InputElement.displayName = 'InputElement';

export { InputElement };
