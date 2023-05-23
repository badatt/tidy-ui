import React from 'react';
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
const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>((props, ref) => {
  const { children, icon, ...rest } = props;
  return (
    <IconButtonRoot role="button" ref={ref} {...rest}>
      {children ? (
        <IconButtonIconWrapper>
          <IconButtonIcon isIconOnly={rest.isIconOnly}>{icon}</IconButtonIcon>
        </IconButtonIconWrapper>
      ) : (
        <IconButtonIconOnlyWrapper isIconOnly={rest.isIconOnly}>
          <IconButtonIcon isIconOnly={rest.isIconOnly}>{icon}</IconButtonIcon>
        </IconButtonIconOnlyWrapper>
      )}
      {children && <IconButtonChildWrapper placement={rest.placement}>{children}</IconButtonChildWrapper>}
    </IconButtonRoot>
  );
});

IconButton.defaultProps = {
  girth: 'md',
  isIconOnly: false,
  placement: 'left',
  tone: 'neutral',
  variant: 'outlined',
};

IconButton.displayName = 'IconButton';

export { IconButton };
