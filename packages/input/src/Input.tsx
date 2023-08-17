import React from 'react';
import { DateInput } from './DateInput';
import { DateTimeInput } from './DateTimeInput';
import { EmailInput } from './EmailInput';
import { MonthInput } from './MonthInput';
import { NumberInput } from './NumberInput';
import { PasswordInput } from './PasswordInput';
import { SearchInput } from './SearchInput';
import { TelephoneInput } from './TelephoneInput';
import { TextInput } from './TextInput';
import { TimeInput } from './TimeInput';
import { ITextInputProps } from './types';
import { UrlInput } from './UrlInput';
import { WeekInput } from './WeekInput';

/**
 * Input component can be used in forms, a good replacement for
 * native HTML input tag, powered by many styles and theme support
 */
const Input = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { type, ...rest } = props;
  switch (type) {
    case 'date':
      return <DateInput ref={ref} {...rest} />;
    case 'datetime-local':
      return <DateTimeInput ref={ref} {...rest} />;
    case 'email':
      return <EmailInput ref={ref} {...rest} />;
    case 'month':
      return <MonthInput ref={ref} {...rest} />;
    case 'number':
      return <NumberInput ref={ref} {...rest} />;
    case 'password':
      return <PasswordInput ref={ref} {...rest} />;
    case 'search':
      return <SearchInput ref={ref} {...rest} />;
    case 'tel':
      return <TelephoneInput ref={ref} {...rest} />;
    case 'text':
      return <TextInput ref={ref} {...rest} />;
    case 'time':
      return <TimeInput ref={ref} {...rest} />;
    case 'url':
      return <UrlInput ref={ref} {...rest} />;
    case 'week':
      return <WeekInput ref={ref} {...rest} />;
    default:
      return <TextInput ref={ref} {...rest} />;
  }
});

Input.defaultProps = {};

Input.displayName = 'Input';

export { Input };
