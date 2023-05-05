import React from 'react';
import { CheckboxRoot, HiddenCheckboxInput, StyledCheckboxInput, TickIcon } from './components';
import { ICheckboxProps } from './types';

const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const { children, checked, indeterminate, ...rest } = props;
  return (
    <CheckboxRoot ref={ref} role="checkbox" {...rest}>
      <HiddenCheckboxInput type="checkbox" {...rest} />
      <StyledCheckboxInput checked={checked || indeterminate} {...rest}>
        <TickIcon viewBox="0 0 24 24">
          {indeterminate ? <path d="M19 13H5v-2h14v2z" /> : <polyline points="20 6 9 17 4 12" />}
        </TickIcon>
      </StyledCheckboxInput>
      {children}
    </CheckboxRoot>
  );
});

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  filled: false,
  indeterminate: false,
  status: 'info',
  sz: 'md',
};

export { Checkbox };
