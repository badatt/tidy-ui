import React from 'react';
import { useHash } from '@tidy-ui/commons';
import { RadioOptionInput, RadioOptionLabel, RadioOptionRoot } from './components';
import { IRadioOptionProps } from './types';

const RadioOption = React.forwardRef<HTMLInputElement, IRadioOptionProps>((props, ref) => {
  const { children, disabled, sz, value, ...rest } = props;
  const hash = useHash(value, { maxLen: 8 });
  return (
    <RadioOptionRoot sz={sz} disabled={disabled}>
      <RadioOptionInput id={hash} ref={ref} sz={sz} value={value} role="radio" type="radio" {...rest} />
      <RadioOptionLabel htmlFor={hash}>{children}</RadioOptionLabel>
    </RadioOptionRoot>
  );
});

RadioOption.defaultProps = {
  disabled: false,
  sz: 'md',
};

RadioOption.displayName = 'RadioOption';

export { RadioOption };
