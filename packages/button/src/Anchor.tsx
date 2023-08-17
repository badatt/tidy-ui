import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { AnchorRoot } from './components';
import { IAnchorProps } from './types';

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
  girth: 'md',
  tone: 'neutral',
};

Anchor.displayName = 'Anchor';

export { Anchor };
