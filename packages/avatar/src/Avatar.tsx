import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { AvatarIcon, AvatarImage, AvatarName, AvatarRoot } from './components';
import { IAvatarProps } from './types';

const Avatar = React.forwardRef<HTMLDivElement, IAvatarProps>((props, ref) => {
  const { children, icon, name, src, ...rest } = props;

  return (
    <AvatarRoot ref={ref} role="avatar" {...rest}>
      {src && <AvatarImage src={src} />}
      {name ? <AvatarName {...{ name }} /> : <AvatarIcon>{icon}</AvatarIcon>}
      {children}
    </AvatarRoot>
  );
});

Avatar.defaultProps = {
  girth: 'md',
  icon: <Icon.Person />,
};

Avatar.displayName = 'Avatar';

export { Avatar };
