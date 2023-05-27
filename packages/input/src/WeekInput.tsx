import React from 'react';
import { color, hsla, styled } from '@tidy-ui/commons';
import { DateInput } from './DateInput';
import { ITextInputProps } from './types';

const StyledDateInput = styled(DateInput)`
  &::-webkit-datetime-edit-week-field {
    color: ${hsla(color.slate[500])};
  }
`;

const WeekInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return <StyledDateInput ref={ref} type="week" {...rest} />;
});

WeekInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

WeekInput.displayName = 'WeekInput';

export { WeekInput };
