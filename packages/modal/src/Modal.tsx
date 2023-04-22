import React from 'react';
import { useIsMounted, usePortal } from '@tidy-ui/commons';
import { ModalContent, ModalRoot } from './components';
import { IModalProps } from './types';

/**
 * Modal can be used to show a component focused on the screen.
 * For example to show an alert, shades the background and highlights
 * only the component child under Modal
 */
const Modal = React.forwardRef<HTMLDivElement, IModalProps>((props, ref) => {
  const { children, isOpen, onBackdropClick, ...rest } = props;

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
      <ModalRoot ref={ref} role="navigation" onClick={handleClose} {...rest}>
        <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
      </ModalRoot>
    </Portal>
  );
});

Modal.defaultProps = {
  isOpen: false,
};

Modal.displayName = 'Modal';

export { Modal };
