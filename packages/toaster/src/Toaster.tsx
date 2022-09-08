import React from 'react';
import { styled, TidyUiContext, usePortal } from '@tidy-ui/commons';
import { IToasterProps } from './types';
import useToaster from './useToaster';

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
  const {
    state: { toasterState },
  } = React.useContext(TidyUiContext);
  const { Portal } = usePortal();
  const { toaster } = useToaster();

  /**
   * Close toast
   *
   * @param {string} id toast id
   */
  const closeToast = (id?: string) => {
    if (typeof timeout === 'number') {
      setTimeout(() => {
        toaster.remove(id);
      }, timeout);
    }
  };

  return (
    <Portal>
      <ToasterRoot role="toaster">
        {toasterState.toasts?.map((v, i) => {
          closeToast(v.id);
          return (
            <ToastItem key={i} onClick={() => toaster.remove(v.id)}>
              {v.item}
            </ToastItem>
          );
        })}
      </ToasterRoot>
    </Portal>
  );
};

Toaster.defaultProps = {
  timeout: 5000,
};

export { Toaster };
