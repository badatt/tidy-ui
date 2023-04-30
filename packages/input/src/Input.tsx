import React from 'react';
import { DateInput } from './DateInput';
import { DateTimeInput } from './DateTimeInput';
import { EmailInput } from './EmailInput';
import { InputElement } from './InputElement';
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

/** @internal */
interface InputComponent
  extends React.ForwardRefExoticComponent<Omit<ITextInputProps, 'children'> & React.RefAttributes<HTMLInputElement>> {
  /** @internal */
  Date: typeof DateInput;
  /** @internal */
  DateTime: typeof DateTimeInput;
  /** @internal */
  Element: typeof InputElement;
  /** @internal */
  Email: typeof EmailInput;
  /** @internal */
  Month: typeof MonthInput;
  /** @internal */
  Number: typeof NumberInput;
  /** @internal */
  Password: typeof PasswordInput;
  /** @internal */
  Search: typeof SearchInput;
  /** @internal */
  Telephone: typeof TelephoneInput;
  /** @internal */
  Text: typeof TextInput;
  /** @internal */
  Time: typeof TimeInput;
  /** @internal */
  Url: typeof UrlInput;
  /** @internal */
  Week: typeof WeekInput;
}

/**
 * Input component can be used in forms, a good replacement for
 * native HTML input tag, powered by many styles and theme support
 */
const Input = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return <TextInput ref={ref} {...rest} />;
}) as InputComponent;

Input.defaultProps = {};

Input.displayName = 'Input';

Input.Date = DateInput;
Input.DateTime = DateTimeInput;
Input.Element = InputElement;
Input.Email = EmailInput;
Input.Month = MonthInput;
Input.Number = NumberInput;
Input.Password = PasswordInput;
Input.Search = SearchInput;
Input.Telephone = TelephoneInput;
Input.Text = TextInput;
Input.Time = TimeInput;
Input.Url = UrlInput;
Input.Week = WeekInput;

export { Input };
