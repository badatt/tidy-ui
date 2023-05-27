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
  const { children, closable, ele, onClose, ...rest } = props;
  const { isFilled, isSharp, isStretched, hasLabel, tone } = props;

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
    <MessageRoot ref={ref} role="note" {...rest}>
      {hasLabel && (
        <MessageLabel {...{ isFilled, isSharp, tone }}>
          <TonedIcon status={tone} />
          {tone}
        </MessageLabel>
      )}
      <MessageContent {...{ hasLabel, isFilled, isSharp, isStretched, tone }}>
        {ele ? React.cloneElement(ele, {}, children) : children}
        {closable && (
          <CloseButton onClick={handleClose} tone={tone} isFilled={isFilled} data-test-id="close-button" role="button">
            <Icon.Close />
          </CloseButton>
        )}
      </MessageContent>
    </MessageRoot>
  );
});

Message.defaultProps = {
  closable: false,
  hasLabel: true,
  isFilled: false,
  isSharp: false,
  isStretched: true,
  tone: 'neutral',
};

Message.displayName = 'Message';

export { Message };
