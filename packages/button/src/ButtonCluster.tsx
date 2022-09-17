import React from 'react';
import { ButtonClusterRoot } from './components';
import { IButtonClusterProps } from './types';

/**
 * ButtonCluster can group several Buttons & ButtonGroups to bring in that
 * toolbar effect, that you usually see in embedded editors
 *
 */
const ButtonCluster = React.forwardRef<HTMLDivElement, IButtonClusterProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ButtonClusterRoot role="button" ref={ref} {...rest}>
      {children}
    </ButtonClusterRoot>
  );
});

ButtonCluster.defaultProps = {
  disabled: false,
  stretched: false,
};

ButtonCluster.displayName = 'ButtonCluster';

export { ButtonCluster };
