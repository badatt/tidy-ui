import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const PasswordInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { disabled, girth } = props;
  const [visible, setVisible] = React.useState(false);
  return (
    <InputGroup isBlend {...{ disabled, girth }}>
      <TextInput ref={ref} type={visible ? undefined : 'password'} {...props} />
      <InputElement role="button" isClickable onClick={() => setVisible(!visible)} {...props}>
        <Icon ele={visible ? <Icon.Visibility /> : <Icon.VisibilityOff />} />
      </InputElement>
    </InputGroup>
  );
});

PasswordInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
