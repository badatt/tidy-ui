import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const EmailInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { disabled, girth } = props;
  return (
    <InputGroup isBlend {...{ disabled, girth }}>
      <TextInput ref={ref} type="email" {...props} />
      <InputElement isBlend node={<Icon ele={<Icon.Email isOutlined />} />} {...{ disabled, girth }} />
    </InputGroup>
  );
});

EmailInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

EmailInput.displayName = 'EmailInput';

export { EmailInput };
