import React from 'react';
import { BreadcrumbItemRoot } from './components';
import { IBreadcrumbItemProps } from './types';

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, IBreadcrumbItemProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <BreadcrumbItemRoot ref={ref} role="link" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </BreadcrumbItemRoot>
  );
});

BreadcrumbItem.defaultProps = {
  isActive: false,
  tone: 'neutral',
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export { BreadcrumbItem };
