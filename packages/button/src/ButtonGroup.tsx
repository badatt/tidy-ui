import React, { forwardRef } from 'react';
import { ButtonGroupRoot } from './components';
import { IButtonGroupProps } from './types';

/**
 * ButtonGroup can be use to group several look alike buttons to form a grouped CTAs
 *
 */
const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroupProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ButtonGroupRoot role="button-group" ref={ref} {...rest}>
      {children}
    </ButtonGroupRoot>
  );
});

ButtonGroup.defaultProps = {
  isDisabled: false,
  isStretched: false,
  isUnified: false,
  isVertical: false,
};

export { ButtonGroup };
