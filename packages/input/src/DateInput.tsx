import React from 'react';
import { color, hsla, Icon, styled } from '@tidy-ui/commons';
import { InputElement } from './InputElement';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { ITextInputProps } from './types';

const StyledTextInput = styled(TextInput)`
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
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
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <StyledTextInput ref={ref} type="date" {...rest} />
      <InputElement node={<Icon ele={<Icon.CalendarMonth />} />} />
    </InputGroup>
  );
});

DateInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

DateInput.displayName = 'DateInput';

export { DateInput };
