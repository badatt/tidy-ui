import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const SearchInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <InputElement node={<Icon ele={<Icon.Search />} />} />
      <TextInput ref={ref} type="search" {...rest} />
    </InputGroup>
  );
});

SearchInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

SearchInput.displayName = 'SearchInput';

export { SearchInput };