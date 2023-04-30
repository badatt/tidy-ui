import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const PasswordInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  const [visible, setVisible] = React.useState(false);
  return (
    <InputGroup blend {...rest}>
      <TextInput ref={ref} type={visible ? undefined : 'password'} {...rest} />
      <InputElement
        role="button"
        clickable
        node={<Icon ele={visible ? <Icon.Visibility /> : <Icon.VisibilityOff />} />}
        onClick={() => setVisible(!visible)}
      />
    </InputGroup>
  );
});

PasswordInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
