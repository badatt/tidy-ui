import React from 'react';
import { ButtonRoot, IconButtonIcon, LoadingIcon } from './components';
import { IButtonProps } from './types';

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, isLoading, disabled, icon, ...rest } = props;

  const isDisabled = React.useMemo(() => {
    return [isLoading, disabled].some(Boolean);
  }, [isLoading, disabled]);

  return (
    <ButtonRoot
      type="button"
      data-tui-name="Button"
      ref={ref}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      icon={icon}
      {...rest}
    >
      {icon ? (
        <IconButtonIcon isIconOnly>{icon}</IconButtonIcon>
      ) : (
        <>
          {isLoading && <LoadingIcon aria-label="Loading" />}
          {children}
        </>
      )}
    </ButtonRoot>
  );
});

Button.defaultProps = {
  girth: 'md',
  isGradient: false,
  isLoading: false,
  isStretched: false,
  isUppercase: false,
  tone: 'neutral',
  variant: 'outlined',
};

Button.displayName = 'Button';

export { Button };
