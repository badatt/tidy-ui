import React, { forwardRef } from 'react';
import { css, hsla, styled } from '@tidy-ui/theme';
import { IMessageProps } from './types';

const filledLabel = css<IMessageProps>`
  ${({ theme: { palette }, color }) => css`
    background-color: ${palette[color!][600]};
    color: ${palette[color!][50]};
  `}
`;

const outlinedLabel = css<IMessageProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[800], 0.8) : palette[color!][100]};
    border: 1px solid ${isDark ? palette[color!][600] : palette[color!][300]};
    border-bottom: 0;
  `}
`;

const filledContent = css<IMessageProps>`
  ${({ theme: { palette }, color }) => css`
    background-color: ${palette[color!][500]};
    color: ${palette[color!][50]};
  `}
`;

const outlinedContent = css<IMessageProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[900], 0.3) : palette[color!][50]};
    border: 1px solid ${isDark ? palette[color!][600] : palette[color!][300]};
  `}
`;

const MessageRoot = styled.div<IMessageProps>`
  ${({ theme: { layout }, color, sharp, stretch, noLabel, outlined }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: ${stretch ? '100%' : 'fit-content'};
    ${!noLabel &&
    css`
      &:before {
        content: '${color}';
        border-top-left-radius: ${!sharp && layout.radius};
        border-top-right-radius: ${!sharp && layout.radius};
        width: fit-content;
        padding: 0.25rem 1rem;
        font-size: 0.625rem;
        text-transform: uppercase;
        ${outlined ? outlinedLabel : filledLabel}
      }
    `}
  `}
`;

const MessageContent = styled.div<IMessageProps>`
  ${({ theme: { layout }, sharp, stretch, noLabel, outlined }) => css`
    display: flex;
    padding: 1rem;
    border-radius: ${!sharp && layout.radius};
    ${!noLabel &&
    css`
      border-top-left-radius: 0;
    `}
    width: ${stretch ? '100%' : 'fit-content'};
    ${outlined ? outlinedContent : filledContent}
  `}
`;

const Message = forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { children, duration, ...rest } = props;
  return (
    <MessageRoot ref={ref} role="message" {...rest}>
      <MessageContent {...rest}>{children}</MessageContent>
    </MessageRoot>
  );
});

Message.defaultProps = {
  color: 'info',
  closable: false,
  sharp: false,
  outlined: false,
  duration: 2000,
  noLabel: false,
  stretch: false,
};

export { Message };
