import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { AnchorRoot } from './components';
import { IAnchorProps } from './types';

/**
 * Anchor component is used to represent hyperlinks on a page, a good substitute for default
 * html `a` tag
 *
 */
const Anchor = React.forwardRef<HTMLAnchorElement, IAnchorProps>((props, ref) => {
  const { children, launch, ...rest } = props;
  return (
    <AnchorRoot role="link" ref={ref} {...rest} target={launch ? '_blank' : '_top'}>
      {children}
      {launch && <Icon ele={<Icon.Launch />} />}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  disabled: false,
  launch: false,
};

Anchor.displayName = 'Anchor';

export { Anchor };
