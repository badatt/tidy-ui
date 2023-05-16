import React from 'react';
import { usePortal } from '@tidy-ui/commons';
import ToasterProvider from './provider/ToasterProvider';
import { ToasterContainer } from './ToasterContainer';
import { IToasterProps } from './types';

/**
 * Toaster
 *
 * @param {IToasterProps} props toaster props
 * @returns {React.FC} react component
 */
const Toaster: React.FC<IToasterProps> = (props: React.PropsWithChildren<IToasterProps>) => {
  const { children, ...rest } = props;
  const { Portal } = usePortal();

  return (
    <ToasterProvider>
      {children}
      <Portal>
        <ToasterContainer {...rest} />
      </Portal>
    </ToasterProvider>
  );
};

Toaster.defaultProps = {
  timeout: 5000,
};

export { Toaster };
