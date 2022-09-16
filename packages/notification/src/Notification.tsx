import React from 'react';
import { Icon, TonedIcon, useIsMounted } from '@tidy-ui/commons';
import { Tone } from '@tidy-ui/types';
import {
  CloseButton,
  NotificationContent,
  NotificationHeader,
  NotificationLabel,
  NotificationRoot,
} from './components';
import { INotificationProps } from './types';

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
          <CloseButton onClick={handleClose} {...rest} role="button">
            <Icon.Close />
          </CloseButton>
        )}
        {isLabelAllowed && !props.withoutLabel && (
          <NotificationLabel {...rest}>
            {icon || <TonedIcon {...rest} />}
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
