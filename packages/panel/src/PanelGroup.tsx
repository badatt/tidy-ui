import React from 'react';
import { PanelGroupRoot } from './components';
import { IPanelGroupProps } from './types';

const PanelGroup = React.forwardRef<HTMLDivElement, IPanelGroupProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <PanelGroupRoot role="article" ref={ref} {...rest}>
      {children}
    </PanelGroupRoot>
  );
});

PanelGroup.defaultProps = {
  hasSeparator: false,
};

PanelGroup.displayName = 'PanelGroup';

export { PanelGroup };
