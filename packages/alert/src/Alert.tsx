import React from 'react';
import { TonedIcon } from '@tidy-ui/commons';
import { AlertFooter } from './AlertFooter';
import { AlertTitle } from './AlertTitle';
import { AlertContent, AlertIcon, AlertRoot } from './components';
import { IAlertProps } from './types';

/** @internal */
interface AlertComponent extends React.ForwardRefExoticComponent<IAlertProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Footer: typeof AlertFooter;
  /** @internal */
  Title: typeof AlertTitle;
}

/**
 * Alert can be used to throw any alerts in the application.
 * You can have both actionable alerts as well as just notification
 * purpose based alerts
 */
const Alert = React.forwardRef<HTMLDivElement, IAlertProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  const { isFilled, status } = rest;
  const nodes = ele ? React.cloneElement(ele, {}, children) : children;
  return (
    <AlertRoot role="alert" ref={ref} {...rest}>
      <AlertIcon {...{ isFilled, status }}>
        <TonedIcon status={rest.status} />
      </AlertIcon>
      <AlertContent>{nodes}</AlertContent>
    </AlertRoot>
  );
}) as AlertComponent;

Alert.defaultProps = {
  isFilled: false,
  isSharp: true,
  status: 'info',
};

Alert.displayName = 'Alert';

Alert.Footer = AlertFooter;
Alert.Title = AlertTitle;

export { Alert };
