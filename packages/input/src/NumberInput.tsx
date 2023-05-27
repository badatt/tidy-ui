import React from 'react';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const NumberInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  return <TextInput ref={ref} type="number" {...props} />;
});

NumberInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

NumberInput.displayName = 'NumberInput';

export { NumberInput };
