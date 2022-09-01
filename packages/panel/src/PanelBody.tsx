import React from 'react';
import { PanelBodyRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelBodyProps, IPanelContext } from './types';

const PanelBody = React.forwardRef<HTMLDivElement, IPanelBodyProps>((props, ref) => {
  const { children, ...rest } = props;
  const { expanded } = React.useContext(PanelContext) as IPanelContext;
  return (
    <PanelBodyRoot ref={ref} role="presentation" {...rest} visible={expanded}>
      {children}
    </PanelBodyRoot>
  );
});

PanelBody.defaultProps = {
  visible: false,
};

export { PanelBody };
