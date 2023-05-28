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

PanelGroup.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    const allowed = ['Panel'];
    const errorMessage = `${componentName} accepts only ${allowed} as children`;
    const childrenNames = React.Children.map(props[propName], (c) => c.type.displayName);
    if (childrenNames.length == 0 || !childrenNames.every((c) => allowed.includes(c))) {
      return new Error(`Invalid nodes. ${errorMessage}`);
    }
    return null;
  },
};

export { PanelGroup };
