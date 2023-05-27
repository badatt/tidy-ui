import React from 'react';
import { color, hsla, styled } from '@tidy-ui/commons';
import { DateInput } from './DateInput';
import { ITextInputProps } from './types';

const StyledDateInput = styled(DateInput)`
  &::-webkit-datetime-edit-hour-field {
    color: ${hsla(color.slate[500])};
  }
  &::-webkit-datetime-edit-minute-field {
    color: ${hsla(color.slate[500])};
  }
`;

const DateTimeInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return <StyledDateInput ref={ref} type="datetime-local" {...rest} />;
});

DateTimeInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

DateTimeInput.displayName = 'DateTimeInput';

export { DateTimeInput };
