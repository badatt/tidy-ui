import React, { forwardRef, HTMLAttributes } from 'react';
import { CardBodyRoot } from './components';

/**
 * Card body component, powered by various styles (with theming) and settings
 *
 */
const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <CardBodyRoot role="card-body" ref={ref} {...rest}>
      {children}
    </CardBodyRoot>
  );
});

export { CardBody };
