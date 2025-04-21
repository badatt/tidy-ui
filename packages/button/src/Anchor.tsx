import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { AnchorRoot, AnchorWithIcon } from './components';
import { IAnchorProps } from './types';

const Anchor = React.forwardRef<HTMLAnchorElement, IAnchorProps>((props, ref) => {
  const { children, canLaunch, disabled, ...rest } = props;

  if (canLaunch) {
    return (
      <AnchorRoot data-tui-name="Anchor" ref={ref} {...rest} target="_blank" disabled={disabled}>
        <AnchorWithIcon>
          {children}
          <Icon ele={<Icon.Launch />} />
        </AnchorWithIcon>
      </AnchorRoot>
    );
  }

  return (
    <AnchorRoot ref={ref} disabled={disabled} {...rest}>
      {children}
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
