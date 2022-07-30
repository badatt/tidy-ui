import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/theme';
import { IButtonToolbarProps } from './types';

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
