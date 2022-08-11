import React, { forwardRef } from 'react';
import { ButtonToolbarRoot } from './components';
import { IButtonToolbarProps } from './types';

/**
 * ButtonToolbar can group several Buttons & ButtonGroups to bring in that
 * toolbar effect, that you usually see in embedded editors
 *
 */
const ButtonToolbar = forwardRef<HTMLDivElement, IButtonToolbarProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <ButtonToolbarRoot className={className} role="button-toolbar" ref={ref} {...rest}>
      {children}
    </ButtonToolbarRoot>
  );
});

ButtonToolbar.defaultProps = {
  isDisabled: false,
};

export { ButtonToolbar };
