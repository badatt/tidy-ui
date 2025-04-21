import React from 'react';
import { ButtonClusterRoot } from './components';
import { IButtonClusterProps } from './types';

const ButtonCluster = React.forwardRef<HTMLDivElement, IButtonClusterProps>((props, ref) => {
  const { children, disabled, ...rest } = props;
  return (
    <ButtonClusterRoot data-tui-name="ButtonCluster" ref={ref} {...rest}>
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

ButtonCluster.displayName = 'ButtonCluster';

export { ButtonCluster };
