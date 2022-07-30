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
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            ${isUnified &&
            css`
              border-bottom: 0 !important;
            `}
          }
          & > :last-child {
            border-top-left-radius: 0 !important;
            border-top-right-radius: 0 !important;
            border-top: 0 !important;
          }
          & > :not(:first-child):not(:last-child) {
            border-top: 0 !important;
            ${isUnified &&
            css`
              border-bottom: 0 !important;
            `}
          }
        `
      : css`
          & > :first-child {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            ${isUnified &&
            css`
              border-right: 0 !important;
            `}
          }
          & > :last-child {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
            border-left: 0 !important;
          }
          & > :not(:first-child):not(:last-child) {
            ${isUnified &&
            css`
              border-right: 0 !important;
            `}
            border-left: 0 !important;
          }
        `}
    ${isDisabled &&
    css`
      cursor: not-allowed !important;
      opacity: 0.6 !important;
      & * {
        cursor: not-allowed !important;
        box-shadow: none !important;
        &:hover {
          box-shadow: none !important;
        }
      }
    `}
    ${isStretched &&
    css`
      width: 100% !important;
      & * {
        flex-grow: 1 !important;
        flex-shrink: 1 !important;
        flex-basis: 1% !important;
      }
    `}
    & * {
      box-shadow: none !important;
    }
    & > :not(:first-child):not(:last-child) {
      border-radius: 0 !important;
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
