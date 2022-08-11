import React, { forwardRef } from 'react';
import { ButtonIcon, ButtonRoot } from './components';
import { IButtonProps } from './types';

/**
 * Button component can be used to represent CTAs in your pages, can be a good replacement
 * for default html `button`, powered by various styles (with theming) and settings
 *
 */
const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, className, isLoading, isDisabled, ...rest } = props;
  return (
    <ButtonRoot className={className} role="button" ref={ref} {...rest} isDisabled={isDisabled || isLoading}>
      {isLoading && <ButtonIcon />}
      {children}
    </ButtonRoot>
  );
});

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
  isStretched: false,
  isUppercase: false,
  withColor: 'major',
  withSize: 'md',
  withType: 'basic',
};

export { Button };
