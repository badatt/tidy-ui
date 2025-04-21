import React from 'react';
import { TonedIcon } from '@tidy-ui/commons';
import { AlertIcon, AlertRoot } from './components';
import { IAlertProps } from './types';

const Alert = React.forwardRef<HTMLDivElement, IAlertProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  const { isFilled, status } = rest;
  return (
    <AlertRoot data-tui-name="Alert" role="alert" aria-live="polite" ref={ref} {...rest}>
      <AlertIcon {...{ isFilled, status }}>
        <TonedIcon status={rest.status} />
      </AlertIcon>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </AlertRoot>
  );
});

Alert.defaultProps = {
  isFilled: false,
  isSharp: false,
  status: 'info',
};

Alert.displayName = 'Alert';

export { Alert };
