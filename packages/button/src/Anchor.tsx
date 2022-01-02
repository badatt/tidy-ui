import React from 'react';
import { styled, css } from '@tidy-ui/theme';
import { ExternalLinkIcon } from '@tidy-ui/icons';
import { sizeStyles } from './style';
import { IAnchorProps } from './types';

const AnchorRoot = styled.a<IAnchorProps>`
  ${({ theme: { palette, isDark }, disable }) => css`
    display: flex;
    align-items: center;
    color: ${isDark ? palette['major'][400] : palette['major'][600]};
    ${disable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
  `};
`;

const Icon = styled.i<IAnchorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size }) => css`
    height: ${sizeStyles[size!].iconSize};
    width: ${sizeStyles[size!].iconSize};
  `}
`;

const Anchor = React.forwardRef<HTMLAnchorElement, IAnchorProps>((props, ref) => {
  const { children, disable, newTab, ...rest } = props;
  return (
    <AnchorRoot role="anchor" ref={ref} disable={disable} {...rest} target={newTab ? '_blank' : '_top'}>
      {children}
      {newTab && (
        <Icon {...props}>
          <ExternalLinkIcon />
        </Icon>
      )}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  size: 'sm',
  newTab: false,
  disable: false,
};

export { Anchor };
