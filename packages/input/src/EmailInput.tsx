import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const EmailInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <TextInput ref={ref} type="email" {...rest} />
      <InputElement node={<Icon ele={<Icon.Email isOutlined />} />} />
    </InputGroup>
  );
});

EmailInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

EmailInput.displayName = 'EmailInput';

export { EmailInput };
