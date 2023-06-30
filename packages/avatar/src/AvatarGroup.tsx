import React from 'react';
import { Avatar } from './Avatar';
import { AvatarGroupRoot } from './components';
import { IAvatarGroupProps } from './types';

const AvatarGroup = React.forwardRef<HTMLDivElement, IAvatarGroupProps>((props, ref) => {
  const { children, max, ...rest } = props;

  /** @internal */
  const calculateCountSize = (count: number) => {
    switch (true) {
      case count > 0 && count < 10:
        return '0.5em';
      case count >= 10 && count < 100:
        return '0.4em';
      case count >= 100 && count < 1000:
        return '0.3em';
      case count >= 1000 && count < 10000:
        return '0.2em';
      default:
        return '0.1em';
    }
  };

  const additionalCount = React.useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    const allowedChildren = childrenArray.slice(0, max);
    return childrenArray.length - allowedChildren.length;
  }, [children]);

  /** @internal */
  const renderCountIcon = React.useCallback(
    () => <span style={{ fontSize: `${calculateCountSize(additionalCount)}` }}>+{additionalCount}</span>,
    [additionalCount],
  );

  const renderChildren = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c: React.ReactNode) => {
      const childrenArray = React.Children.toArray(c);
      const allowedChildren = childrenArray.slice(0, max);
      return React.Children.map(allowedChildren, (c) => {
        const ele = c as React.ReactElement;
        return React.cloneElement(ele, {
          ...ele.props,
          girth: props.girth,
        });
      });
    },
    [children],
  );

  if (max != undefined && max <= 0) {
    return null;
  }

  return (
    <AvatarGroupRoot ref={ref} {...rest}>
      {max && additionalCount !== 0 && <Avatar girth={props.girth} icon={renderCountIcon()} />}
      {renderChildren(children)}
    </AvatarGroupRoot>
  );
});

AvatarGroup.defaultProps = {
  girth: 'md',
};

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
