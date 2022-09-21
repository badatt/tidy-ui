import React from 'react';
import { BreadcrumbItemRoot } from './components';
import { IBreadcrumbItemProps } from './types';

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, IBreadcrumbItemProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <BreadcrumbItemRoot ref={ref} role="link" {...rest}>
      {children}
    </BreadcrumbItemRoot>
  );
});

BreadcrumbItem.defaultProps = {};

export { BreadcrumbItem };
