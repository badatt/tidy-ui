import React, { forwardRef } from 'react';
import { AnchorIcon, AnchorRoot } from './components';
import { IAnchorProps } from './types';

/**
 * Anchor component is used to represent hyperlinks on a page, a good substitute for default
 * html `a` tag
 *
 */
const Anchor = forwardRef<HTMLAnchorElement, IAnchorProps>((props, ref) => {
  const { children, launch, ...rest } = props;
  return (
    <AnchorRoot role="link" ref={ref} {...rest} target={launch ? '_blank' : '_top'}>
      {children}
      {launch && <AnchorIcon />}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  disabled: false,
  launch: false,
};

export { Anchor };
