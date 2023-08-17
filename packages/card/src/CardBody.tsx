import React from 'react';
import { CardBodyRoot } from './components';
import { ICardBodyProps } from './types';

const CardBody = React.forwardRef<HTMLDivElement, ICardBodyProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <CardBodyRoot role="presentation" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </CardBodyRoot>
  );
});

CardBody.displayName = 'CardBody';

export { CardBody };
