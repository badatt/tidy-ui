import React, { forwardRef, MouseEvent, useCallback, useState } from 'react';
import {
  CancelIcon,
  CheckCircleIcon,
  DangerousIcon,
  InfoIcon,
  useIsMounted,
  useTimeout,
  WarningIcon,
} from '@tidy-ui/commons';
import { CloseButton, Header, MessageContent, MessageLabel, MessageRoot } from './components';
import { IMessageProps } from './types';

const Message = forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { children, isClosable, onClose, withDuration, withHeader, ...rest } = props;

  const isMounted = useIsMounted();
  const [isHidden, setHidden] = useState<boolean>(false);
  const { clear } = useTimeout(onClose, withDuration, typeof withDuration === 'number' && withDuration > 0);

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
    switch (p.withColor) {
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
      {!props.withoutLabel && (
        <MessageLabel {...rest}>
          <Icon {...rest} />
          {rest.withColor}
        </MessageLabel>
      )}
      {isClosable && (
        <CloseButton onClick={handleClose} {...rest} role="close-btn">
          <CancelIcon outlined />
        </CloseButton>
      )}
      <MessageContent {...rest}>
        {withHeader && <Header>{withHeader}</Header>}
        {children}
      </MessageContent>
    </MessageRoot>
  );
});

Message.defaultProps = {
  isClosable: false,
  isOutlined: false,
  isSharp: false,
  isStretched: false,
  withColor: 'info',
  withDuration: 0,
  withoutLabel: false,
};

export { Message };
