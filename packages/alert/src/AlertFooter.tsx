import React from 'react';
import { AlertFooterRoot } from './components';
import { IAlertFooterProps } from './types';

/**
 * AlertFooter component, powered by various styles (with theming) and settings
 *
 */
const AlertFooter = React.forwardRef<HTMLDivElement, IAlertFooterProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <AlertFooterRoot role="presentation" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </AlertFooterRoot>
  );
});

AlertFooter.defaultProps = {};

AlertFooter.displayName = 'AlertFooter';

export { AlertFooter };
