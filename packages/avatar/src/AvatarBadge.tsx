import React from 'react';
import { AvatarBadgeRoot } from './components';
import { IAvatarBadgeProps } from './types';

const AvatarBadge = React.forwardRef<HTMLDivElement, IAvatarBadgeProps>((props, ref) => {
  return <AvatarBadgeRoot ref={ref} {...props} />;
});

AvatarBadge.defaultProps = {};

AvatarBadge.displayName = 'AvatarBadge';

export { AvatarBadge };
