import React from 'react';
import { ButtonClusterRoot } from './components';
import { IButtonClusterProps } from './types';

/**
 * ButtonCluster can group several Buttons & ButtonGroups to bring in that
 * toolbar effect, that you usually see in embedded editors
 *
 */
const ButtonCluster = React.forwardRef<HTMLDivElement, IButtonClusterProps>((props, ref) => {
  const { children, disabled, ...rest } = props;
  return (
    <ButtonClusterRoot role="button" ref={ref} {...rest}>
      {React.Children.map(children, (c) => {
        const child = c as React.ReactElement;
        return React.cloneElement(child, { disabled });
      })}
    </ButtonClusterRoot>
  );
});

ButtonCluster.defaultProps = {
  disabled: false,
  isStretched: false,
};

ButtonCluster.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    const allowed = ['Anchor', 'Button', 'ButtonGroup', 'IconButton'];
    const errorMessage = `${componentName} accepts only ${allowed} as children`;
    const childrenNames = React.Children.map(props[propName], (c) => c.type.displayName);
    if (childrenNames.length == 0 || !childrenNames.every((c) => allowed.includes(c))) {
      return new Error(`Invalid nodes. ${errorMessage}`);
    }
    return null;
  },
};

ButtonCluster.displayName = 'ButtonCluster';

export { ButtonCluster };
