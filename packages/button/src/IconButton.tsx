import React, { forwardRef } from 'react';
import {
  IconButtonChildWrapper,
  IconButtonIcon,
  IconButtonIconOnlyWrapper,
  IconButtonIconWrapper,
  IconButtonRoot,
} from './components';
import { IIconButtonProps } from './types';

/**
 * IconButton can be used to represent a Button with Icon and its related text embedded inside.
 *
 */
const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>((props, ref) => {
  const { children, className, icon, ...rest } = props;
  return (
    <IconButtonRoot className={className} role="button" ref={ref} {...rest}>
      {children ? (
        <IconButtonIconWrapper {...rest}>
          <IconButtonIcon {...rest}>{icon}</IconButtonIcon>
        </IconButtonIconWrapper>
      ) : (
        <IconButtonIconOnlyWrapper {...rest}>
          <IconButtonIcon {...rest}>{icon}</IconButtonIcon>
        </IconButtonIconOnlyWrapper>
      )}
      {children && <IconButtonChildWrapper {...rest}>{children}</IconButtonChildWrapper>}
    </IconButtonRoot>
  );
});

IconButton.defaultProps = {
  disabled: false,
  iconOnly: false,
  placement: 'left',
  size: 'md',
  tone: 'major',
  variant: 'primary',
};
export { IconButton };
