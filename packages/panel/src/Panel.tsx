import React, { forwardRef } from 'react';
import { PanelRoot } from './components';
import { PanelContextProvider } from './PanelContextProvider';
import { IPanelProps } from './types';

const Panel = forwardRef<HTMLDivElement, IPanelProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <PanelContextProvider {...props}>
      <PanelRoot ref={ref} role="article" {...rest}>
        {children}
      </PanelRoot>
    </PanelContextProvider>
  );
});

Panel.defaultProps = {
  expanded: false,
};

export { Panel };
