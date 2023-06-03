import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { AvatarBadge } from './AvatarBadge';
import { AvatarGroup } from './AvatarGroup';
import { AvatarIcon, AvatarImage, AvatarName, AvatarRoot, AvatarWrap } from './components';
import { IAvatarProps } from './types';

/** @internal */
interface AvatarComponent extends React.ForwardRefExoticComponent<IAvatarProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Badge: typeof AvatarBadge;
  /** @internal */
  Group: typeof AvatarGroup;
}

const Avatar = React.forwardRef<HTMLDivElement, IAvatarProps>((props, ref) => {
  const { children, ...rest } = props;
  const { icon, girth, name, src } = rest;

  const renderChildren = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c: React.ReactNode) => {
      const childrenArray = React.Children.toArray(c);
      return React.Children.map(childrenArray, (c) => {
        const ele = c as React.ReactElement;
        return React.cloneElement(ele, {
          ...ele.props,
          girth: props.girth,
        });
      });
    },
    [children],
  );

  if (src) {
    return (
      <AvatarRoot ref={ref} role="avatar" {...rest}>
        <AvatarWrap>
          <AvatarImage {...{ girth, src }} />
          {renderChildren(children)}
        </AvatarWrap>
      </AvatarRoot>
    );
  } else {
    return (
      <AvatarRoot ref={ref} role="avatar" {...rest}>
        <AvatarWrap>
          {name ? <AvatarName {...{ girth, name }} /> : <AvatarIcon {...{ girth }}>{icon}</AvatarIcon>}
          {renderChildren(children)}
        </AvatarWrap>
      </AvatarRoot>
    );
  }
}) as AvatarComponent;

Avatar.defaultProps = {
  girth: 'md',
  icon: <Icon.Person />,
};

Avatar.displayName = 'Avatar';

Avatar.Badge = AvatarBadge;
Avatar.Group = AvatarGroup;

export { Avatar };
