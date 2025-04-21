import React from 'react';
import { AlertTitleRoot } from './components';
import { IAlertTitleProps } from './types';

const AlertTitle = React.forwardRef<HTMLDivElement, IAlertTitleProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <AlertTitleRoot data-tui-name="AlertTitle" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </AlertTitleRoot>
  );
});

AlertTitle.defaultProps = {};

AlertTitle.displayName = 'AlertTitle';

export { AlertTitle };
