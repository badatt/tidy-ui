import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/theme';
import { IButtonGroupProps } from './types';

const ButtonGroupRoot = styled.div<IButtonGroupProps>`
  display: flex;
  ${({ isVertical, isDisabled, isStretched, isUnified }) => css`
    ${isVertical
      ? css`
          flex-direction: column;
          & > :first-child {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${isUnified &&
            css`
              border-bottom: 0;
            `}
          }
          & > :last-child {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: 0;
          }
          & > :not(:first-child):not(:last-child) {
            border-top: 0;
            ${isUnified &&
            css`
              border-bottom: 0;
            `}
          }
        `
      : css`
          & > :first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            ${isUnified &&
            css`
              border-right: 0;
            `}
          }
          & > :last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left: 0;
          }
          & > :not(:first-child):not(:last-child) {
            ${isUnified &&
            css`
              border-right: 0;
            `}
            border-left: 0;
          }
        `}
    ${isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      & > * {
        cursor: not-allowed;
        box-shadow: none;
        &:hover {
          box-shadow: none;
        }
      }
    `}
    ${isStretched &&
    css`
      width: 100%;
      & > * {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 1%;
      }
    `}
    & > * {
      box-shadow: none;
    }
    & > :not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  `}
`;

const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroupProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ButtonGroupRoot role="button-group" ref={ref} {...rest}>
      {children}
    </ButtonGroupRoot>
  );
});

ButtonGroup.defaultProps = {
  isDisabled: false,
  isStretched: false,
  isUnified: false,
  isVertical: false,
};

export { ButtonGroup };
