import React from 'react';
import { LaunchIcon } from '@tidy-ui/icons';
import { css, styled } from '@tidy-ui/theme';
import { sizeStyles } from './styles';
import { IAnchorProps } from './types';

const AnchorRoot = styled.a<IAnchorProps>`
  ${({ theme: { palette, isDark }, isDisabled }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${isDark ? palette['major'][400] : palette['major'][600]};
    ${isDisabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.6;
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
  height: ${sizeStyles['xs'].iconSize};
  width: ${sizeStyles['xs'].iconSize};
`;

const Anchor = React.forwardRef<HTMLAnchorElement, IAnchorProps>((props, ref) => {
  const { children, isLaunch, ...rest } = props;
  return (
    <AnchorRoot role="anchor" ref={ref} {...rest} target={isLaunch ? '_blank' : '_top'}>
      {children}
      {isLaunch && (
        <Icon {...props}>
          <LaunchIcon />
        </Icon>
      )}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  isDisabled: false,
  isLaunch: false,
};

export { Anchor };
