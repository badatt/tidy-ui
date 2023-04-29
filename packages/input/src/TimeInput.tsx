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
  &::-webkit-datetime-edit-hour-field {
    color: ${hsla(color.slate[500])};
  }
  &::-webkit-datetime-edit-minute-field {
    color: ${hsla(color.slate[500])};
  }
`;

const TimeInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  return (
    <InputGroup blend {...rest}>
      <StyledTextInput ref={ref} type="time" {...rest} />
      <InputElement node={<Icon ele={<Icon.Time isOutlined />} />} />
    </InputGroup>
  );
});

TimeInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

TimeInput.displayName = 'TimeInput';

export { TimeInput };
