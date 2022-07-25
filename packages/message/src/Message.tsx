import {
  CancelIcon,
  CheckCircleIcon,
  DangerousIcon,
  InfoIcon,
  useIsMounted,
  useTimeout,
  WarningIcon,
} from '@tidy-ui/commons';
import React, { forwardRef, MouseEvent, useCallback, useState } from 'react';
import { CloseButton, Header, MessageContent, MessageLabel, MessageRoot } from './components';
import { IMessageProps } from './types';

const Message = forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { children, closable, duration, onClose, header, ...rest } = props;

  const isMounted = useIsMounted();
  const [isHidden, setHidden] = useState<boolean>(false);
  const { clear } = useTimeout(onClose, duration, typeof duration === 'number' && duration > 0);

  const handleClose = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      onClose?.(e);
      clear();
      if (isMounted()) {
        setHidden(true);
      }
    },
    [isMounted, onClose, clear],
  );

  if (isHidden) {
    return null;
  }

  const Icon = (p: IMessageProps) => {
    switch (p.color) {
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
      {!props.noLabel && (
        <MessageLabel {...rest}>
          <Icon {...rest} />
          {rest.color}
        </MessageLabel>
      )}
      {closable && (
        <CloseButton onClick={handleClose} {...rest} role="close-btn">
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
  closable: false,
  color: 'info',
  duration: 0,
  noLabel: false,
  outlined: false,
  sharp: false,
  stretch: false,
};

export { Message };
