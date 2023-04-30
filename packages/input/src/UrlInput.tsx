import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const UrlInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <TextInput ref={ref} type="url" {...rest} />
      <InputElement node={<Icon ele={<Icon.Link />} />} />
    </InputGroup>
  );
});

UrlInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

UrlInput.displayName = 'UrlInput';

export { UrlInput };
