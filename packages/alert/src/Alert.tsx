import React from 'react';
import { IAlertProps } from './types';

const Alert = React.forwardRef<HTMLDivElement, IAlertProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div ref={ref} role="alert" {...rest}>
      {children}
    </div>
  );
});

Alert.defaultProps = {};

export { Alert };
