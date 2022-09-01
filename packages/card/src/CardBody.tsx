import React from 'react';
import { CardBodyRoot } from './components';

/**
 * Card body component, powered by various styles (with theming) and settings
 *
 */
const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <CardBodyRoot role="presentation" ref={ref} {...rest}>
      {children}
    </CardBodyRoot>
  );
});

export { CardBody };
