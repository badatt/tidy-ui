import React, { forwardRef, useCallback, useState, MouseEvent } from 'react';
import {
  useIsMounted,
  useTimeout,
  InfoIcon,
  CheckCircleIcon,
  DangerousIcon,
  CancelIcon,
  WarningIcon,
} from '@tidy-ui/commons';
import { IMessageProps } from './types';
import { MessageRoot, CloseButton, MessageContent, Header, MessageLabel } from './components';

const Message = forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { children, closable, duration, onClose, header, noLabel, ...rest } = props;

  const isMounted = useIsMounted();
  const [isHidden, setHidden] = useState<boolean>(false);

  const { clear } = useTimeout(
    () => {
      setHidden(true);
      onClose?.();
    },
    duration,
    typeof duration === 'number' && duration > 0,
  );

  const handleClose = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (isMounted()) {
        clear();
        setHidden(true);
      }
      onClose?.(e);
    },
    [isMounted, onClose, clear],
  );

  if (isHidden) {
    return null;
  }

  const Icon = (props: IMessageProps) => {
    switch (props.color) {
      case 'info':
        return <InfoIcon />;
      case 'success':
        return <CheckCircleIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'danger':
        return <DangerousIcon />;
      default:
        return null;
    }
  };

  return (
    <MessageRoot ref={ref} role="message" {...rest}>
      {!noLabel && (
        <MessageLabel {...rest}>
          <Icon {...rest} />
          {rest.color}
        </MessageLabel>
      )}
      {closable && (
        <CloseButton onClick={handleClose} {...rest}>
          <CancelIcon outlined />
        </CloseButton>
      )}
      <MessageContent {...rest}>
        {header && <Header>{header}</Header>}
        {children}
      </MessageContent>
    </MessageRoot>
  );
});

Message.defaultProps = {
  color: 'info',
  closable: false,
  sharp: false,
  duration: 0,
  outlined: false,
  noLabel: false,
  stretch: false,
};

export { Message };
