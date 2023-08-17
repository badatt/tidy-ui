import React from 'react';
import { useHash } from '@tidy-ui/commons';
import { RadioOptionInput, RadioOptionLabel, RadioOptionRoot } from './components';
import { IRadioOptionProps } from './types';

/**
 * Radio option is one such option in a series of options
 * under Radio component
 */
const RadioOption = React.forwardRef<HTMLInputElement, IRadioOptionProps>((props, ref) => {
  const { children, checked, defaultChecked, disabled, ele, girth, onChange, value, name, status, ...rest } = props;
  const hash = useHash(value, { maxLen: 8 });
  return (
    <RadioOptionRoot {...{ disabled, girth }}>
      <RadioOptionInput
        id={`${hash}`}
        ref={ref}
        {...{ checked, defaultChecked, disabled, girth, name, onChange, status, value }}
        role="radio"
        type="radio"
      />
      <RadioOptionLabel htmlFor={hash} {...rest}>
        {ele ? React.cloneElement(ele, {}, children) : children}
      </RadioOptionLabel>
    </RadioOptionRoot>
  );
});

RadioOption.defaultProps = {
  girth: 'md',
};

RadioOption.displayName = 'RadioOption';

export { RadioOption };
