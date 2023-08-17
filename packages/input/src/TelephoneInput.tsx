import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const TelephoneInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { disabled, girth } = props;
  return (
    <InputGroup isBlend {...{ disabled, girth }}>
      <TextInput ref={ref} type="tel" {...props} />
      <InputElement isBlend {...{ disabled, girth }}>
        <Icon ele={<Icon.Phone />} />
      </InputElement>
    </InputGroup>
  );
});

TelephoneInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

TelephoneInput.displayName = 'TelephoneInput';

export { TelephoneInput };
