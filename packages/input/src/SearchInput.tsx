import React from 'react';
import { Icon, styled } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const StyledTextInput = styled(TextInput)`
  &::-webkit-search-cancel-button {
    opacity: 0;
  }
`;

const SearchInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <InputElement node={<Icon ele={<Icon.Search />} />} />
      <StyledTextInput ref={ref} type="search" {...rest} />
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
