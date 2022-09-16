import React from 'react';
import { Icon, TonedIcon, useIsMounted } from '@tidy-ui/commons';
import { CloseButton, MessageContent, MessageLabel, MessageRoot } from './components';
import { IMessageProps } from './types';

/**
 * Message component can be used to display important information on a page based on the
 * information importance level, powered by various styles (with theming) and settings
 *
 */
const Message = React.forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { children, className, closable, ele, onClose, ...rest } = props;

  const isMounted = useIsMounted();
  const [isHidden, setHidden] = React.useState<boolean>(false);

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
    <MessageRoot className={className} ref={ref} role="note" {...rest}>
      {!props.withoutLabel && (
        <MessageLabel {...rest}>
          <TonedIcon {...rest} />
          {rest.tone}
        </MessageLabel>
      )}
      {closable && (
        <CloseButton onClick={handleClose} {...rest} role="button">
          <Icon.Close />
        </CloseButton>
      )}
      <MessageContent {...rest}>{ele ? React.cloneElement(ele, {}, children) : children}</MessageContent>
    </MessageRoot>
  );
});

Message.defaultProps = {
  closable: false,
  outlined: false,
  sharp: false,
  stretched: false,
  tone: 'info',
  withoutLabel: false,
};

Message.displayName = 'Message';

export { Message };
