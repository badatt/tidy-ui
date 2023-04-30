import React from 'react';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const NumberInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <TextInput ref={ref} type="number" {...rest} />
    </InputGroup>
  );
});

NumberInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

NumberInput.displayName = 'NumberInput';

export { NumberInput };
