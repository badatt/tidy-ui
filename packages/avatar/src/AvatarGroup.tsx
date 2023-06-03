import React from 'react';
import { AvatarGroupRoot } from './components';
import { IAvatarGroupProps } from './types';

const AvatarGroup = React.forwardRef<HTMLDivElement, IAvatarGroupProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <AvatarGroupRoot ref={ref} {...rest}>
      {children}
    </AvatarGroupRoot>
  );
});

AvatarGroup.defaultProps = {};

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
