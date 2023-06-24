import React from 'react';
import { OptionRoot } from './components';
import { IOptionProps } from './types';

const Option = React.forwardRef<HTMLOptionElement, IOptionProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <OptionRoot ref={ref} role="option" {...rest}>
      {children}
    </OptionRoot>
  );
});

Option.defaultProps = {};

Option.displayName = 'Option';

export { Option };
