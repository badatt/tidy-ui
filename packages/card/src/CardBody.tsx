import React, { forwardRef } from 'react';
import { CardBodyRoot } from './components';

/**
 * Card body component, powered by various styles (with theming) and settings
 *
 */
const CardBody = forwardRef<HTMLDivElement>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <CardBodyRoot ref={ref} {...rest}>
      {children}
    </CardBodyRoot>
  );
});

export { CardBody };
