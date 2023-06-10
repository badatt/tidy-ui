import React from 'react';
import { Icon, useIsMounted, usePortal } from '@tidy-ui/commons';
import { CloseButton, DrawerContent, DrawerRoot } from './components';
import { IDrawerProps } from './types';

/**
 * Drawer can be used for menu section in your app.
 * You can use Drawer to launch a portal
 * emerge from left/right side of the page
 */
const Drawer = React.forwardRef<HTMLDivElement, IDrawerProps>((props, ref) => {
  const { children, ele, isOpen, onClose, ...rest } = props;
  const { anchor } = rest;

  const isMounted = useIsMounted();
  const { Portal } = usePortal();

  const handleClose = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (isMounted()) {
        onClose(e);
      }
    },
    [isMounted, onClose],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <DrawerRoot ref={ref} role="navigation" {...{ anchor }}>
        <DrawerContent {...rest}>
          <CloseButton onClick={handleClose} role="button" {...{ anchor }}>
            <Icon ele={<Icon.Close />} />
          </CloseButton>
          {ele ? React.cloneElement(ele, {}, children) : children}
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
