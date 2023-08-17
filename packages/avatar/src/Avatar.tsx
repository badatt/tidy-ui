import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { AvatarFrame, AvatarIcon, AvatarImage, AvatarName, AvatarRoot, AvatarWrap } from './components';
import { IAvatarProps } from './types';

const Avatar = React.forwardRef<HTMLDivElement, IAvatarProps>((props, ref) => {
  const { children, ...rest } = props;
  const { icon, girth, name, src } = rest;
  const [isLoaded, setLoaded] = React.useState(false);

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
          {isLoaded ? null : <AvatarFrame {...{ girth }} />}
          <AvatarImage
            role="img"
            {...{ girth, src }}
            style={isLoaded ? {} : { display: 'none' }}
            onLoad={() => setLoaded(true)}
          />
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
});

Avatar.defaultProps = {
  girth: 'md',
  icon: <Icon.Person />,
};

Avatar.displayName = 'Avatar';

export { Avatar };
