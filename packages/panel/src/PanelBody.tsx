import React, { forwardRef, useContext } from 'react';
import { PanelBodyRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelBodyProps, IPanelContext } from './types';

const PanelBody = forwardRef<HTMLDivElement, IPanelBodyProps>((props, ref) => {
  const { children, ...rest } = props;
  const { isExpanded } = useContext(PanelContext) as IPanelContext;
  return (
    <PanelBodyRoot ref={ref} role="panel-body" {...rest} isVisible={isExpanded}>
      {children}
    </PanelBodyRoot>
  );
});

PanelBody.defaultProps = {
  isVisible: false,
};

export { PanelBody };
