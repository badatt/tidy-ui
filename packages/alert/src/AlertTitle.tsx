import React from 'react';
import { AlertTitleRoot } from './components';
import { IAlertTitleProps } from './types';

/**
 * AlertFooter component, powered by various styles (with theming) and settings
 *
 */
const AlertTitle = React.forwardRef<HTMLDivElement, IAlertTitleProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <AlertTitleRoot role="heading" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </AlertTitleRoot>
  );
});

AlertTitle.defaultProps = {};

AlertTitle.displayName = 'AlertTitle';

export { AlertTitle };
