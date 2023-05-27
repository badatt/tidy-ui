import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const SearchInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { disabled, girth } = props;
  return (
    <InputGroup isBlend {...{ disabled, girth }}>
      <InputElement node={<Icon ele={<Icon.Search />} />} isBlend {...{ disabled, girth }} />
      <TextInput ref={ref} type="search" {...props} />
    </InputGroup>
  );
});

SearchInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

SearchInput.displayName = 'SearchInput';

export { SearchInput };
