import React from 'react';
import { useIsMounted, usePortal } from '@tidy-ui/commons';
import { ModalContent, ModalRoot } from './components';
import { IModalProps } from './types';

const Modal = React.forwardRef<HTMLDivElement, IModalProps>((props, ref) => {
  const { children, className, isOpen, onBackdropClick, ...rest } = props;

  const isMounted = useIsMounted();
  const { Portal } = usePortal();

  const handleClose = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (isMounted()) {
        onBackdropClick?.(e);
      }
    },
    [isMounted, onBackdropClick],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <ModalRoot className={className} ref={ref} role="modal" onClick={handleClose} {...rest}>
        <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
      </ModalRoot>
    </Portal>
  );
});

Modal.defaultProps = {};

export { Modal };
