import React from 'react';
import { SelectRoot } from './components';
import { ISelectProps } from './types';

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <SelectRoot ref={ref} role="select" {...rest}>
      {children}
    </SelectRoot>
  );
});

Select.defaultProps = {
  girth: 'md',
};

Select.displayName = 'Select';

export { Select };
