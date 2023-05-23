import React from 'react';
import { ContainerRoot } from './components';
import { IContainerProps } from './types';

/**
 * Container is a wrapped div element that can responsively contain enclosed elements.
 * This can be usually used as page root component
 */
const Container = React.forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <ContainerRoot ref={ref} role="main" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </ContainerRoot>
  );
});

Container.defaultProps = {
  gutter: '1.5rem',
  height: '100%',
  isFixed: false,
};

Container.displayName = 'Container';

export { Container };
