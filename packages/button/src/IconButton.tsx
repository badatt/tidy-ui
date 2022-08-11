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
  const { children, className, withIcon, ...rest } = props;
  return (
    <IconButtonRoot className={className} role="icon-button" ref={ref} {...rest}>
      {children ? (
        <IconButtonIconWrapper {...rest}>
          <IconButtonIcon {...rest}>{withIcon}</IconButtonIcon>
        </IconButtonIconWrapper>
      ) : (
        <IconButtonIconOnlyWrapper {...rest}>
          <IconButtonIcon {...rest}>{withIcon}</IconButtonIcon>
        </IconButtonIconOnlyWrapper>
      )}
      {children && <IconButtonChildWrapper {...rest}>{children}</IconButtonChildWrapper>}
    </IconButtonRoot>
  );
});

IconButton.defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  withColor: 'major',
  withPlacement: 'left',
  withSize: 'md',
  withType: 'primary',
};
export { IconButton };
