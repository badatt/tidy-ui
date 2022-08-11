import React, { forwardRef } from 'react';
import { PanelRoot } from './components';
import { PanelContextProvider } from './PanelContextProvider';
import { IPanelProps } from './types';

const Panel = forwardRef<HTMLDivElement, IPanelProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <PanelContextProvider {...props}>
      <PanelRoot className={className} ref={ref} role="panel" {...rest}>
        {children}
      </PanelRoot>
    </PanelContextProvider>
  );
});

Panel.defaultProps = {
  isExpanded: false,
};

export { Panel };
