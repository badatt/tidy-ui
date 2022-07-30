import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/theme';
import { IButtonToolbarProps } from './types';

/**
 * Internal root component with styles
 *
 */
const ButtonToolbarRoot = styled.div<IButtonToolbarProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  & * {
    box-shadow: none !important;
    &:hover {
      box-shadow: none !important;
    }
  }
  ${({ isDisabled }) => css`
    ${isDisabled &&
    css`
      cursor: not-allowed !important;
      opacity: 0.6 !important;
      & * {
        cursor: not-allowed !important;
      }
    `}
  `}
`;

/**
 * ButtonToolbar can group several Buttons & ButtonGroups to bring in that
 * toolbar effect, that you usually see in embedded editors
 *
 */
const ButtonToolbar = forwardRef<HTMLDivElement, IButtonToolbarProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ButtonToolbarRoot role="button-toolbar" ref={ref} {...rest}>
      {children}
    </ButtonToolbarRoot>
  );
});

ButtonToolbar.defaultProps = {
  isDisabled: false,
};

export { ButtonToolbar };
