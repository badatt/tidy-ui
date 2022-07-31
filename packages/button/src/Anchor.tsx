import React from 'react';
import { LaunchIcon } from '@tidy-ui/icons';
import { css, styled } from '@tidy-ui/theme';
import { IAnchorProps } from './types';

/**
 * Internal root component with styles
 *
 */
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

/**
 * Internal Icon component with styles
 *
 */
const Icon = styled(LaunchIcon)<IAnchorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1em;
  width: 1em;
`;

/**
 * Anchor component is used to represent hyperlinks on a page, a good substitute for default
 * html `a` tag
 *
 */
const Anchor = React.forwardRef<HTMLAnchorElement, IAnchorProps>((props, ref) => {
  const { children, isLaunch, ...rest } = props;
  return (
    <AnchorRoot role="anchor" ref={ref} {...rest} target={isLaunch ? '_blank' : '_top'}>
      {children}
      {isLaunch && <Icon />}
    </AnchorRoot>
  );
});

Anchor.defaultProps = {
  isDisabled: false,
  isLaunch: false,
};

export { Anchor };
