import React from 'react';
import { CheckboxAsSwitch, SwitchRoot } from './components';
import { ISwitchProps } from './types';

const Switch = React.forwardRef<HTMLInputElement, ISwitchProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  const { checked, girth, onChange, status } = props;
  return (
    <SwitchRoot ref={ref} role="switch" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
      <CheckboxAsSwitch type="checkbox" {...{ checked, girth, onChange, status }} />
    </SwitchRoot>
  );
});

Switch.defaultProps = {
  girth: 'md',
  status: 'info',
};

Switch.displayName = 'Switch';

export { Switch };
