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
  const { children, canLaunch, ...rest } = props;
  return (
    <AnchorRoot role="link" ref={ref} {...rest} target={canLaunch ? '_blank' : '_top'}>
      {children}
      {canLaunch && <Icon ele={<Icon.Launch />} />}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  canLaunch: false,
  disabled: false,
  size: 'md',
  tone: 'neutral',
};

Anchor.displayName = 'Anchor';

export { Anchor };
