import React from 'react';
import { ContainerRoot } from './components';
import { IContainerProps } from './types';

const Container = React.forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <ContainerRoot data-tui-name="Container" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </ContainerRoot>
  );
});

Container.defaultProps = {
  gutter: '1.5rem',
  isFixed: false,
};

Container.displayName = 'Container';

export { Container };
