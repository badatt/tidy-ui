import React from 'react';
import { color, hsla, styled } from '@tidy-ui/commons';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const StyledTextInput = styled(TextInput)`
  &::-webkit-datetime-edit-text {
    color: ${hsla(color.slate[500])};
    padding: 0 0.2em;
  }
  &::-webkit-datetime-edit-day-field {
    color: ${hsla(color.slate[500])};
  }
  &::-webkit-datetime-edit-month-field {
    color: ${hsla(color.slate[500])};
  }

  &::-webkit-datetime-edit-year-field {
    color: ${hsla(color.slate[500])};
  }
`;

const DateInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { disabled, girth } = props;
  return (
    <InputGroup isBlend {...{ disabled, girth }}>
      <StyledTextInput ref={ref} type="date" {...props} />
    </InputGroup>
  );
});

DateInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

DateInput.displayName = 'DateInput';

export { DateInput };
