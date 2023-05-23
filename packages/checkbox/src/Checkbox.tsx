import React from 'react';
import { CheckboxRoot, HiddenCheckboxInput, StyledCheckboxInput, TickIcon } from './components';
import { ICheckboxProps } from './types';

/**
 * Checkbox can be used as a good alternative to native HTML
 * checkbox input type, powered by various styles and states
 */
const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const { children, ele, checked, isIndeterminate, ...rest } = props;
  const { isFilled, girth, status } = rest;

  const isChecked = React.useMemo(() => {
    return [checked, isIndeterminate].some(Boolean);
  }, [checked, isIndeterminate]);

  return (
    <CheckboxRoot ref={ref} role="checkbox" {...rest}>
      <HiddenCheckboxInput type="checkbox" />
      <StyledCheckboxInput checked={isChecked} {...{ girth, isFilled, status }}>
        <TickIcon viewBox="0 0 24 24">
          {isIndeterminate ? <path d="M19 13H5v-2h14v2z" /> : <polyline points="20 6 9 17 4 12" />}
        </TickIcon>
      </StyledCheckboxInput>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </CheckboxRoot>
  );
});

Checkbox.defaultProps = {
  girth: 'md',
  isFilled: false,
  isIndeterminate: false,
  status: 'info',
};

Checkbox.displayName = 'Checkbox';

export { Checkbox };
