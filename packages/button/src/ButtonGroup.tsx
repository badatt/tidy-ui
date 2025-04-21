import React from 'react';
import { ButtonGroupRoot } from './components';
import { IButtonGroupProps } from './types';

const ButtonGroup = React.forwardRef<HTMLDivElement, IButtonGroupProps>((props, ref) => {
  const { children, disabled, ...rest } = props;
  return (
    <ButtonGroupRoot data-tui-name="ButtonGroup" ref={ref} {...rest}>
      {React.Children.map(children, (c) => {
        const child = c as React.ReactElement;
        return React.cloneElement(child, { disabled });
      })}
    </ButtonGroupRoot>
  );
});

ButtonGroup.defaultProps = {
  isStretched: false,
  isUnified: false,
  isVertical: false,
};

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
