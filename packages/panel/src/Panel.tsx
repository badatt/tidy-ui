import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { PanelRoot } from './components';
import { PanelBody } from './PanelBody';
import { PanelContextProvider } from './PanelContextProvider';
import { PanelHeader } from './PanelHeader';
import { IPanelProps } from './types';

/** @internal */
interface PanelComponent extends ForwardRefExoticComponent<IPanelProps & RefAttributes<HTMLDivElement>> {
  /** @internal */
  Body: typeof PanelBody;
  /** @internal */
  Header: typeof PanelHeader;
}

const Panel = forwardRef<HTMLDivElement, IPanelProps>((props, ref) => {
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
