import React from 'react';
import { LaunchIcon } from '@tidy-ui/icons';
import { css, styled } from '@tidy-ui/theme';
import { sizeStyles } from './style';
import { IAnchorProps } from './types';

const AnchorRoot = styled.a<IAnchorProps>`
  ${({ theme: { palette, isDark }, disable }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${isDark ? palette['major'][400] : palette['major'][600]};
    ${disable &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;
    `}
    &:hover {
      text-decoration: underline;
    }
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
          <LaunchIcon />
        </Icon>
      )}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  disable: false,
  newTab: false,
  size: 'sm',
};

export { Anchor };
