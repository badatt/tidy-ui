import React from 'react';
import { ButtonRoot, IconButtonIcon, IconButtonIconOnlyWrapper, LoadingIcon } from './components';
import { IButtonProps } from './types';

/**
 * Button component can be used to represent CTAs in your pages, can be a good replacement
 * for default html `button`, powered by various styles (with theming) and settings
 *
 */
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, loading, disabled, icon, ...rest } = props;

  const isDisabled = React.useMemo(() => {
    return [loading, disabled].some(Boolean);
  }, [loading, disabled]);

  return (
    <ButtonRoot role="button" ref={ref} disabled={isDisabled} icon={icon} {...rest}>
      {icon ? (
        <IconButtonIconOnlyWrapper {...rest}>
          <IconButtonIcon iconOnly>{icon}</IconButtonIcon>
        </IconButtonIconOnlyWrapper>
      ) : (
        <>
          {loading && <LoadingIcon />}
          {children}
        </>
      )}
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
  uppercase: false,
  variant: 'outlined',
};

Button.displayName = 'Button';

export { Button };
