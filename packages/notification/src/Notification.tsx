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

/**
 * Notification component can be used to represent notifications on a page
 * based on the importance level, powered by various styles
 * (with theming) and settings. Use this component with
 * Toaster to throw auto-closable notifications on a page
 */
const Notification = React.forwardRef<HTMLDivElement, INotificationProps>((props, ref) => {
  const { children, icon, label, ele, closable, onClose, ...rest } = props;
  const { hasLabel, isFilled, tone } = props;
  const isMounted = useIsMounted();
  const [isHidden, setHidden] = React.useState<boolean>(false);
  const isLabelAllowed = [Tone[Tone.info], Tone[Tone.success], Tone[Tone.warning], Tone[Tone.danger]].includes(tone!);

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
        {isLabelAllowed && hasLabel && (
          <NotificationLabel {...{ isFilled, tone }}>
            {icon ?? <TonedIcon status={tone} />}
            {label ?? tone}
          </NotificationLabel>
        )}
        {closable && (
          <CloseButton onClick={handleClose} role="button" {...{ isFilled, tone }}>
            <Icon.Close />
          </CloseButton>
        )}
      </NotificationHeader>
      <NotificationContent {...{ hasLabel, isLabelAllowed }}>
        {ele ? React.cloneElement(ele, {}, children) : children}
      </NotificationContent>
    </NotificationRoot>
  );
});

Notification.defaultProps = {
  closable: true,
  hasLabel: true,
  isFilled: false,
  isSharp: false,
  tone: 'neutral',
};

Notification.displayName = 'Notification';

export { Notification };
