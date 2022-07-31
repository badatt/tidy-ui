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
  const { children, withIcon } = props;
  return (
    <IconButtonRoot role="icon-button" ref={ref} {...props}>
      {children ? (
        <IconButtonIconWrapper {...props}>
          <IconButtonIcon {...props}>{withIcon}</IconButtonIcon>
        </IconButtonIconWrapper>
      ) : (
        <IconButtonIconOnlyWrapper {...props}>
          <IconButtonIcon {...props}>{withIcon}</IconButtonIcon>
        </IconButtonIconOnlyWrapper>
      )}
      {children && <IconButtonChildWrapper {...props}>{children}</IconButtonChildWrapper>}
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
