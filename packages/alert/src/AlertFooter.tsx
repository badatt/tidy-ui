import React from 'react';
import { AlertFooterRoot } from './components';
import { IAlertFooterProps } from './types';

const AlertFooter = React.forwardRef<HTMLDivElement, IAlertFooterProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <AlertFooterRoot ata-tui-name="AlertFooter" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </AlertFooterRoot>
  );
});

AlertFooter.defaultProps = {};

AlertFooter.displayName = 'AlertFooter';

export { AlertFooter };
