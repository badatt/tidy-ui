import React, { forwardRef } from 'react';
import { AnchorIcon, AnchorRoot } from './components';
import { IAnchorProps } from './types';

/**
 * Anchor component is used to represent hyperlinks on a page, a good substitute for default
 * html `a` tag
 *
 */
const Anchor = forwardRef<HTMLAnchorElement, IAnchorProps>((props, ref) => {
  const { children, isLaunch, ...rest } = props;
  return (
    <AnchorRoot role="anchor" ref={ref} {...rest} target={isLaunch ? '_blank' : '_top'}>
      {children}
      {isLaunch && <AnchorIcon />}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  isDisabled: false,
  isLaunch: false,
};

export { Anchor };
