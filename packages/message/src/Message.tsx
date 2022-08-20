import React, { forwardRef, MouseEvent, useCallback, useState } from 'react';
import { CancelIcon, useIsMounted, useTimeout } from '@tidy-ui/commons';
import { CloseButton, Header, MessageContent, MessageLabel, MessageLabelIcon, MessageRoot } from './components';
import { IMessageProps } from './types';

/**
 * Message component can be used to display important information on a page based on the
 * information importance level, powered by various styles (with theming) and settings
 *
 */
const Message = forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { children, className, closable, onClose, duration, header, ...rest } = props;

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

  return (
    <MessageRoot className={className} ref={ref} role="note" {...rest}>
      {!props.withoutLabel && (
        <MessageLabel {...rest}>
          <MessageLabelIcon {...rest} />
          {rest.tone}
        </MessageLabel>
      )}
      {closable && (
        <CloseButton onClick={handleClose} {...rest} role="button">
          <CancelIcon isOutlined />
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
  duration: 0,
  outlined: false,
  sharp: false,
  stretched: false,
  tone: 'info',
  withoutLabel: false,
};

export { Message };
