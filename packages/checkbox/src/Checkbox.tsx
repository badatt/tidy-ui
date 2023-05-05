import React from 'react';
import { CheckboxRoot, HiddenCheckboxInput, StyledCheckboxInput, TickIcon } from './components';
import { ICheckboxProps } from './types';

/**
 * Checkbox can be used as a good alternative to native HTML
 * checkbox input type, powered by various styles and states
 */
const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const { children, checked, indeterminate, ...rest } = props;

  const isChecked = React.useMemo(() => {
    return [checked, indeterminate].some(Boolean);
  }, [checked, indeterminate]);

  return (
    <CheckboxRoot ref={ref} role="checkbox" {...rest}>
      <HiddenCheckboxInput type="checkbox" {...rest} />
      <StyledCheckboxInput checked={isChecked} {...rest}>
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
