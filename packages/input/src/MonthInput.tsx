import React from 'react';
import { DateInput } from './DateInput';
import { ITextInputProps } from './types';

const MonthInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return <DateInput ref={ref} type="month" {...rest} />;
});

MonthInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

MonthInput.displayName = 'MonthInput';

export { MonthInput };
