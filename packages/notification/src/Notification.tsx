import React from 'react';
import { Icon, Tone, TonedIcon, useIsMounted } from '@tidy-ui/commons';
import {
  CloseButton,
  NotificationContent,
  NotificationHeader,
  NotificationLabel,
  NotificationRoot,
} from './components';
import { INotificationProps } from './types';

/**
 * Notification component can be used to represent notifications on a page
 * based on the importance level, powered by various styles
 * (with theming) and settings. Use this component with
 * Toaster to throw auto-closable notifications on a page
 */
const Notification = React.forwardRef<HTMLDivElement, INotificationProps>((props, ref) => {
  const { children, icon, label, ele, closable, onClose, ...rest } = props;
  const isMounted = useIsMounted();
  const [isHidden, setHidden] = React.useState<boolean>(false);
  const isLabelAllowed = [Tone[Tone.info], Tone[Tone.success], Tone[Tone.warning], Tone[Tone.danger]].includes(
    props.tone!,
  );

  const handleClose = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClose?.(e);
      if (isMounted()) {
        setHidden(true);
      }
    },
    [isMounted, onClose],
  );

  if (isHidden) {
    return null;
  }
  return (
    <NotificationRoot ref={ref} role="alert" {...rest}>
      <NotificationHeader closable={closable}>
        {closable && (
          <CloseButton onClick={handleClose} outlined={rest.outlined} tone={rest.tone} role="button">
            <Icon.Close />
          </CloseButton>
        )}
        {isLabelAllowed && !props.withoutLabel && (
          <NotificationLabel {...rest}>
            {icon || <TonedIcon tone={rest.tone} />}
            {label || rest.tone}
          </NotificationLabel>
        )}
      </NotificationHeader>
      <NotificationContent {...rest} isLabelAllowed={isLabelAllowed}>
        {ele ? React.cloneElement(ele, {}, children) : children}
      </NotificationContent>
    </NotificationRoot>
  );
});

Notification.defaultProps = {
  closable: true,
  outlined: false,
  sharp: false,
  tone: 'info',
  withoutLabel: false,
};

export { Notification };
