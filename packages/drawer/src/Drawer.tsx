import React from 'react';
import { Icon, useIsMounted, usePortal } from '@tidy-ui/commons';
import { CloseButton, CloseSection, DrawerContent, DrawerRoot } from './components';
import { IDrawerProps } from './types';

/**
 * Drawer can be used for menu section in your app.
 * You can use Drawer to launch a portal
 * emerge from left/right side of the page
 */
const Drawer = React.forwardRef<HTMLDivElement, IDrawerProps>((props, ref) => {
  const { children, isOpen, onClose, ...rest } = props;

  const isMounted = useIsMounted();
  const { Portal } = usePortal();

  const handleClose = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (isMounted()) {
        onClose?.(e);
      }
    },
    [isMounted, onClose],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <DrawerRoot ref={ref} role="navigation" {...rest}>
        <DrawerContent {...rest}>
          <CloseSection {...rest}>
            <CloseButton onClick={handleClose} role="button">
              <Icon ele={<Icon.Close />} />
            </CloseButton>
          </CloseSection>
          {children}
        </DrawerContent>
      </DrawerRoot>
    </Portal>
  );
});

Drawer.defaultProps = {
  anchor: 'left',
};

Drawer.displayName = 'Drawer';

export { Drawer };
