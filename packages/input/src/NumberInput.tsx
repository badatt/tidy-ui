import React from 'react';
import { styled } from '@tidy-ui/commons';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const StyledTextInput = styled(TextInput)`
  appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const NumberInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <StyledTextInput ref={ref} type="number" {...rest} />
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
