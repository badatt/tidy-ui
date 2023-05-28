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
  isExpanded: false,
};

Panel.displayName = 'Panel';

Panel.Body = PanelBody;
Panel.Header = PanelHeader;

Panel.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    const allowed = ['PanelBody', 'PanelHeader'];
    const errorMessage = `${componentName} accepts only ${allowed} as children`;
    const childrenNames = React.Children.map(props[propName], (c) => c.type.displayName);
    if (childrenNames.length == 0 || !childrenNames.every((c) => allowed.includes(c))) {
      return new Error(`Invalid nodes. ${errorMessage}`);
    }
    return null;
  },
};

export { Panel };
