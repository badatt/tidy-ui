import React from 'react';
import { styled, usePortal } from '@tidy-ui/commons';
import { IToast, IToasterProps } from './types';

const ToasterRoot = styled.div`
  position: absolute;
  display: block;
  bottom: 8px;
`;

const ToastItem = styled.div`
  margin: 0.5rem 1rem;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
`;

/**
 * Toaster
 *
 * @param {IToasterProps} props toaster props
 * @returns {React.FC} react component
 */
const Toaster: React.FC<IToasterProps> = (props: IToasterProps) => {
  const { timeout } = props;
  const [toasts, setToasts] = React.useState<IToast[]>([]);
  const { Portal } = usePortal();

  return (
    <Portal>
      <ToasterRoot role="toaster">
        {toasts?.map((v, i) => {
          return <ToastItem key={i}>{v.item}</ToastItem>;
        })}
      </ToasterRoot>
    </Portal>
  );
};

Toaster.defaultProps = {
  timeout: 5000,
};

export { Toaster };
