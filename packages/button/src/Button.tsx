import React, { forwardRef } from 'react';
import { ButtonIcon, ButtonRoot } from './components';
import { IButtonProps } from './types';

/**
 * Button component can be used to represent CTAs in your pages, can be a good replacement
 * for default html `button`, powered by various styles (with theming) and settings
 *
 */
const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, loading, disabled, ...rest } = props;
  return (
    <ButtonRoot role="button" ref={ref} {...rest} disabled={disabled || loading}>
      {loading && <ButtonIcon />}
      {children}
    </ButtonRoot>
  );
});

Button.defaultProps = {
  disabled: false,
  gradient: false,
  loading: false,
  size: 'md',
  stretched: false,
  tone: 'major',
  uc: false,
  variant: 'primary',
};

export { Button };
