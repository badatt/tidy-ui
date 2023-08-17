import React from 'react';
import { ButtonRoot, IconButtonIcon, IconButtonIconOnlyWrapper, LoadingIcon } from './components';
import { IButtonProps } from './types';

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, isLoading, disabled, icon, ...rest } = props;

  const isDisabled = React.useMemo(() => {
    return [isLoading, disabled].some(Boolean);
  }, [isLoading, disabled]);

  return (
    <ButtonRoot role="button" ref={ref} disabled={isDisabled} icon={icon} {...rest}>
      {icon ? (
        <IconButtonIconOnlyWrapper>
          <IconButtonIcon isIconOnly>{icon}</IconButtonIcon>
        </IconButtonIconOnlyWrapper>
      ) : (
        <>
          {isLoading && <LoadingIcon />}
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
