import React from 'react';
import { DateInput } from './DateInput';
import { ITextInputProps } from './types';

const MonthInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  return <DateInput ref={ref} type="month" {...props} />;
});

MonthInput.defaultProps = {
  disabled: false,
  girth: 'md',
  variant: 'outlined',
};

MonthInput.displayName = 'MonthInput';

export { MonthInput };
