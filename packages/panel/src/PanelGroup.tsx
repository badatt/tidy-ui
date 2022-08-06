import React, { forwardRef } from 'react';
import { PanelGroupRoot } from './components';
import { IPanelGroupProps } from './types';

const PanelGroup = forwardRef<HTMLDivElement, IPanelGroupProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <PanelGroupRoot role="panel-group" ref={ref} {...rest}>
      {children}
    </PanelGroupRoot>
  );
});

PanelGroup.defaultProps = {};

export { PanelGroup };
