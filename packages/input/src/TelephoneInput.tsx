import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const TelephoneInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <TextInput ref={ref} type="tel" {...rest} />
      <InputElement node={<Icon ele={<Icon.Phone />} />} />
    </InputGroup>
  );
});

TelephoneInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

TelephoneInput.displayName = 'TelephoneInput';

export { TelephoneInput };
