import React from 'react';
import { PanelBodyRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelBodyProps, IPanelContext } from './types';

const PanelBody = React.forwardRef<HTMLDivElement, IPanelBodyProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  const { isExpanded } = React.useContext(PanelContext) as IPanelContext;
  return (
    <PanelBodyRoot ref={ref} role="presentation" {...rest} isVisible={isExpanded}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </PanelBodyRoot>
  );
});

PanelBody.defaultProps = {
  isVisible: false,
};

PanelBody.displayName = 'PanelBody';

export { PanelBody };
