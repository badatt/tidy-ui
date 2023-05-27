import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const UrlInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { disabled, girth } = props;
  return (
    <InputGroup isBlend {...{ disabled, girth }}>
      <TextInput ref={ref} type="url" {...props} />
      <InputElement node={<Icon ele={<Icon.Link />} />} isBlend {...{ disabled, girth }} />
    </InputGroup>
  );
});

UrlInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

UrlInput.displayName = 'UrlInput';

export { UrlInput };
