import React from 'react';
import { PanelRoot } from './components';
import { PanelBody } from './PanelBody';
import { PanelContextProvider } from './PanelContextProvider';
import { PanelHeader } from './PanelHeader';
import { IPanelProps } from './types';

/** @internal */
interface PanelComponent extends React.ForwardRefExoticComponent<IPanelProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Body: typeof PanelBody;
  /** @internal */
  Header: typeof PanelHeader;
}

/**
 * Panel can be used to fold data, show only necessary data and can expand whenever needed by the user. Panel brings accordion effect
 */
const Panel = React.forwardRef<HTMLDivElement, IPanelProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <PanelContextProvider {...props}>
      <PanelRoot ref={ref} role="article" {...rest}>
        {children}
      </PanelRoot>
    </PanelContextProvider>
  );
}) as PanelComponent;

Panel.defaultProps = {
  expanded: false,
};

Panel.Body = PanelBody;
Panel.Header = PanelHeader;

export { Panel };
